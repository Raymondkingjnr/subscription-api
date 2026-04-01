import  {config} from "dotenv";

if (process.env.NODE_ENV !== 'production') {
    config({path: `.env.${process.env.NODE_ENV || 'development'}.local`});
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