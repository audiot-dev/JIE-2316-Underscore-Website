import { Box, Typography, useMediaQuery, useTheme, NoSsr, Grid } from "@mui/material";
import { useRef,useState } from "react";
import { RedOrangeLargeIconButton } from "../misc/buttons";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function SecondSection() {

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
        <Box pt={0} pb={3} textAlign="center" sx={{ background:`linear-gradient(to bottom,#F2F5FA,#9e9e9e)`,backgroundPosition: 'center', backgroundRepeat: 'no-repeat',backgroundSize: 'cover',position: 'relative'}}>
           <Box mt={20} >
                <Typography variant={medScreen ? 'h3' : 'h2'} color="primary.main" >
                        System Overview
                    </Typography> 
            </Box>
            
            <Box maxWidth={1400} my={10}  mx="auto" position="relative">
                {showPlayBtn && <Box position="absolute" left="50%" top="50%" 
                zIndex={1} onClick={() => onVidClick()}
                sx={{transform: 'translate(-50%,-50%)', cursor: 'pointer'}}>
                    <RedOrangeLargeIconButton>
                        <PlayArrowIcon sx={{fontSize: 70}} />
                    </RedOrangeLargeIconButton>     
                </Box>}
                <NoSsr>
                    <video src="/current-issues.mp4" controls ref={vidRef}
                    style={{width: '90%', height: 'auto'}} />
                </NoSsr>
            </Box>
            <Box my={15} >
                <Typography   sx={{ fontWeight: 'bold' }} my={15} variant={medScreen ? 'h3' : 'h2'} color="secondary.main" textAlign="center">
                    Components And Models
                </Typography> 
                <Grid container spacing={12} direction="row" >
                    <Grid item md={4} xs={12}>
                        <Box textAlign="center">
                            

                            <img 
                                style={{aspectRatio: '11/9', width:'40%', height: 'auto'}}
                                src="/babyChick.png" />
                                <Typography mb={5}  sx={{ fontWeight: 'bold' }} variant={medScreen ? 'h4' : 'h3'} color="black" >
                                        YOUNG
                                </Typography> 
                                <Typography  mx={smallScreen? 15:10}   variant={medScreen ? 'h4' : 'h3'} color="black">
                                    -Distess
                                </Typography> 
                                <Typography  mx={smallScreen? 15:10}   variant={medScreen ? 'h4' : 'h3'} color="black" >
                                        -Day
                                </Typography> 
                                <Typography  mx={smallScreen? 15:10}   variant={medScreen ? 'h4' : 'h3'} color="black">
                                        -Night
                                </Typography> 
                                <Typography  mx={smallScreen? 15:10}   variant={medScreen ? 'h4' : 'h3'} color="black" >
                                        -Water
                                </Typography> 
                                <Typography  mx={smallScreen? 15:10}   variant={medScreen ? 'h4' : 'h3'} color="black" >
                                        -Anomaly
                                </Typography> 

                        </Box>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Box mt={smallScreen? 15:0} textAlign="center" >
                            <img 
                                style={{aspectRatio: '11/9', width:'40%', height: 'auto'}}
                                src="/midChick.png" />
                                <Typography mb={5}  sx={{ fontWeight: 'bold' }} variant={medScreen ? 'h4' : 'h3'} color="black"  >
                                        MID
                                </Typography> 
                                <Typography  mx={smallScreen? 15:10}  variant={medScreen ? 'h4' : 'h3'} color="black" >
                                    -Distess
                                </Typography> 
                                <Typography  mx={smallScreen? 15:10}   variant={medScreen ? 'h4' : 'h3'} color="black" >
                                        -Day
                                </Typography> 
                                <Typography  mx={smallScreen? 15:10}   variant={medScreen ? 'h4' : 'h3'} color="black" >
                                        -Night
                                </Typography> 
                                <Typography  mx={smallScreen? 15:10}   variant={medScreen ? 'h4' : 'h3'} color="black" >
                                        -Water
                                </Typography> 
                                <Typography  mx={smallScreen? 15:10}   variant={medScreen ? 'h4' : 'h3'} color="black" >
                                        -Anomaly
                                </Typography> 

                            </Box>

                    </Grid>
                    <Grid item md={4} xs={12}>
                    <Box mt={smallScreen? 15:0} textAlign="center">
                            <img 
                                style={{aspectRatio: '11/9', width:'40%', height: 'auto'}}
                                src="/bigChick.png" />
                                <Typography mb={5} sx={{ fontWeight: 'bold' }} variant={medScreen ? 'h4' : 'h3'} color="black">
                                        LATE
                                </Typography> 
                                <Typography  mx={smallScreen? 15:10}   variant={medScreen ? 'h4' : 'h3'} color="black" >
                                    -Distess
                                </Typography> 
                                <Typography  mx={smallScreen? 15:10}   variant={medScreen ? 'h4' : 'h3'} color="black">
                                        -Day
                                </Typography> 
                                <Typography  mx={smallScreen? 15:10}   variant={medScreen ? 'h4' : 'h3'} color="black">
                                        -Night
                                </Typography> 
                                <Typography  mx={smallScreen? 15:10}   variant={medScreen ? 'h4' : 'h3'} color="black">
                                        -Water
                                </Typography> 
                                <Typography  mx={smallScreen? 15:10}   variant={medScreen ? 'h4' : 'h3'} color="black" >
                                        -Anomaly
                                </Typography> 

                            </Box>

                    </Grid>

    
                    
                 </Grid>
                

                  
            </Box>

            


        </Box>
    )
}
