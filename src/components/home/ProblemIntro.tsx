import { Box, Typography, NoSsr } from "@mui/material";

export default function ProblemIntro() {

    return (
        <Box bgcolor="secondary.main" px={3} pb={6}>
            <Box pt={6} mb={3} mx="auto" maxWidth={1000} textAlign="center">
                <Typography color="primary.main" variant="h3">
                    Current poultry welfare monitoring doesn't tell
                    the whole story.
                </Typography>
            </Box>
            <Box maxWidth={1400} mx="auto">
                <NoSsr>
                    <iframe src="https://www.youtube.com/embed/70IqKloH-mw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
                    style={{aspectRatio: '16/9', width: '100%', height: 'auto'}}></iframe>
                </NoSsr>
            </Box>
        </Box>
    )
}