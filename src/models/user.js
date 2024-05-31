import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;
const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
