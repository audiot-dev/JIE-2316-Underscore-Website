import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import {useTheme} from "@mui/material/styles"
import Link from "next/link";

export const sections = [
    {name: "Dashboard", link: "/admin"},
    {name: "News Feed", link: "/admin/news"},
    {name: "Content", link: "/admin/content"}
]

export default function AdminSidebar() {

    const theme = useTheme()
    const isAboveMinScreenSize = useMediaQuery("(min-width:1100px)")

    if (!isAboveMinScreenSize) {
        return <div />
    }

    return (
        <Box height="100%" bgcolor="secondaryBg.green" minWidth={250}>
            <Box py={2} pl={3} bgcolor="secondaryBg.header" textAlign="center">
                <Grid container alignItems="start" direction="column">
                    <Grid item>
                        <Typography variant="h4" color="text.secondary">
                            AudioT
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" color="text.secondary">
                            Admin Portal
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box mt={3}>
                {sections.map(section => (
                    <Box key={section.name} my={2} ml={3}>
                        <Typography variant="h5" color="text.secondary">
                            <Link href={section.link}>
                                {section.name}
                            </Link>
                        </Typography>
                    </Box>
                ))}
                <Box my={4} ml={3}>
                    <Typography variant="h5" color="text.secondary"
                        sx={{cursor: "pointer"}}>
                        Logout
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}