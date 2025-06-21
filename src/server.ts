import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express()

app.use(cors())
app.use(express.json())

app.listen(5000, ()=> {
    console.log(`😎 Server is running.`);
})

async function server() {
    try {
        // await mongoose.connect()

        console.log("DB Connected on port ${5000");
    } catch (error) {
        console.error(`Server Error ${server}`);
    }
}

server();