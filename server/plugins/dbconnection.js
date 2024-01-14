import mongoose from "mongoose";
import axios from "axios";
export default defineNitroPlugin( async (nitroApp) => {

    console.log('base')

    
    const config = useRuntimeConfig();
    try {
        const DB_OPTIONS = {
            dbName: config.dbName,
            user: config.user,
            pass: config.pass,
            authSource: config.authSource
        };
        await mongoose.connect(config.dbApiEntry, DB_OPTIONS);
        console.log("Connected Successfully");
    } catch (error) {
        console.error(`Error connecting ${config.dbName} url: ${config.dburl} to MongoDB:`, error);
    }
})
