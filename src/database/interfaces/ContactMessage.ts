import {S_Ref, C_Ref} from "./fauna"
import {Expr} from 'faunadb'

export interface ContactMessageData {
    first: string;
    last: string;
    email: string;
    message: string;
}

interface C_ContactMessageData extends ContactMessageData {
    time: {'@ts': string;};
}

interface S_ContactMessageData extends ContactMessageData {
    time: Expr;
}

export interface C_ContactMessage {
    ref: C_Ref;
    data: C_ContactMessageData;
}

export interface S_ContactMessage {
    ref: S_Ref;
    data: S_ContactMessageData;
}