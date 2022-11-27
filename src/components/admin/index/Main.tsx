import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { C_Admin } from "../../../database/interfaces/Admin";
import { C_AnalyticsDaily } from "../../../database/interfaces/AnalyticsDaily";
import DayAnalytics from "./DayAnalytics";
import { Dayjs } from "dayjs"

interface Props {
    admin: C_Admin;
}

interface DailyAnalytics {
    status: "updated" | "updating";
    timeUpdated: Dayjs;
    data: C_AnalyticsDaily;
}

export interface DailyAnalyticsBank {
    data: {
        [date:string]: DailyAnalytics;
    }
}

export default function Main({admin}:Props) {

    const [bank, setBank] = useState({data: {}})

    return (
        <Box ml={3}>
            <Grid container height="98px" alignItems="center" >
                <Grid item>
                    <Typography variant="h4">
                        Welcome back, {admin.data.username}
                    </Typography>
                </Grid>
            </Grid> 
            <Box>
                <DayAnalytics bank={bank} setBank={setBank} />
            </Box>
        </Box>
    )
}