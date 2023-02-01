import { AppBar, Box, Grid, Toolbar, Typography, IconButton, useMediaQuery,
    Drawer } from "@mui/material";
import { useTheme } from "@mui/material/styles"
import MenuIcon from "@mui/icons-material/Menu"
import { useState } from "react";
import { sections } from "./AdminSidebar"
import Link from "next/link";

export default function AdminHeader() {

    const theme = useTheme()
    const isBelowMaxScreenSize = useMediaQuery("(max-width:1099px)")

    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    if (!isBelowMaxScreenSize) {
        return <div />
    }

    return (
        <Box mb={3}>
            <AppBar position="static" sx={{backgroundColor: "secondaryBg.header"}}>
                <Toolbar>
                    <Grid item flex={1}>
                        <Box py={2}>
                            <Grid container alignItems="start" direction="column">
                                <Grid item>
                                    <Typography variant="h4" color="text.primary">
                                        AudioT
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1" color="text.primary">
                                        Admin Portal
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={() => setDrawerIsOpen(!drawerIsOpen)}>
                            <MenuIcon fontSize="large" sx={{color: "text.primary"}} />
                        </IconButton>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={drawerIsOpen} onClose={() => setDrawerIsOpen(false)}
                PaperProps={{sx: {top: 98}}} ModalProps={{sx: {top: 98}}} 
                BackdropProps={{sx: {top: 98}}}>
                <Box height="100%" bgcolor="secondaryBg.green" minWidth={250}>
                    {sections.map(section => (
                        <Box key={section.name} my={2} ml={3}>
                            <Typography variant="h5" color="text.primary">
                                <Link href={section.link}>
                                    {section.name}
                                </Link>
                            </Typography>
                        </Box>
                    ))}
                    <Box my={4} ml={3}>
                        <Typography variant="h5" color="text.primary"
                            sx={{cursor: "pointer"}}>
                            Logout
                        </Typography>
                    </Box>
                </Box>
            </Drawer>
        </Box>
    )
}