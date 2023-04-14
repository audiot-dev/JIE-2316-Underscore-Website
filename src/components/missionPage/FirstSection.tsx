import { Box, Typography, Paper, useMediaQuery, useTheme, Grid } from "@mui/material";

export default function FirstSection() {

    const theme = useTheme()
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))
    const medScreen = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <Box sx={{ backgroundImage: 'url(/broiler-chickens.jpg)',height: 800,backgroundPosition: 'center', backgroundRepeat: 'no-repeat',backgroundSize: 'cover',position: 'relative'}}>
             <Box textAlign="left" bgcolor="rgba(255,255,255,.80)" px={10} py={smallScreen? 10:5} mt={smallScreen? "410px": medScreen? "530px":"510px"} position="absolute" width="100%" >
                <Typography py={0} sx={{ fontWeight: 'bold', letterSpacing: 1 }} variant={smallScreen ? 'h3' : 'h1'} color="secondary.main">
                    Our Mission
                </Typography>
                <Typography py={0}  sx={{ fontWeight: 'bold' }} variant={smallScreen ? 'h5' : medScreen ? 'h5': 'h4'} color="secondary.main">
                    Farmers are the backbone of the poultry industry.
                </Typography>
                <Typography py={1}  sx={{ fontWeight: 'bold' }} variant={smallScreen ? 'h5' : medScreen ? 'h5': 'h4'} color="secondary.main">
                    We want to give them better tools to get the job done.
                </Typography>
            </Box>
        </Box>
    )
}