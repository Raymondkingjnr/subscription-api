import {Router} from "express";
import authorize from "../middleware/auth.middleware.js";
import {
    createSubscription,
    getAllSubscriptions, getSubsriptionById,
    getUsersSubscriptions
} from "../controllers/subscription.controller.js";

const subscriptionRoute = Router();

subscriptionRoute.get('/', getAllSubscriptions)

subscriptionRoute.get('/:id', getSubsriptionById)

subscriptionRoute.post('/', authorize, createSubscription)

subscriptionRoute.put('/:id', (req, res) => res.send({title: "Update subscription"}))

subscriptionRoute.delete('/:id', (req, res) => res.send({title: "delete Subscription"}))

subscriptionRoute.get('/user/:id',authorize, getUsersSubscriptions)

subscriptionRoute.put('/:id/cancel', (req, res) => res.send({title: "Subscription Cancelled"}))

subscriptionRoute.get('/incoming-renewals', (req, res) => res.send({title: "Subscription"}))

export  default  subscriptionRoute;