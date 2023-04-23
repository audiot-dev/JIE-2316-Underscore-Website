import { Box, Typography, NoSsr } from "@mui/material";
import Video from "../misc/Video";

export default function ProblemIntro() {

    return (
        <Box bgcolor="secondary.main" px={3} pb={12}>
            <Box pt={12} mb={3} mx="auto" maxWidth={1000} textAlign="center">
                <Typography color="primary.main" variant="h3">
                    Current poultry welfare monitoring doesn&#39;t tell
                    the whole story.
                </Typography>
            </Box>
            <Box maxWidth={1400} mx="auto" position="relative">
                <Video src="/current-issues.mp4" />
            </Box>
        </Box>
    )
}