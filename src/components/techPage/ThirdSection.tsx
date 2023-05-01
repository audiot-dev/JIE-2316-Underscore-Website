import { Box, Typography, Paper, useMediaQuery, useTheme,  NoSsr,Grid } from "@mui/material";
import { Container } from "@mui/system";
import Video from "../misc/Video";

export default function ThirdSection() {

    const theme = useTheme()
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Box py={3} textAlign="center" sx={{backgroundColor: "text.primary"}}>
            <Box mb={6} mt={5}>
                <Typography variant={smallScreen ? 'h3' : 'h2'} color="primary.main">
                Anomaly Detection
                </Typography> 
            </Box>

            <Box maxWidth={1400} my={10} mx="auto"  position="relative">
                <Video src="/anomalies-vid.mp4" />
            </Box>
           
        </Box>

    )
}