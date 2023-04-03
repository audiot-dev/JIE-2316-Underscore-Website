import { Box, Typography, Paper, useMediaQuery, useTheme,  NoSsr,Grid } from "@mui/material";
import { Container } from "@mui/system";
import {  useRef,useState } from "react";
import { theme } from "../../styles/theme";
import { RedOrangeLargeIconButton } from "../misc/buttons";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


export default function ThirdSection() {

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
        <Box py={3} textAlign="center" sx={{backgroundColor: "text.primary"}}>
            <Box mb={6} mt={5}>
                <Typography variant={smallScreen ? 'h3' : 'h2'} color="primary.main">
                Anomaly Detection
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
                    <video src="/anomalies-vid.mp4" controls ref={vidRef}
                    style={{width: '70%', height: 'auto'}} />
                </NoSsr>
            </Box>
           
        </Box>

    )
}