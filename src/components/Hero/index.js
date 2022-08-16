import { Box, Button, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Hero = () => {
  return (
    <Box>
        <Container maxWidth='lg'>
            <Grid container>
                <Grid item xs={6}>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '600px'}}>
                        <Typography variant='h4' sx={{fontWeight: 700, fontSize: '60px', color : '#FB923C', pr: 8}}>Bite <span style={{color: 'black'}}> Your Favorite </span> Food</Typography>
                        <Typography  sx={{color: '#425466'}}>Bite your favorite food with greatest price and fastest delivery, make your tummy happy with your way</Typography>

                        <Box sx={{ display: 'flex', my: 3 }}>
                            <Button sx={{color: '#fff', fontFamily: 'Poppins, sans-serif', textTransform : 'capitalize', backgroundColor: '#FB923C', boxShadow: 'none', '&:hover' : {backgroundColor : '#FB923C'}, px: 5, borderRadius: '10px'  }} variant='contained'>Order Now</Button>
                            <Button size='large' variant='outlined' sx={{color: '#222224B2', fontFamily: 'Poppins, sans-serif', textTransform : 'capitalize', border: '2px solid #FB923C', borderRadius: '10px', '&:hover' : {border :  '2px solid #FB923C'}, ml: 3, px: 5}}>Contact Us</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <img src='/assets/images/Borgir 2.png' width='650px' />
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default Hero