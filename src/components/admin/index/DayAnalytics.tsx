import { Dispatch, SetStateAction, useCallback, useEffect, useMemo } from "react"
import { Backdrop, Box, CircularProgress, Grid, Paper, TextField, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import { DailyAnalyticsBank } from "./Main";
import axios from "axios";
import { Bar } from "react-chartjs-2"
import Update from "./Update";

interface Props {
    bank: DailyAnalyticsBank;
    setBank: Dispatch<SetStateAction<DailyAnalyticsBank>>
}

const pageNames = {
    "Home": "/",
    "About Us": "/about-us",
    "Our Mission": "/our-mission",
    "Contact Us": "/contact-us",
}

const chartOptions = {
    responseive: true,
    scales: {
        x: {
            title: {
                display: true,
                text: "Page"
            }
        },
        y: {
            title: {
                display: true,
                text: "Views"
            },
            ticks: {
                precision: 0
            }
        }
    }
}

export default function DayAnalytics({bank, setBank}:Props) {

    const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"))

    const analytics = useMemo(() => bank.data[date]?.data, [date, bank])
    const lastUpdated = useMemo(() => bank.data[date]?.timeUpdated, [date, bank])

    const updateDayAnalytics = useCallback(async (date:string) => {
        try {
            const {data: {analytics}} = await axios({
                method: "GET",
                url: `/api/admin/analytics/${date}`
            })

            setBank({data: {...bank.data, [date]: {
                status: "updated",
                timeUpdated: dayjs(),
                data: analytics
            }}})
        } catch (e) {
            console.log(e)
        }
    }, [bank])

    useEffect(() => {

        if (bank.data[date]) return

        setBank({data: {...bank.data, [date]: {...bank.data[date], status: "updating"}}})

        updateDayAnalytics(date)

    }, [date])

    const update = async () => {

        setBank({data: {...bank.data, [date]: {...bank.data[date], status: "updating"}}})

        updateDayAnalytics(date)
    }

    const data = useMemo(() => {
        
        if (!analytics) {
            return {
                labels: [],
                datasets: []
            }
        }

        const labels = Object.keys(pageNames)
        
        return {
            labels,
            datasets: [
                {
                    data: labels.map(label => (
                        analytics.data.pageVisitFrequencies[pageNames[label as keyof typeof pageNames]] || 0
                    )),
                    backgroundColor: "#ba8d69"
                }
            ]
        }
    }, [analytics])

    return (
        <Box maxWidth="min(800px, 95vw)">
            <Paper>
                <Box p={3} sx={{position: "relative"}}>
                    <Box my={3}>
                        <Grid container alignItems="end" spacing={3}>
                            <Grid item>
                                <TextField type="date" InputLabelProps={{shrink: true}}
                                value={date} onChange={(e) => setDate(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <Typography variant="h6">
                                    Analytics
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box my={3}>
                        <Bar data={data} options={chartOptions}  />
                    </Box>
                    <Box>
                        <Update onClick={() => update()} lastUpdated={lastUpdated} />
                    </Box>
                    <Backdrop sx={{position: "absolute", borderRadius: 1}} 
                        open={!analytics || bank.data[date]?.status === "updating"}>
                        <CircularProgress size={80} />
                    </Backdrop>
                </Box>
            </Paper>
        </Box>
    )
}