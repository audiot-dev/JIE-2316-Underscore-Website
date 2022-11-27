import { AppBar, Box, Grid, Toolbar, Typography } from "@mui/material";

export default function AdminHeader() {

    return (
        <Box mb={3}>
            <AppBar position="static" sx={{backgroundColor: "secondaryBg.header"}}>
                <Toolbar sx={{alignItems: "end", flexWrap: "wrap"}}>
                    <Grid item>
                        <Typography variant="h4" color="text.secondary">
                            AudioT
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" color="text.secondary" 
                            sx={{pb: "3px", whiteSpace: "nowrap"}}>
                            Admin Portal
                        </Typography>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}