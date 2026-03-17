import  {config} from "dotenv";

const nodeEnv = process.env.NODE_ENV || 'development';
config({path: `.env.${nodeEnv}.local`});

export const {
    PORT,
    NODE_ENV,
    DB_URL,
    JWT_EXPIRES_IN,
    JWT_SECRET
} = process.env