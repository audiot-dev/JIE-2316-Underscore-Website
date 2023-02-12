import { Box, Grid, Typography } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useCallback, useEffect, useMemo, useState } from "react";
import { OrangePrimaryDenseButton } from "../../misc/buttons";

interface Props {
    onClick: () => void;
    lastUpdated: Dayjs;
}

export default function Update({onClick, lastUpdated}:Props) {

    const [minutesAgo, setMinutesAgo] = useState(0)

    const updateMinutes = () => {
        if (!lastUpdated) return
        setMinutesAgo(dayjs().diff(lastUpdated, "minutes"))
    }

    useEffect(() => {
        updateMinutes()
        const interval = setInterval(() => {
            updateMinutes()
        }, 20000)

        return () => clearInterval(interval)
    }, [lastUpdated])

    return (
        <Box>
            <Grid container spacing={3} alignItems="center">
                <Grid item>
                    <OrangePrimaryDenseButton onClick={() => onClick()}>
                        Update
                    </OrangePrimaryDenseButton>
                </Grid>
                <Grid item>
                    <Typography variant="body1">
                        Last updated {minutesAgo} minutes ago
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}