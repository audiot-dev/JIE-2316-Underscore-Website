import { Box, Typography, Paper, useMediaQuery, useTheme, Grid } from "@mui/material";

export default function FirstSection() {

    const theme = useTheme()
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))
    const medScreen = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <Box sx={{ backgroundImage: 'url(/techpageimage.png)',height: 666,backgroundPosition: 'center', backgroundRepeat: 'no-repeat',backgroundSize: 'cover',position: 'relative'}}>
             <Box textAlign="left" bgcolor="rgba(255,255,255,.50)" px={10} py={smallScreen? 8:5} mt={smallScreen? "390px": medScreen? "400px":"390px"} position="absolute" width="100%" >
                <Typography py={0} sx={{ fontWeight: 'bold', letterSpacing: 1 }} variant={smallScreen ? 'h3' : 'h1'} color="secondary.main">
                    Technology
                </Typography>
                <Typography py={0}  sx={{ fontWeight: 'bold' }} variant={smallScreen ? 'h5' : medScreen ? 'h5': 'h4'} color="secondary.main">
                Combining audio and visual poultry monitoring systems
                for optimal welfare outcomes.
                </Typography>
            </Box>
  
        </Box>
    )
}