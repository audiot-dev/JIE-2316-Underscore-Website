import { Box, Typography, useMediaQuery, useTheme, NoSsr, Grid } from "@mui/material";
import { useRef,useState } from "react";


export default function SecondSection() {

    const theme = useTheme()
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))
    const medScreen = useMediaQuery(theme.breakpoints.down('lg'))
    const xsmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const xlScreen =  useMediaQuery(theme.breakpoints.down('xl'))


    return (
        <Box pt={0} pb={3} textAlign="center" sx={{ backgroundColor:"text.primary",backgroundPosition: 'center', backgroundRepeat: 'no-repeat',backgroundSize: 'cover',position: 'relative'}}>
           <Box  pt={10} pb={15}>
                <Typography sx={{ letterSpacing: 1 }} variant={medScreen ? 'h4' : 'h3'} color="primary.main" >
                        Audio Ts Leadership Team
                    </Typography> 
            </Box>
            <Box>
            <Grid container spacing={12} direction={smallScreen? "column":"row"} pb={15}>
                <Grid item md={4} >
                        <Box mt={smallScreen? 15:0} textAlign="center" pb={5}>
                            <img 
                                style={{aspectRatio: '11/9', width:'auto', height: 'auto'}}
                                src="/tom1.png" />
                        </Box>
                        <Box>
                            <Typography variant={smallScreen ? 'h5' : 'h4'} pb={2} color="gray">
                                Tom Darbonne
                            </Typography> 
                        </Box>
                        <Box>
                            <Typography px={10} variant={smallScreen ? 'body2' : 'body1'} color="white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </Typography> 
                        </Box>
                </Grid>
                <Grid item md={4} >
                <Box mt={smallScreen? 15:0} textAlign="center" pb={5}>
                            <img 
                                style={{aspectRatio: '11/9', width:'auto', height: 'auto'}}
                                src="/tom1.png" />
                        </Box>
                        <Box>
                            <Typography variant={smallScreen ? 'h5' : 'h4'} pb={2} color="gray">
                                Dom Tarbonne
                            </Typography> 
                        </Box>
                        <Box>
                            <Typography px={10} variant={smallScreen ? 'body2' : 'body1'} color="white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </Typography> 
                        </Box>
                </Grid>
                <Grid item md={4} >
                <Box mt={smallScreen? 15:0} textAlign="center" pb={5}>
                            <img 
                                style={{aspectRatio: '11/9', width:'auto', height: 'auto'}}
                                src="/tom1.png" />
                        </Box>
                        <Box>
                            <Typography variant={smallScreen ? 'h5' : 'h4'} pb={2} color="gray">
                                Tom Tarbonne
                            </Typography> 
                        </Box>
                        <Box>
                            <Typography px={10} variant={smallScreen ? 'body2' : 'body1'} color="white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </Typography> 
                        </Box>
                </Grid>

            </Grid>
            </Box>
            

        </Box>
    )
}