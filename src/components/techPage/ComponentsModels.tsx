import { Box, Typography, useMediaQuery, useTheme, NoSsr, Grid } from "@mui/material";
import { useRef,useState } from "react";
import { RedOrangeLargeIconButton } from "../misc/buttons";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function ComponentsModels() {

    const theme = useTheme()
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))
    const medScreen = useMediaQuery(theme.breakpoints.down('lg'))
    const xsmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const xlScreen =  useMediaQuery(theme.breakpoints.down('xl'))

    const vidRef = useRef<HTMLVideoElement>(null)

    const [showPlayBtn, setShowPlayBtn] = useState(true)

    const onVidClick = () => {
        if (vidRef.current?.paused) {
            vidRef.current?.play()
            setShowPlayBtn(false)
        }
    }

    return (
        <Box >
            <Typography  py={10} sx={{ fontWeight: 'bold' }} variant={medScreen ? 'h3' : 'h2'} color="secondary.main" textAlign="center">
                Components And Models
            </Typography> 
            <Grid container spacing={12} direction="row" >
                <Grid item md={4} xs={12}>
                    <Box textAlign="center">
                    
                    <img 
                        style={{aspectRatio: '11/9', width:'40%', height: 'auto'}}
                        src="/babyChick.png" />
                        <Typography pb={5} pt={3} pl={3}  sx={{letterSpacing: 3, fontWeight: 'bold' }} variant={medScreen ? 'h4' : 'h3'} color="black" >
                                YOUNG
                        </Typography> 
                        <Typography   py={2} pl={medScreen? 0:6}  textAlign="left" mx={smallScreen? 15:10}   variant={medScreen ? 'h4' : 'h3'} color="black" >
                            Distess
                        </Typography> 
                        <Typography  py={2} pl={medScreen? 0:6} textAlign="left" mx={smallScreen? 15:10}   variant={medScreen ? 'h4' : 'h3'} color="black">
                            Day
                        </Typography> 
                        <Typography   py={2} pl={medScreen? 0:6} textAlign="left" mx={smallScreen? 15:10}   variant={medScreen ? 'h4' : 'h3'} color="black">
                            Night
                        </Typography> 
                        <Typography  py={2} pl={medScreen? 0:6}  textAlign="left" mx={smallScreen? 15:10}   variant={medScreen ? 'h4' : 'h3'} color="black">
                            Water
                        </Typography> 
                        <Typography   py={2}pl={medScreen? 0:6} textAlign="left" mx={smallScreen? 15:10}   variant={medScreen ? 'h4' : 'h3'} color="black" >
                            Anomaly
                        </Typography> 

                </Box>
            </Grid>
            <Grid item md={4} xs={12}>
                <Box mt={smallScreen? 15:0} textAlign="center" >
                    <img 
                        style={{aspectRatio: '11/9', width:'40%', height: 'auto'}}
                        src="/midChick.png" />
                        <Typography pb={5} pt={3} pl={3} sx={{ letterSpacing: 3,fontWeight: 'bold' }} variant={medScreen ? 'h4' : 'h3'} color="black"  >
                                MID
                        </Typography> 
                        <Typography   py={2} pl={medScreen? 0:6}  textAlign="left" mx={smallScreen? 15:10}   variant={medScreen ? 'h4' : 'h3'} color="black" >
                            Distess
                        </Typography> 
                        <Typography  py={2} pl={medScreen? 0:6}    textAlign="left" mx={smallScreen? 15:10}   variant={medScreen ? 'h4' : 'h3'} color="black">
                            Day
                        </Typography> 
                        <Typography   py={2} pl={medScreen? 0:6}    textAlign="left" mx={smallScreen? 15:10}   variant={medScreen ? 'h4' : 'h3'} color="black">
                            Night
                        </Typography> 
                        <Typography  py={2}   pl={medScreen? 0:6}    textAlign="left" mx={smallScreen? 15:10}   variant={medScreen ? 'h4' : 'h3'} color="black">
                            Water
                        </Typography> 
                        <Typography   py={2}  pl={medScreen? 0:6}   textAlign="left" mx={smallScreen? 15:10}   variant={medScreen ? 'h4' : 'h3'} color="black" >
                            Anomaly
                        </Typography> 

                    </Box>

            </Grid>
            <Grid item md={4} xs={12}>
                <Box mt={smallScreen? 15:0} textAlign="center" pb={10}>
                    <img 
                        style={{aspectRatio: '11/9', width:'40%', height: 'auto'}}
                        src="/bigChick.png" />
                        <Typography  pb={5} pt={3} pl={3}  sx={{ letterSpacing: 3,fontWeight: 'bold' }} variant={medScreen ? 'h4' : 'h3'} color="black">
                                LATE
                        </Typography> 
                        <Typography   py={2} pl={medScreen? 0:6} textAlign="left" mx={smallScreen? 15:10}   variant={medScreen ? 'h4' : 'h3'} color="black" >
                            Distess
                        </Typography> 
                        <Typography  py={2} pl={medScreen? 0:6}  textAlign="left" mx={smallScreen? 15:10}   variant={medScreen ? 'h4' : 'h3'} color="black">
                            Day
                        </Typography> 
                        <Typography   py={2} pl={medScreen? 0:6}  textAlign="left" mx={smallScreen? 15:10}   variant={medScreen ? 'h4' : 'h3'} color="black">
                            Night
                        </Typography> 
                        <Typography  py={2}  pl={medScreen? 0:6}  textAlign="left" mx={smallScreen? 15:10}   variant={medScreen ? 'h4' : 'h3'} color="black">
                            Water
                        </Typography> 
                        <Typography   py={2} pl={medScreen? 0:6} textAlign="left" mx={smallScreen? 15:10}   variant={medScreen ? 'h4' : 'h3'} color="black" >
                            Anomaly
                        </Typography> 

                    </Box>

            </Grid>
            
         </Grid>
         <Grid container spacing={12} direction={smallScreen? "column":"row"} >
            <Grid item md={3} >
                    <Box mt={smallScreen? 15:0} textAlign="center" >
                        <img 
                            style={{aspectRatio: '11/9', width:'auto', height: 'auto'}}
                            src="/sun.png" />
                    </Box>
            </Grid>
            <Grid item md={3} >
                    <Box mt={smallScreen? 15:0} textAlign="center" >
                        <img 
                            style={{ width:'auto', height: 'auto'}}
                            src="/moon.png" />
                    </Box>
            </Grid>
            <Grid item md={3} >
                    <Box mt={smallScreen? 15:0} textAlign="center">
                        <img 
                            style={{aspectRatio: '11/9', width:'auto', height: 'auto'}}
                            src="/water.png" />
                    </Box>
            </Grid>
            <Grid item md={3} >
                    <Box mt={smallScreen? 15:0} textAlign="center" pb={10}>
                        <img 
                            style={{aspectRatio: '11/9', width:'auto', height: 'auto'}}
                            src="/search.png" />
                    </Box>
            </Grid>
            
         </Grid>
        

          
    </Box>
    )
}