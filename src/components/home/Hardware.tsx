import { Box, Grid, Typography } from "@mui/material";

export default function Hardware() {

    return (
        <Box bgcolor="background.default" my={12}>
            <Box mx={6}>
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                        <Box>
                            <Box mb={3}>
                                <Typography color="primary.main" variant="h3">
                                    The Hardware
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="h5">
                                    AudioT uses microphones to listen for changes in sounds the chickens
                                    are making. These micrphones are installed throughout the poultry 
                                    houses to provide the farmer with more complete welfare monitoring.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Box>
                            <img 
                            style={{aspectRatio: '16/9', width: '100%', height: 'auto'}}
                            src="/chicken-mic.jpeg" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}