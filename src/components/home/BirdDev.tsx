import { Box, Grid, Typography } from "@mui/material";
import BirdDevUnit from "./BirdDevUnit";
import MicIcon from '@mui/icons-material/Mic';

export default function BirdDev() {

    return (
        <Box bgcolor="background.default" my={12} pt={12} mx={6}>
            <Box position="relative">
                <Box position="absolute" top={50} left={-30} width={5} 
                    bgcolor="primary.main" height="calc(100% + 50px)" />
                <Box position="absolute" top={48} left={-30} width={35}
                    height={5} bgcolor="primary.main" />
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                        <Box>
                            <Typography variant="h3" color="primary.main">
                                Bird Development
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h5">
                                At different stages of development, chickens tend to make different 
                                sounds. AudioT listens for these changes!
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Box>
                            <img src="/chicken-dev5.png"
                            style={{aspectRatio: '16/4', width: '100%', height: 'auto'}} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box position="relative">
                <Box position="absolute" left={-30} width={5} 
                bgcolor="primary.main" height="100%" />
                <Box mt={12}>
                    <BirdDevUnit name="Chick" birdImg="/chicken-dev-chick.png" 
                        videoLink="/early-stage-clip.mp4" 
                        audios={Array(3).fill({
                            img: '/dummy-spectogram.png',
                            audio: '/chicken-alarm.mp3',
                            name: 'Test'
                        })} />
                </Box>
                <Box mt={12}>
                    <BirdDevUnit name="Growing Chicken" birdImg="/chicken-dev-growing.png" 
                        videoLink="/mid-stage-clip.mp4" 
                        audios={Array(3).fill({
                            img: '/dummy-spectogram.png',
                            audio: '/chicken-alarm.mp3',
                            name: 'Test'
                        })} />
                </Box>
                <Box mt={12}>
                    <BirdDevUnit name="Adult Chicken" birdImg="/chicken-dev-adult.png" 
                        videoLink="/late-stage-clip.mp4"
                        audios={Array(3).fill({
                            img: '/dummy-spectogram.png',
                            audio: '/chicken-alarm.mp3',
                            name: 'Test'
                        })} />
                </Box>
            </Box>
        </Box>
    )
}