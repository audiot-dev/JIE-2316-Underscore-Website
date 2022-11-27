import { Box, Grid, Paper, Typography } from "@mui/material";
import LoginForm from "./LoginForm";

export default function Main() {
    
    return (
        <Box maxWidth="sm" mx="auto">
            <Paper elevation={5}>
                <Box py={3} mx={3}>
                    <Box textAlign="center" my={3}>
                        <Typography variant="h4">
                            Admin Login
                        </Typography>
                    </Box>
                    <Box my={3} maxWidth={400} mx="auto">
                        <LoginForm />
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}