import  {config} from "dotenv";

const nodeEnv = process.env.NODE_ENV || 'development';

if (nodeEnv === 'development') {
    config({path: `.env.development.local`});
}

export const {
    PORT,
    NODE_ENV,
    DB_URL,
    JWT_EXPIRES_IN,
    JWT_SECRET,
    ARCJET_KEY,
    QSTASH_URL,
    QSTASH_TOKEN,
    SERVER_URL,
    EMAIL_PASSWORD,
} = process.env