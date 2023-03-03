import { Box } from "@mui/material";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";


export default function Composite() {

    return (
        <Box>
            
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            
        </Box>
    )
}