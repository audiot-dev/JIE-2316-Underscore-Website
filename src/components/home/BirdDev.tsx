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
                            <img src="/chicken-dev-w-text.png"
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
                        audios={[{
                            img: '/waveforms/early/distress.png',
                            audio: '/waveforms/early/distress.wav',
                            name: 'Distress'
                        }, {
                            img: '/waveforms/early/peep.png',
                            audio: '/waveforms/early/early peep.wav',
                            name: 'Peep'
                        }, {
                            img: '/waveforms/early/trill.png',
                            audio: '/waveforms/early/early_trill.wav',
                            name: 'Trill'
                        }]} />
                </Box>
                <Box mt={12}>
                    <BirdDevUnit name="Growing Chicken" birdImg="/chicken-dev-growing.png" 
                        videoLink="/mid-stage-clip.mp4" 
                        audios={[{
                            img: '/waveforms/mid/alert mid.png',
                            audio: '/waveforms/mid/alert mid.wav',
                            name: 'Alert'
                        }, {
                            img: '/waveforms/mid/chirping mid.png',
                            audio: '/waveforms/mid/chirps mid.wav',
                            name: 'Chirping'
                        }, {
                            img: '/waveforms/mid/multitone mid.png',
                            audio: '/waveforms/mid/multitone.wav',
                            name: 'Multitone'
                        }]} />
                </Box>
                <Box mt={12}>
                    <BirdDevUnit name="Adult Chicken" birdImg="/chicken-dev-adult.png" 
                        videoLink="/late-stage-clip.mp4"
                        audios={[{
                            img: '/waveforms/late/chirps late.png',
                            audio: '/waveforms/late/chirp late.wav',
                            name: 'Chirping'
                        }, {
                            img: '/waveforms/late/Disease late.png',
                            audio: '/waveforms/late/disease late.wav',
                            name: 'Disease'
                        }, {
                            img: '/waveforms/late/squawk late.png',
                            audio: '/waveforms/late/late squak-trimmed.wav',
                            name: 'Squawk'
                        }]} />
                </Box>
            </Box>
        </Box>
    )
}