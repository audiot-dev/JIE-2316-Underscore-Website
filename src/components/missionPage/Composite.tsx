import { Box } from "@mui/material";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import LastSection from "./LastSection";

export default function Composite() {

    return (
        <Box>
            
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <LastSection />
            
        </Box>
    )
}