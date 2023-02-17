import { Box, Typography, Paper, useMediaQuery, useTheme, Grid , Divider } from "@mui/material";
import { useState } from "react";
import { theme } from "../../styles/theme";

export default function SecondSection() {

    const theme = useTheme()
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))
    const medScreen = useMediaQuery(theme.breakpoints.down('lg'))
    const xsmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const xlScreen =  useMediaQuery(theme.breakpoints.down('xl'))

    return (
        <Box  sx={{ background:`linear-gradient(to right,#9e9e9e,#ffffff,#FFB800)`, height: 1000,backgroundPosition: 'center', backgroundRepeat: 'no-repeat',backgroundSize: 'cover',position: 'relative'}}>
            <Grid container spacing={1} direction={smallScreen? "column": "row"}>
                <Grid item  md={6} xs={10}>
                    <Box>
                        <Typography width={smallScreen? "100%": "100%"} pl={smallScreen? 5: medScreen? 10: 10}  pt={smallScreen? 5: medScreen? 10: 15}   sx={{ fontWeight: 'bold',letterSpacing: 1}} variant={smallScreen ? 'h4' : 'h3'} color="secondary.main">
                            Our Vision
                        </Typography> 
                        <Typography width={smallScreen? "100%": "100%"} pl={smallScreen? 10: medScreen? 10: 10}  pt={smallScreen? 0: medScreen? 2: 5}  variant={smallScreen ? 'body1' : 'h5'} color="secondary.main">
                            We started developing tools for the poultry industry because we want to change it for the better. 
                        </Typography> 
                        <Typography width={smallScreen? "100%": "100%"} pl={smallScreen? 10: medScreen? 10: 10}  pt={smallScreen? 0: medScreen? 2: 5}  variant={smallScreen ? 'body1' : 'h5'} color="secondary.main">
                        These are the effects we hope to have on the poultry industry:
                        </Typography> 
                        <Typography width={smallScreen? "100%": "100%"} pl={smallScreen? 10: medScreen? 15: 15}  pt={smallScreen? 0: medScreen? 2: 5}  variant={smallScreen ? 'body1' : 'h5'} color="secondary.main">
                         - Farmers gain a powerful monitoring tool that can assist them in managing their 
                           farms and upholding industry welfare standards
                        </Typography> 
                        <Typography width={smallScreen? "100%": "100%"} pl={smallScreen? 10: medScreen? 15: 15}  pt={smallScreen? 0: medScreen? 2: 5}  variant={smallScreen ? 'body1' : 'h5'} color="secondary.main">
                         - Integrators gain more thorough datasets to ensure that their chickens are properly cared for
                        </Typography> 
                        <Typography width={smallScreen? "100%": "100%"} pl={smallScreen? 10: medScreen? 15: 15}  pt={smallScreen? 0: medScreen? 2: 5}  variant={smallScreen ? 'body1' : 'h5'} color="secondary.main">
                         - Consumers and retailers gain confidence that the food they buy is ethically produced
                        </Typography> 
                    </Box>
                </Grid>
                <Grid item md={6} xs={10}>
                        <Box py={smallScreen? 1: medScreen? 30: 20} px={medScreen? 5:smallScreen? 50: 10}>
                             <img 
                            style={{aspectRatio: '1/1', width:'90%', height: 'auto'}}
                            src="missionpageimage3.png" />
                        </Box>  
                 </Grid>
            </Grid>

        </Box>
    )
}