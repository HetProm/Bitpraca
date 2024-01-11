import mongoose from "mongoose";
import { useRuntimeConfig } from '@nuxt/config/runtime';

export default async () => {
    const config = useRuntimeConfig();
    try {
        const DB_OPTIONS = {
            dbName: config.dbName,
            user: config.user,
            pass: config.pass,
            authSource: config.authSource
        };
        await mongoose.connect(config.dburl, DB_OPTIONS);
        console.log("Connected Successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
