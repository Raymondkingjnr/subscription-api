import {Router} from 'express';
import {sendReminders} from "../controllers/workflow.controllers.js";

const workflowRoutes = Router();


workflowRoutes.post("/subscription/reminder", sendReminders)

export default workflowRoutes;