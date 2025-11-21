import { Document } from 'mongoose';



export interface IPermission extends Document {
  name: string;
    description?: string;
    isActive: boolean;
}

export interface IRole extends Document{
    name: string;
    permission: IPermission['_id'][];
    isActive: boolean;
}

export interface IUser extends Document{
    name: string;
    email: string;
    password: string;
    role: IRole['_id'];
    isActive: boolean;
    comparePassword(password: string): Promise<boolean>;
}
export interface AuthRequest extends Request{
    user?: IUser;
}