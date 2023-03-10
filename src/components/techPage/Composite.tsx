import { Box } from "@mui/material";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import ComponentsModels from "./ComponentsModels";


export default function Composite() {

    return (
        <Box>
            
            <FirstSection />
            <SecondSection />
            <ComponentsModels/>
            <ThirdSection />
            
            
        </Box>
    )
}