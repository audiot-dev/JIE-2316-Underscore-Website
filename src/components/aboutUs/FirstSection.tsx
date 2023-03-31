import { Box, Typography, Paper, useMediaQuery, useTheme, Grid } from "@mui/material";

export default function FirstSection() {

    const theme = useTheme()
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))
    const medScreen = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <Box sx={{ backgroundImage: 'url(/AboutUsImage.png)',height: 650,backgroundPosition: 'center', backgroundRepeat: 'no-repeat',backgroundSize: 'cover',position: 'relative'}}>
             <Box textAlign="left" bgcolor="rgba(255,255,255,.35)" px={10} py={smallScreen? 10:5} mt={smallScreen? "380px": medScreen? "460px":"460px"} position="absolute" width="100%" >
                <Typography py={0} sx={{ fontWeight: 'bold', letterSpacing: 1 }} variant={smallScreen ? 'h2' : 'h1'} color="white">
                    About Us
                </Typography>
            </Box> 
        </Box>
    )
}