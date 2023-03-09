import { Box, Paper, useTheme, useMediaQuery } from "@mui/material";
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
            height: '94vh',
            py: 10
        }}>
            <Paper sx={{ 
                elevation: 5,
                mx: 'auto',
                maxWidth: 'xl',
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