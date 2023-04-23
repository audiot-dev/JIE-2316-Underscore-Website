import { Box, Typography, useMediaQuery, useTheme, NoSsr, Grid } from "@mui/material";
import Video from "../misc/Video";

export default function SecondSection() {

    const theme = useTheme()
    const medScreen = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <Box pt={0} pb={3} textAlign="center" sx={{ backgroundColor:"text.primary",backgroundPosition: 'center', backgroundRepeat: 'no-repeat',backgroundSize: 'cover',position: 'relative'}}>
           <Box  pt={10}>
                <Typography sx={{ letterSpacing: 1 }} variant={medScreen ? 'h3' : 'h2'} color="primary.main" >
                    System Overview
                </Typography> 
            </Box>
            <Box maxWidth={1400} my={10}  mx="auto" position="relative">
                <Video src="/systemoverviewdraft2.mp4" />
            </Box>
        </Box>
    )
}
