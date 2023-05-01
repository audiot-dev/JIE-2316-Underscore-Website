import { Box, Grid, NoSsr, Paper, Typography, useRadioGroup } from "@mui/material";
import { useRef, useState } from "react";
import { RedOrangeLargeIconButton, RedOrangePrimaryDenseButton } from "../misc/buttons";
import MicIcon from '@mui/icons-material/Mic';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Video from "../misc/Video";

interface Props {
    name: string;
    birdImg: string;
    videoLink: string;
    audios: {
        img: string;
        audio: string;
        name: string;
    }[];
}

interface SpectogramPlayerProps {
    img: string;
    audio: string;
    name: string;
}

function SpectogramPlayer({img, audio, name}:SpectogramPlayerProps) {

    const audioRef = useRef<HTMLAudioElement>(null)

    const [audioLineX, setAudioLineX] = useState(0)

    const moveAudioLine = () => {
        const curr = audioRef.current?.currentTime
        const total = audioRef.current?.duration
        if (curr == undefined || total == undefined) return
        if (curr < total && !audioRef.current?.paused) {
            setAudioLineX(200 * (curr / total))
            requestAnimationFrame(moveAudioLine)
        } else {
            setAudioLineX(0)
        }
    }

    const playAudio = () => {
        if (!audioRef.current?.paused) {
            console.log('already playing')
            return
        }
        audioRef.current?.play()
        moveAudioLine()
    }

    return (
        <Box mr={6}>
            <Paper elevation={3}>
                <Box p={3} width={300}>
                    <Box textAlign="center" mb={3}>
                        <Typography variant="h5">
                            {name}
                        </Typography>
                    </Box>
                    <Box width={200} height={300} mx="auto" overflow="hidden"
                        borderRadius={2} position="relative">
                        <img src={img} style={{width: '100%', height: '100%'}} />
                        <Box position="absolute" height="100%" width={2} 
                            bgcolor="#F04B4C" top={0} left={audioLineX} />
                    </Box>
                    <audio src={audio} style={{display: 'none'}}
                        ref={audioRef} />
                    <Box textAlign="center" mt={3}>
                        <RedOrangePrimaryDenseButton onClick={() => playAudio()}>
                            Play Audio
                        </RedOrangePrimaryDenseButton>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default function BirdDevUnit({name, birdImg, videoLink, 
    audios}:Props) {

    return (
        <Box position="relative">
            <Box mb={2} ml={6} position="relative">
                <Box position="absolute" left={-75} width={35} top="50%"
                sx={{transform: 'translate(0, -50%)'}}
                height={5} bgcolor="primary.main" />
                <Box position="absolute" color="primary.main" left={-55} top="55%"
                sx={{transform: 'translate(0, -50%)'}}>
                    <MicIcon sx={{transform: 'rotate(90deg)', fontSize: 50}} />
                </Box>
                <Typography variant="h4" color="primary.main">
                    {name}
                </Typography>
            </Box>
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <img style={{aspectRatio: '1/1', width: '100%', height: 'auto'}}
                    src={birdImg} />
                </Grid>
                <Grid item xs={10}>
                    <Box>
                        <Box maxWidth={1045} position="relative">
                            <Video src={videoLink} />
                        </Box>
                    </Box>
                    <Box mt={3} pb={3}
                        sx={{overflowX: 'auto', scrollSnapType: 'x mandatory', maxWidth: '100vw'}}>
                        <Grid container spacing={3} wrap="nowrap">
                            {audios.map((audio, i) => (
                                <Grid item key={i} sx={{scrollSnapAlign: 'start'}}>
                                    <SpectogramPlayer img={audio.img} 
                                    audio={audio.audio} name={audio.name} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}