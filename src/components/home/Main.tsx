import { Box } from "@mui/material";
import FirstBanner from "./FirstBanner";
import Hardware from "./Hardware";
import ProblemIntro from "./ProblemIntro";

export default function Main() {

    return (
        <Box>
            <FirstBanner />
            <ProblemIntro />
            <Hardware />
        </Box>
    )
}