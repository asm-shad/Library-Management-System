import { Router } from "express";
import {
  registerUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "./user.controller";

const userRoute = Router();

userRoute.post("/user", registerUser);
userRoute.get("/users", getUsers);
userRoute.get("/user/:id", getUserById);
userRoute.patch("/user/:id", updateUser);
userRoute.delete("/user/:id", deleteUser);

export default userRoute;