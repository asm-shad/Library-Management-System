import { model, Schema } from "mongoose";

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    role: {
        type: String, required: true, 
        enum: [ "Librarian", "Customer" ]
    }
});

const User = model<IUser>("user", userSchema);
export default User;