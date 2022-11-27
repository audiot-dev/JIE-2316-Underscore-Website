import { S_Ref, C_Ref } from "./fauna"
import { Expr } from "faunadb"

interface AnalyticsDailyData {
    pageVisitFrequencies: {
        [page:string]: number;
    }
}

interface S_AnalyticsDailyData extends AnalyticsDailyData {
    date: Expr;
}

interface C_AnalyticsDailyData extends AnalyticsDailyData {
    date: {"@date": string};
}

export interface S_AnalyticsDaily {
    ref: S_Ref;
    data: S_AnalyticsDailyData;
}

export interface C_AnalyticsDaily {
    ref: C_Ref;
    data: C_AnalyticsDailyData;
}