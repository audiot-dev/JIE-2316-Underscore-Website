import { Box, Grid, Typography } from "@mui/material";

interface Props {
    name: string;
    birdImg: string;
    videoLink: string;
    audios: {
        img: string;
        audio: string;
        name: string;
    }[];
}

export default function BirdDevUnit({name, birdImg, videoLink, 
    audios}:Props) {
    
    return (
        <Box>
            <Box mb={2}>
                <Typography variant="h4">
                    {name}
                </Typography>
            </Box>
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <img style={{aspectRatio: '1/1', width: '100%', height: 'auto'}}
                    src={birdImg} />
                </Grid>
                <Grid item xs={10}>
                    <Box>
                        <Box maxWidth={1200} mx="auto">
                            <iframe src={videoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
                            style={{aspectRatio: '16/9', width: '100%', height: 'auto'}}></iframe>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}