import { Box, Paper, useTheme, useMediaQuery } from "@mui/material";
import { callbackify } from "util";
import InfoSidebar from "./InfoSidebar"
import MessageForm from "./MessageForm"

export default function ContactBox() {

    const theme = useTheme()
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))
    const medScreen = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <Box sx={{
            backgroundColor: 'background.default',
            width: '100vw',
            height: 'calc(100vh - 65px)',
            py: 10
        }}>
            <Paper sx={{ 
                elevation: 5,
                mx: 'auto',
                maxWidth: '60vw',
                maxHeight: '80vh',
                minHeight: '75vh',
                borderRadius: '4vh',
                overflow: 'hidden'
            }}>
                <Box sx={{ 
                    display: 'flex'
                }}>
                    <InfoSidebar/>
                    <MessageForm/>
                </Box>
            </Paper>
        </Box>
    )
}