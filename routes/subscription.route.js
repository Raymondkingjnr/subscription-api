import {Router} from "express";

const subscriptionRoute = Router();

subscriptionRoute.get('/', (req, res) => res.send({title: "Get All Subscriptions"}))

subscriptionRoute.get('/:id', (req, res) => res.send({title: "Get Single Subscription"}))

subscriptionRoute.post('/', (req, res) => res.send({title: "Create Subscription"}))

subscriptionRoute.put('/:id', (req, res) => res.send({title: "Update subscription"}))

subscriptionRoute.delete('/:id', (req, res) => res.send({title: "delete Subscription"}))

subscriptionRoute.get('/user/:id', (req, res) => res.send({title: "Get all user Subscriptions"}))

subscriptionRoute.put('/:id/cancel', (req, res) => res.send({title: "Create Subscription"}))

subscriptionRoute.get('/incoming-renewals', (req, res) => res.send({title: "Create Subscription"}))

export  default  subscriptionRoute;