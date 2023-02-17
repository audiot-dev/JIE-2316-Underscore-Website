import { Box, Typography, NoSsr } from "@mui/material";
import { useRef, useState } from "react";
import { RedOrangeLargeIconButton } from "../misc/buttons";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function ProblemIntro() {

    const vidRef = useRef<HTMLVideoElement>(null)

    const [showPlayBtn, setShowPlayBtn] = useState(true)

    const onVidClick = () => {
        if (vidRef.current?.paused) {
            vidRef.current?.play()
            setShowPlayBtn(false)
        }
    }

    return (
        <Box bgcolor="secondary.main" px={3} pb={12}>
            <Box pt={12} mb={3} mx="auto" maxWidth={1000} textAlign="center">
                <Typography color="primary.main" variant="h3">
                    Current poultry welfare monitoring doesn&#39;t tell
                    the whole story.
                </Typography>
            </Box>
            <Box maxWidth={1400} mx="auto" position="relative">
                {showPlayBtn && <Box position="absolute" left="50%" top="50%" 
                zIndex={1} onClick={() => onVidClick()}
                sx={{transform: 'translate(-50%,-50%)', cursor: 'pointer'}}>
                    <RedOrangeLargeIconButton>
                        <PlayArrowIcon sx={{fontSize: 70}} />
                    </RedOrangeLargeIconButton>     
                </Box>}
                <NoSsr>
                    <video src="/current-issues.mp4" controls ref={vidRef}
                    style={{width: '100%', height: 'auto'}} />
                </NoSsr>
            </Box>
        </Box>
    )
}