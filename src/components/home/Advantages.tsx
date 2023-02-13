import { Box, Grid, Paper, Typography, useTheme } from "@mui/material";
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
        </Box>
    )
}