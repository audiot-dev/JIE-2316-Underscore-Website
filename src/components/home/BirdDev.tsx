import { Box, Grid, Typography } from "@mui/material";
import BirdDevUnit from "./BirdDevUnit";

export default function BirdDev() {

    return (
        <Box bgcolor="background.default" my={12} pt={12} mx={6}>
            <Box>
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
                            <img src="/chicken-dev.png"
                            style={{aspectRatio: '16/4', width: '100%', height: 'auto'}} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box mt={12}>
                <BirdDevUnit name="Chick" birdImg="/small-chicken.png" 
                    videoLink="https://www.youtube.com/embed/70IqKloH-mw" audios={[]} />
            </Box>
        </Box>
    )
}