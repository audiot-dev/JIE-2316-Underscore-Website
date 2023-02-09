import { AppBar, Box, Grid, Toolbar, Typography, IconButton, useMediaQuery,
  Drawer, } from "@mui/material";
import Link from "next/link";



export default function Header() {

  return (
    
    <Box mb={3}>
      <AppBar position="static" sx={{backgroundColor: "secondaryBg.header"}}>
          <Toolbar>
          <Grid container spacing={0} alignItems="start" direction="row">
              <Grid item xs={3}>
                <Typography variant="h4" color="orange">
                    <Link href="/" >audioT</Link>
                      
                  </Typography>
                
              </Grid>
              <Grid item xs={2}>
              <Box  sx={{ width:'50', height:'3', p: 2 }} borderRadius={3}>
                <Typography variant="body1" color="text.primary">
                      <Link href="/our-mission"> Our Mission</Link>
                    </Typography>
                </Box>
                
                 
                
              </Grid>
              <Grid item xs={2}>
              <Box  sx={{ width:'50', height:'3', p: 2 }} borderRadius={3}>
                  <Typography variant="body1" color="text.primary">
                    <Link href="/">Technology</Link>
                  </Typography>
                </Box>

              </Grid>
              <Grid item xs={2}>
              <Box  sx={{ width:'50', height:'3', p: 2 }} borderRadius={3}>
                  <Typography variant="body1" color="text.primary">
                    <Link href="/about-us">About Us</Link>
                  </Typography>
                </Box>
                
              </Grid>
              <Grid item xs={1}>
                <Box  sx={{ width:'50', height:'3', p: 2, backgroundColor: 'orange' }} borderRadius={3}>
                  <Typography  color="text.secondary">
                     <Link href="/contact-us"> Contact Us</Link>
                  </Typography>
                    
                </Box>
              </Grid>

            </Grid>
          </Toolbar>
      </AppBar>
      
  </Box>
  )
}

