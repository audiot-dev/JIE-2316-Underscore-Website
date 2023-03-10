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
        <Box pt={0} pb={3} textAlign="center" sx={{ backgroundColor:"text.primary",backgroundPosition: 'center', backgroundRepeat: 'no-repeat',backgroundSize: 'cover',position: 'relative'}}>
           <Box  pt={10}>
                <Typography sx={{ letterSpacing: 1 }} variant={medScreen ? 'h3' : 'h2'} color="primary.main" >
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
                    <video src="/systemoverviewdraft2.mp4" controls ref={vidRef}
                    style={{width: '90%', height: 'auto'}} />
                </NoSsr>
            </Box>

        </Box>
    )
}
