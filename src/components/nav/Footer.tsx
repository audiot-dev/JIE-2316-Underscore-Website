import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {

    return (
        <Box bgcolor="background.paper">
            <Box my={1} textAlign="center">
                <Grid container spacing={1} justifyContent="center" alignContent="center">
                    <Grid item>
                        <Link href="/news">
                            <LinkedInIcon />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1">
                            <Link href="/news">
                                Find us on LinkedIn!
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}