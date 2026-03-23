import dayjs from "dayjs";
import {createRequire} from 'module';
import Subscription from "../models/subscription.models.js";
const require = createRequire(import.meta.url);
const {serve} = require('@upstash/workflow/express');

const REMINDERS = [7,5,2,1]

export const sendReminders = serve(async (context) => {
    const {subscriptionId} = context.requestPayload;
    const subscription = await fetchSubscription(context, subscriptionId);

    if (!subscription || subscription.status !== 'active') return;

    const renewalDate = dayjs(subscription.renewalDate);

    if (renewalDate.isBefore(dayjs())){
        console.log('Renewal date is in the past, ')
        return;
    }

    for (const daysBefore of REMINDERS){
        const reminderDate = renewalDate.subtract(daysBefore, 'day');

        if (reminderDate.isAfter(dayjs())){
            await sleepUntilReminder(context, `reminder-${daysBefore}`, reminderDate);
        }

        await triggerReminders(context, `reminder-${daysBefore} days before`);
    }

})

const fetchSubscription = async (context, subscriptionId) => {
    return await context.run('get subscription', async () =>{
        return Subscription.findById(subscriptionId).populate('user', 'name email')
    })
}

const sleepUntilReminder = async (context,label,date) =>{
    console.log(`sleeping until ${label} reminder at ${date}`);
    await context.sleepUntil(label, date.toDate());
}

const triggerReminders = async(context, label) =>{
    return await  context.run(label, () =>{
        console.log(`triggering ${label} reminders`);
        //send email
    })
}