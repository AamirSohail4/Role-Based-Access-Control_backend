import mongoose from 'mongoose';
import { IRole } from '../types';

const roleSchema = new mongoose.Schema<IRole>({
  name: { type: String, required: true, unique: true },
    permission: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Permission' }],
   isActive: { type: Boolean, default: true },
});

export default mongoose.model<IRole>('Role', roleSchema);