import { S_Ref, C_Ref } from "./fauna"
import { Expr } from "faunadb"

interface AnalyticsUserData {
    randomId: string;
    pageVisitFrequencies: {
        [page:string]: number;
    };
}

interface S_AnalyticsUserData extends AnalyticsUserData {
    lastVisit: Expr;
}

interface C_AnalyticsUserData extends AnalyticsUserData {
    lastVisit: {"@ts": string};
}

export interface S_AnalyticsUser {
    ref: S_Ref;
    data: S_AnalyticsUserData;
}

export interface C_AnalyticsUser {
    ref: C_Ref;
    data: C_AnalyticsUserData;
}