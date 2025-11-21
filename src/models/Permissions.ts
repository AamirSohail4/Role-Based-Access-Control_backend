import mongoose from "mongoose";
import { IPermission } from "../types";

const permissionScheema = new mongoose.Schema<IPermission>({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    isActive: { type: Boolean, default: true },
})

export default mongoose.model<IPermission>('Permission',permissionScheema)