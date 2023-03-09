import { AppBar, Box, Grid, Toolbar, Typography, IconButton, useMediaQuery,
  Drawer, } from "@mui/material";
import Link from "next/link";
import { OrangePrimaryButton, RedOrangePrimaryButton, RedOrangePrimaryDenseButton } from "../misc/buttons";



export default function Header() {

  const navbarHeight = '6vh';

  return (
    
    <Box>
      <AppBar position="fixed" sx={{height: navbarHeight, backgroundColor: "secondaryBg.header"}}>
          <Toolbar>
            <Grid container spacing={0} alignItems="center" direction="row">

              {/* AudioT Logo */}
              <Grid item>
                <Box sx={{ pt: 0.5, pl: 2.5 }}>
                  <img 
                  style={{ aspectRatio: '1/1', width: 45, height: 45 }}
                  src="/audiotlogo.png" />
                </Box>
              </Grid>
              <Grid item>
                <Box sx={{ pl: 2 }}>
                  <Typography variant="h4" color="#f57c00">
                      <Link href="/" >audioT</Link>
                  </Typography>
                </Box>
              </Grid>
              <Grid item flex={1} />

              {/* Navbar Options */}
              <Grid item mx={3}>
                <Box sx={{ width:'50', height:'3', p: 2 }} borderRadius={3}>
                  <Typography variant="body1" color="text.primary">
                        <Link href="/our-mission">Our Mission</Link>
                      </Typography>
                  </Box>
              </Grid>
              <Grid item mx={3}>
                <Box  sx={{ width:'50', height:'3', p: 2 }} borderRadius={3}>
                  <Typography variant="body1" color="text.primary">
                    <Link href="/technology">Technology</Link>
                  </Typography>
                </Box>
              </Grid>
              <Grid item mx={3}>
                <Box  sx={{ width:'50', height:'3', p: 2 }} borderRadius={3}>
                  <Typography variant="body1" color="text.primary">
                    <Link href="/about-us">About Us</Link>
                  </Typography>
                </Box>
              </Grid>

              {/* Contact Us Button */}
              <Grid item mx={3} my={1}>
                <Link href="/contact-us">
                  <RedOrangePrimaryDenseButton>
                    Contact Us
                  </RedOrangePrimaryDenseButton>
                </Link>
              </Grid>
              
            </Grid>
          </Toolbar>
      </AppBar>
      <Box sx={{ height: navbarHeight }}/>
    </Box>

  )
}