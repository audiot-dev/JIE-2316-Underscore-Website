import { Grid, Box, Paper, useTheme, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
import { callbackify } from "util";
import InfoSidebar from "./InfoSidebar"
import MessageForm from "./MessageForm"

export default function ContactBox() {

    return (
        <Box mt={3} mx={3}>
            <Container maxWidth="lg">
                <Paper >
                    <Grid container>
                        <Grid item xs={12} md={5}>
                            <InfoSidebar/>
                        </Grid>
                        <Grid item xs={12} md={7} >
                            <MessageForm/>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    )
}