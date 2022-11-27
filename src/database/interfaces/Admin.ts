import {S_Ref, C_Ref} from "./fauna"

export interface AdminData {
    username: string;
    email: string;
    password: string; 
}

export interface C_AdminData extends Omit<AdminData, "password"> {}

export interface S_Admin {
    ref: S_Ref;
    data: AdminData;
}

export interface C_Admin {
    ref: C_Ref;
    data: C_AdminData;
}