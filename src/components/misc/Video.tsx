import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useRef, useState } from "react";
import { RedOrangeLargeIconButton } from "./buttons";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

interface Props {
    src: string;
}

export default function Video({src}:Props) {

    const vidRef = useRef<HTMLVideoElement>(null)

    const [showPlayBtn, setShowPlayBtn] = useState(true)

    const onVidClick = () => {
        if (vidRef.current?.paused) {
            vidRef.current?.play()
            setShowPlayBtn(false)
        }
    }

    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

    const fontSize = isSmall ? 30 : 70

    return (
        <Box>
            {showPlayBtn && <Box position="absolute" left="50%" top="50%" 
            zIndex={1} onClick={() => onVidClick()}
            sx={{transform: 'translate(-50%,-50%)', cursor: 'pointer'}}>
                <RedOrangeLargeIconButton>
                    <PlayArrowIcon sx={{fontSize}} />
                </RedOrangeLargeIconButton>     
            </Box>}
            <video src={src} controls ref={vidRef}
            style={{width: '100%', height: 'auto'}} />
        </Box>
    )
}