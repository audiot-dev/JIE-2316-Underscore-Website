import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";

export default function ContactBox() {

    const theme = useTheme()
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))
    const medScreen = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <Box sx={{
            py: 5,
            backgroundColor: 'secondary.main',
            textAlign: 'center',
        }}>
            <Typography py={2} sx={{ fontWeight: 'bold', letterSpacing: 1 }} variant={smallScreen ? 'h4' : 'h3'} color="primary.main">
                CONTACT US
            </Typography>
            <Box sx={{ 
                backgroundImage: 'url(/vector_chicken.svg)',
                height: 300,
                width: 260,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                position: 'relative',
                margin: 'auto'}}>
            </Box>
            <Typography pt={5} color='#FFFFFF' variant={smallScreen ? 'h6' : 'h4'}>
                Get in touch!
            </Typography>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 0.5, sm: 2, md: 3 }} px={14} pt={5}>
                <Grid item xs={4}>
                    <Box sx={{ 
                        backgroundImage: 'url(/location.svg)',
                        margin: 'auto',
                        height: 30,
                        width: 30,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        position: 'relative'}}>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Typography color='#FFFFFF' textAlign='left'>
                        AudioT Corporate Headquarters
                    </Typography>
                    <Typography color='#FFFFFF' textAlign='left'>
                        Atlanta, GA
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{ 
                        backgroundImage: 'url(/mail.svg)',
                        margin: 'auto',
                        height: 30,
                        width: 30,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        position: 'relative'}}>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Typography color='#FFFFFF' textAlign='left'>
                        contact@audiot.com
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{ 
                        backgroundImage: 'url(/phone.svg)',
                        margin: 'auto',
                        height: 30,
                        width: 30,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        position: 'relative'}}>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Typography color='#FFFFFF' textAlign='left'>
                        123-456-7890
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}