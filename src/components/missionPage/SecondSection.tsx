import { Box, Typography, Paper, useMediaQuery, useTheme, Grid } from "@mui/material";
import { useState } from "react";
import { theme } from "../../styles/theme";

export default function SecondSection() {

    const theme = useTheme()
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Box sx={{ background:`linear-gradient(to bottom,#ffffff,#bdbdbd)`, height: 5000,backgroundPosition: 'center', backgroundRepeat: 'no-repeat',backgroundSize: 'cover',position: 'relative'}}>
            
            <Box sx={{backgroundColor: "background.default", height: 900}}  px={2} py={10} mt={smallScreen? "30px":"20px"} position="absolute" width="95%" right="0%">
                <Grid container spacing={0} alignItems="center" direction="row">
                    <Grid item width="50%" >
                        <Box sx={{height: 500}} textAlign="left" >
                            <Typography px={15}   sx={{fontWeight: 'bold', letterSpacing: 1}} variant={smallScreen ? 'h5' : 'h4'} color="secondary.main">
                            Learning From the Best
                            </Typography> 
                            <Typography px={15} py={3}  sx={{  }} variant={smallScreen ?  'body2' : 'body1'} color="secondary.main">
                            For centuries, farmers have used their experience to learn and adapt to the needs of their animals. 
                            Their dedication to caring for animals helps to feed the world.
                            </Typography> 
                            <Typography px={15} py={3}  sx={{  }} variant={smallScreen ? 'body2' : 'body1'} color="secondary.main">
                            The amount of specialized knowledge needed to be a poultry farmer is surprisingly great. Just by 
                            hearing one of their chickens, a poultry farmer can tell if they’re healthy, happy, hungry, or sick. 
                            It may seem instinctual to some, but that level of adaptation is made possible by the supercomputer
                            between our ears -- our brains!
                            </Typography> 
                            <Typography px={15} py={3}  sx={{  }} variant={smallScreen ? 'body2' : 'body1'} color="secondary.main">
                            We can’t replicate what farmers do, but we can strive toke ma their work easier in this rapidly changing world.
                            </Typography> 

                        </Box>
                    </Grid>
                    <Grid item width="50%">
                    <Box sx={{height: 500}} textAlign="left" >
                        <Typography px={15} py={0}  sx={{  }} variant={smallScreen ? 'h5' : 'body1'} color="secondary.main">
                            video!
                        </Typography> 

                    </Box>
                    </Grid>
                    <Grid item width="1000%">
                        <Box sx={{backgroundColor: "text.primary", height: 900, borderRadius: '30px'}} px={50}>

                        </Box>
                    </Grid>
                </Grid>
                

            </Box>
        </Box>
    )
}