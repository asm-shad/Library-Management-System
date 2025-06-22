import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config";
import userRoute from "./modules/user/user.route";

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRoute);

app.get("/", (req: Request, res: Response) => {
    console.log("Welcome to library management system");
    res.send({
        success: true,
        message: "Welcome to library management system"
    });
})

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