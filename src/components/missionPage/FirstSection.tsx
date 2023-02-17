import { Box, Typography, Paper, useMediaQuery, useTheme, Grid } from "@mui/material";

export default function FirstSection() {

    const theme = useTheme()
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))
    const medScreen = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <Box sx={{ backgroundImage: 'url(/missionpageImage.png)',height: 900,backgroundPosition: 'center', backgroundRepeat: 'no-repeat',backgroundSize: 'cover',position: 'relative'}}>
             <Box textAlign="left" bgcolor="rgba(255,255,255,.50)" px={10} py={10} mt={smallScreen? "610px":"560px"} position="absolute" width="100%" >
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