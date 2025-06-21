import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config";

const app = express()

app.use(cors())
app.use(express.json())

app.listen(config.port, ()=> {
    console.log(`😎 Server is running.`);
})

async function server() {
    try {
        await mongoose.connect(config.database_url!);

        console.log(`DB Connected on port ${config.port}`);
    } catch (error) {
        console.error(`Server Error ${server}`);
    }
}

server();