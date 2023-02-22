import { Box, Typography, Paper, useMediaQuery, useTheme, Grid , Divider, Container } from "@mui/material";
import { useState } from "react";
import { theme } from "../../styles/theme";

export default function SecondSection() {

    const theme = useTheme()
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))
    const medScreen = useMediaQuery(theme.breakpoints.down('lg'))
    const xsmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const xlScreen =  useMediaQuery(theme.breakpoints.down('xl'))

    return (
        <Box pt={0} pb={6} sx={{ background:`linear-gradient(to bottom,#F2F5FA,#9e9e9e)`,backgroundPosition: 'center', backgroundRepeat: 'no-repeat',backgroundSize: 'cover',position: 'relative'}}>
            <Box my={12} mx={6}>
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                        <Box>
                            <Box mb={3}>
                                <Typography variant={medScreen ? 'h4' : 'h3'} color="primary.main">
                                Learning From the Best
                                </Typography> 
                            </Box>
                            <Box mb={2}>
                                <Typography variant={medScreen ? 'body1' : 'h5'} color="secondary.main">
                                For centuries, farmers have used their experience to learn and adapt to the needs of their animals. 
                                Their dedication to caring for animals helps to feed the world.
                                </Typography> 
                            </Box>
                            <Box mb={2}>
                                <Typography variant={medScreen ? 'body1' : 'h5'} color="secondary.main">
                                The amount of specialized knowledge needed to be a poultry farmer is surprisingly great. Just by 
                                hearing one of their chickens, a poultry farmer can tell if they’re healthy, happy, hungry, or sick. 
                                It may seem instinctual to some, but that level of adaptation is made possible by the supercomputer
                                between our ears -- our brains!
                                </Typography> 
                            </Box>
                            <Box>
                                <Typography variant={medScreen ? 'body1' : 'h5'} color="secondary.main">
                                We can&#39;t replicate what farmers do, but we can strive toke make their work easier in this rapidly changing world.
                                </Typography> 
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Box>
                            <img 
                            style={{aspectRatio: '16/9', width: '100%', height: 'auto'}}
                            src="/chicken-sounds.jpeg" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box my={12} mx={6} p={6} sx={{backgroundColor: "text.primary", borderRadius: '30px'}} >
                <Divider sx={{backgroundColor: 'white'}} />
                <Typography pt={2} variant={smallScreen ? 'h5' : 'h4'} color="primary.main">
                Poultry Farming in a Modern Age
                </Typography> 
                <Grid container spacing={1} direction={smallScreen? "column": "row"}>
                    <Grid item md={6} xs={10}>
                        <Typography maxWidth={800} pt={5} sx={{  }} variant={smallScreen ? 'body2' : 'body1'} color="white">
                        Over the past 50 years, the average size of broiler houses has doubled to compensate for increased demand from retailers
                            in the poultry industry. Year by year, commercial poultry farmers are expected to produce more meat to fulfill that demand,
                            which necessitates the ability to care for more chickens.
                        </Typography> 
                        <Typography width={smallScreen? "100%":"100%"} textAlign="left" pt={5} sx={{  }} variant={smallScreen ? 'body2' : 'body1'} color="white">
                        This dramatic increase in production has made it more difficult for poultry farmers to actively monitor the welfare of 
                        their chickens. Modern poultry farms can house birds numbering in the tens of thousands -- in a setting like this, it’s 
                        hard, even for skilled farmers, to pay attention to the needs of any particular chicken. 
                        </Typography> 
                        <Typography width={smallScreen? "100%":"100%"} textAlign="left" pt={5} pb={5} sx={{  }} variant={smallScreen ? 'body2' : 'body1'} color="white">
                        Additionally, contract growers are often obligated to submit a detailed report on their welfare practices and outcomes 
                        to their integrators in order to keep their jobs. There’s a lot of pressure on farmers to do their absolute best to satisfy 
                        the industry and to take good care of their animals at the same time, which is a difficult balancing act to achieve.
                        </Typography>
                    </Grid>
                    <Grid item md={6} xs={10}>
                        <Box py={smallScreen? 1: 1} px={xsmallScreen? 10:smallScreen? 20: medScreen? 0: 10}>
                            <img 
                            style={{aspectRatio: '11/9', width:'90%', height: 'auto'}}
                            src="/audiotstat1.png" />
                        </Box>  
                    </Grid>
                </Grid>
                <Divider  sx={{backgroundColor: 'white'}} />
            </Box>
            <Box mx={6} my={12}>
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                        <Box>
                            <img 
                            style={{aspectRatio: '1/1', width:'100%', height: 'auto'}}
                            src="/audiotcams1.png" />
                        </Box>  
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Box mb={3}>
                            <Typography  variant={smallScreen ? 'h4' : medScreen? "h4": 'h3'} color="primary.main">
                                Setting a New Welfare Standard
                            </Typography>
                        </Box>
                        <Box mb={2}>
                            <Typography   variant={smallScreen ? 'body1' : medScreen? "h6": 'h6'} color="secondary.main">
                            Currently, common welfare practices for taking care of chickens include regulating environmental 
                            factors such as temperature and tracking water and feed consumption. These types of statistics are
                            helpful to gain some insight into how a house is functioning as a whole, they do a poor job in actively 
                            monitoring the animals. For example, when looking solely at the aggregate water consumption of a house, 
                            there isn&#39;t a way to tell whether all the birds are hydrated properly or if some are drinking too much or 
                            too little.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography  variant={smallScreen ? 'body1' :  medScreen? "h6":'h6'} color="secondary.main">
                            Recent advancements in the agricultural technology community have led to the creation of new, 
                            more powerful welfare monitoring systems for poultry farmers, which utilize machine learning 
                            to gather and organize welfare data. Camera-based solutions have been making waves in the industry: 
                            they&#39;re a step in the right direction, but cameras are expensive to implement and aren’t optimal 
                            for monitoring every type of welfare outcome.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}