import Head from "next/head";
import Header from "../../components/nav/Header";
import { Box, Paper, useTheme, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function ContactUsSuccess() {

    return (
        <>
            <Head>
                <title>Contact Us | AudioT</title>     
            </Head> 
            <Header />
            <Box sx={{
                backgroundColor: 'background.default',
                width: '100vw',
                height: '94vh',
                py: 10
            }}>
                <Paper sx={{ 
                    backgroundColor: 'background.paper',
                    elevation: 5,
                    mx: 'auto',
                    maxWidth: 'sm',
                    borderRadius: '2vh',
                    overflow: 'hidden',
                    textAlign: 'center'
                }}>
                    <Box sx={{ width: 'sm', height: 'sm', py: 5 }}>
                        <Typography fontSize="28px" pb="40px">
                            Form submitted successfully!
                        </Typography>
                        <img 
                        style={{ aspectRatio: '1/1', width: 100, height: 100 }}
                        src="/audiotlogo.png" />
                    </Box>
                </Paper>
            </Box>
        </>
    )
}