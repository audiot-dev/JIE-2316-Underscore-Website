import { Box, Typography, Paper, useMediaQuery, useTheme, Grid , Divider } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { theme } from "../../styles/theme";


export default function SecondSection() {

    const theme = useTheme()
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))
    const medScreen = useMediaQuery(theme.breakpoints.down('lg'))
    const xsmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const xlScreen =  useMediaQuery(theme.breakpoints.down('xl'))

    return (
        <Box py={3} textAlign="center" sx={{backgroundColor: "text.primary"}}>
            <Box mb={6}>
                <Typography variant={smallScreen ? 'h4' : 'h3'} color="primary.main">
                Using Sound to Scale
            </Typography> 
            </Box>
            <Box mb={6}>
                <Container maxWidth="lg">
                    <Typography  variant={smallScreen ? 'h6' : 'h5'} color="white">
                    Through their years of experience, farmers have learned how to listen to their animals.
                    We&#39;ve taken that methodology and applied it to a new machine learning model that can help 
                    contract growers monitor and record their welfare outcomes on a large scale.
                    </Typography> 
                </Container>
            </Box>
            <Box py={smallScreen? 1: 1} px={smallScreen? 20: medScreen? 15: 15}>
                <img 
                style={{aspectRatio: '11/9', width:'70%', height: 'auto'}}
                src=" audioTreplaceimage1.png" />
            </Box>  
            <Box mt={6}>
                <Container maxWidth="lg">
                    <Typography variant={smallScreen ? 'h6' : 'h5'} color="white">
                    By using audio data, the AudioT system can detect a variety of different chicken calls to predict both present and future welfare outcomes.
                    </Typography> 
                </Container>
            </Box>
        </Box>

    )
}