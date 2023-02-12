import { Box, Grid, Typography } from "@mui/material";

export default function BirdDev() {

    return (
        <Box bgcolor="background.default" my={12} pt={12} mx={6}>
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
    )
}