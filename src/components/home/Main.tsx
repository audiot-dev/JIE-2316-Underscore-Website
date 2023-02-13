import { Box } from "@mui/material";
import Advantages from "./Advantages";
import BirdDev from "./BirdDev";
import FirstBanner from "./FirstBanner";
import Hardware from "./Hardware";
import ProblemIntro from "./ProblemIntro";

export default function Main() {

    return (
        <Box>
            <FirstBanner />
            <ProblemIntro />
            <Hardware />
            <BirdDev />
            <Advantages />
        </Box>
    )
}