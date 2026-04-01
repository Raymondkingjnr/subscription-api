import express from "express";
import {PORT} from "./config/env.js"
import userRouter from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import subscriptionRoute from "./routes/subscription.route.js";
import connectToMongoDB from "./database/mongodb.js";
import errorMiddleware from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";
import arcjetMiddleware from "./middleware/arcjet.middleware.js";
import workflowRoutes from "./routes/workflow.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
// app.use(arcjetMiddleware)

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/subscription', subscriptionRoute)
app.use('/api/v1/workflows', workflowRoutes)

app.use(errorMiddleware)

app.get("/", (req, res) => {
res.send( "welcome to my first api")
})

app.listen(PORT, async () => {
    console.log(`Listening on  http://localhost:${PORT}`);
   await connectToMongoDB()
})

export default  app;
