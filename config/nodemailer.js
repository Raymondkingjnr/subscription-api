import {EMAIL_PASSWORD} from "./env.js";

import nodemailer from "nodemailer";

export const account_mail = 'nnajiarinze001@gmail.com'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: account_mail,
        pass: EMAIL_PASSWORD,
    },
});


export  default transporter;