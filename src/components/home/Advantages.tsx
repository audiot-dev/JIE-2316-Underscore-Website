import { Box, Container, Grid, Paper, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { theme } from "../../styles/theme";

interface OptionProps {
    name: string;
    selectedSvg: string;
    unselectedSvg: string;
    selected?: boolean;
}

function Option({name, selectedSvg, unselectedSvg, selected}:OptionProps) {

    const theme = useTheme()

    return (
        <Paper sx={{background: selected ? `linear-gradient(to bottom, 
        ${theme.palette.primary.main}, #F04B4C)` : "#fff", borderRadius: 4}}
        elevation={3}>
            <Box display="flex" alignItems="center" sx={{cursor: 'pointer'}}
            flexDirection="column" pt={6} width={250} height={250}>
                <Box mx="auto" width={90} >
                    <img src={selected ? selectedSvg : unselectedSvg} width="100%" />
                </Box>
                <Box textAlign="center" mt={1} >
                    <Typography color={selected ? '#fff' : 'text.primary'} variant="h5">
                        {name}
                    </Typography>
                </Box>
            </Box>
        </Paper>
    )
}

export default function Advantages() {

    const [optionSelected, setOptionSelected] = useState(0)

    const changeSelected = (num:number) => {
        setOptionSelected(num)
    }

    return (
        <Box pt={12}>
            <Box textAlign="center" mb={6}>
                <Typography variant="h3" color="primary.main">
                    Major Audio Advantages
                </Typography>
            </Box>
            <Box mb={6}>
                <Grid container justifyContent="center" spacing={6}>
                    <Grid item>
                        <Box onClick={() => changeSelected(0)}>
                            <Option name="Anomaly Detection" 
                            selectedSvg="/magnify-white.svg"
                            unselectedSvg="/magnify-blue.svg"
                            selected={optionSelected === 0} />
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box onClick={() => changeSelected(1)}>
                            <Option name="Zones" selectedSvg="/grid-white.svg"
                            unselectedSvg="/grid-blue.svg"
                            selected={optionSelected === 1} />
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box onClick={() => changeSelected(2)}>
                            <Option name="Predicting Developmental Outcomes" 
                            selectedSvg="/baby-white.svg" 
                            unselectedSvg="/baby-blue.svg"
                            selected={optionSelected === 2} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box mb={6}>
                <Container maxWidth="lg">
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                            <Paper elevation={3}>
                                <Box p={3}>
                                    {optionSelected === 0 ? <>
                                        <Box my={2}>
                                            <Typography variant="h6">
                                                Anomaly Detection is the process of searching for changes in chicken vocalizations
                                                over time that are different than expected.
                                            </Typography>
                                        </Box>
                                        <Box my={2}>
                                            <Typography variant="h6">
                                                If notable anomalies occur, farmers will receive an alert allowing them 
                                                to respond quickly.
                                            </Typography>
                                        </Box>
                                        <Box my={2}>
                                            <Typography variant="h6">
                                                Darkness of squares indicates how unusual events were at a certain period of time
                                                in a certain zone of the house.
                                            </Typography>
                                        </Box>
                                    </> : optionSelected === 1 ? <>
                                        <Box my={2}>
                                            <Typography variant="h6">
                                                Zones allow farmers to pin-point where specific issues are in the 
                                                house.
                                            </Typography>
                                        </Box>
                                        <Box my={2}>
                                            <Typography variant="h6">
                                                They can also help farmers understand where an problem in the house 
                                                originated from, such as a disease entering the house.
                                            </Typography>
                                        </Box>
                                    </> : <>
                                        <Box my={2}>
                                            <Typography variant="h6">
                                                At each stage in the chicken&#39;s quick development,
                                                chickens will be expected to make different sounds for 
                                                different periods of time.
                                            </Typography>
                                        </Box>
                                        <Box my={2}>
                                            <Typography variant="h6">
                                                With this understanding, AudioT can compare actual sounds of the 
                                                chickens with predicted sounds for their stage of development.
                                            </Typography>
                                        </Box>
                                        <Box my={2}>
                                            <Typography variant="h6">
                                                If something appears unusual, AudioT can alert the farmer.
                                            </Typography>
                                        </Box>
                                    </>}
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item sx={{maxWidth: 450}} flex={1}>
                            <Box>
                                <img src={optionSelected === 0 ? 
                                    "/chicken-anomalies.png" : optionSelected === 1 ?
                                    "/chicken-zones.png" : "/chicken-tracking-outcomes.png"}
                                    style={{aspectRatio: optionSelected === 0 ? '1/1' : 
                                        optionSelected === 1 ? '3/2' : '3/1', 
                                        width: '100%', height: 'auto'}} />
                            </Box>
                        </Grid>
                    </Grid>     
                </Container>
            </Box>
        </Box>
    )
}