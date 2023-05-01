import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";
import { RedOrangePrimaryButton } from "../misc/buttons";

export default function FirstBanner() {

    const theme = useTheme()
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Box sx={{
            backgroundImage: 'url(/home-page-chickens.png)',
            height: 800,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative'
        }}>
            <Box bgcolor="rgba(255,255,255,.85)" px={10} py={3} mt="400px"
                position="absolute" width="100%">
                <Box textAlign="center" maxWidth={1400} mx="auto">
                    <Typography variant={smallScreen ? 'h5' : 'h3'} color="secondary.main">
                        Audio-based continuous monitoring solutions will improve broiler performance and welfare
                    </Typography>
                </Box>
                <Box mt={3} textAlign="center">
                    <Link href="/contact-us">
                        <RedOrangePrimaryButton>
                            Request More Information
                        </RedOrangePrimaryButton>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}