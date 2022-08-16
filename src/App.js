import logo from './logo.svg';
// import './App.css';
import AppBarComp from './components/AppBar/index.js';
import Hero from './components/Hero';
import { Box, Container } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function App() {
  return (
    <div className="App">
      <AppBarComp />

      <main>
        <Hero />
        

        <Box>
          <Container maxWidth='lg'>
            <Box sx={{textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
              <Typography variant='h4' sx={{fontWeight: 700, fontSize: '60px', color : '#FB923C', mb: 2}}>What's <span style={{color: 'black'}}> new? </span> </Typography>
              <Typography sx={{color: '#425466', width: '900px', fontSize: '18px'}}>Here are some new menus that made just for you, explore more about this new menus and fulfill what’s your tummy needed</Typography>
            </Box>
            <Box sx={{my: 5}}>
              <Grid container>
                <Grid item xs={4}>
                  <Box sx={{backgroundColor: '#FB923c', px: 2, py:0.3, borderRadius: '15px', position: 'relative', marginBottom: '-40px', marginLeft:2, width: '100px', cursor: 'pointer'}}>
                    <Typography color='#FCFAFA' variant="caption">Find Out More ></Typography>
                  </Box>
                  <img src='/assets/images/food3.png' width='350px' style={{borderRadius: '15px'}}/>
                  <Box sx={{display: 'flex', justifyContent: 'center', top: '-150px', position: 'relative'}}>
                    <Box sx={{ cursor: 'pointer' ,background: '#FFF', width: '50px', display: 'flex', justifyContent: 'center', borderRadius: '50%', height: '50px', alignItems: 'center', '&:hover': {background: '#FA913B'} }}>
                      <PlayArrowIcon fontSize='large' sx={{color: '#FA913B', '&:hover': {color: '#fff'}}} />
                    </Box> 
                  </Box>
                  <Box sx={{marginTop: '-50px',paddingRight: 5}}>
                    <Typography sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', fontWeight: 700}} variant='h6'>Sweetie piezza</Typography>
                    <Typography variant='caption'>if you already tired of pizza who made by flour with meat or saussage topping try out this pizza! This isn’t made with meat or saussage this pizza was made with berries! Spoil your tongue with this bittersweet flavour</Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                <Box sx={{backgroundColor: '#FB923c', px: 2, py:0.3, borderRadius: '15px', position: 'relative', marginBottom: '-40px', marginLeft:2, width: '100px', cursor: 'pointer'}}>
                    <Typography color='#FCFAFA' variant="caption">Find Out More ></Typography>
                  </Box>
                  <img src='/assets/images/food1.png' width='350px' style={{borderRadius: '15px'}}/>
                  <Box sx={{display: 'flex', justifyContent: 'center', top: '-150px', position: 'relative'}}>
                    <Box sx={{ cursor: 'pointer' ,background: '#FFF', width: '50px', display: 'flex', justifyContent: 'center', borderRadius: '50%', height: '50px', alignItems: 'center', '&:hover': {background: '#FA913B'} }}>
                      <PlayArrowIcon fontSize='large' sx={{color: '#FA913B', '&:hover': {color: '#fff'}}} />
                    </Box> 
                  </Box>
                  <Box sx={{marginTop: '-50px', paddingRight: 5}}>
                    <Typography sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', fontWeight: 700}} variant='h6'>Zummertime Pizza</Typography>
                    <Typography variant='caption'>With peppers and some spice leaf we can make your tongue feels like in Italia! With theme summertime makes your tongue feels like you’re vacation in Italia’s Summertime</Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                <Box sx={{backgroundColor: '#FB923c', px: 2, py:0.3, borderRadius: '15px', position: 'relative', marginBottom: '-40px', marginLeft:2, width: '100px', cursor: 'pointer'}}>
                    <Typography color='#FCFAFA' variant="caption">Find Out More ></Typography>
                  </Box>
                  <img src='/assets/images/food2.png' width='350px' style={{borderRadius: '15px'}}/>
                  <Box sx={{display: 'flex', justifyContent: 'center', top: '-150px', position: 'relative'}}>
                    <Box sx={{ cursor: 'pointer' ,background: '#FFF', width: '50px', display: 'flex', justifyContent: 'center', borderRadius: '50%', height: '50px', alignItems: 'center', '&:hover': {background: '#FA913B'} }}>
                      <PlayArrowIcon fontSize='large' sx={{color: '#FA913B', '&:hover': {color: '#fff'}}} />
                    </Box> 
                  </Box>
                  <Box sx={{marginTop: '-50px', paddingRight: 5}}>
                    <Typography sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', fontWeight: 700}} variant='h6'>Borgir of esfanya</Typography>
                    <Typography variant='caption' >Elite burger of Spanish, this one was made by high class cow meat. Tender and juicy that can melt your tongue away with new variant of sauce and big potato make your tongue feels in heaven</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>

        <Box sx={{ marginTop : 10}}>
          <Container maxWidth='lg'>
            <Box sx={{textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
              <Typography variant='h6' sx={{fontWeight: 700, fontSize: '60px', color : 'black', mb: 2}}>How to <span style={{color : '#FB923C'}}> Order </span> Food in  <span style={{color : '#FB923C'}}> GaBite </span> </Typography>
              <Typography sx={{color: '#425466', width: '900px', fontSize: '18px'}}>A cycle you go trough to order your Food in GaBite</Typography>
            </Box>
            <Box sx={{my: 5}}>
              <Grid container>
                <Grid item xs={3}>
                  <CompFooter icon='hamburger 1.svg' title='Choose Your Food' caption='choose wisely and slowly the food that you want' />
                </Grid>
                <Grid item xs={3}>
                  <CompFooter icon='credit.svg' title='Make Payment' caption='specify your location and choose a payment method' />
                </Grid>
                <Grid item xs={3}>
                  <CompFooter icon='fast-delivery.svg' title='Wait for your Food' caption='Wait for your Food to be delivered safely and quickly' />
                </Grid>
                <Grid item xs={3}>
                  <CompFooter icon='food-blogger 1.svg' title='Relax and Eat Your Food' caption='Relax and eat your favorite coffee, makes your tummy feels alive' />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </main>
    </div>
  );
}

const CompFooter = ({icon, title, caption}) => {
  return(
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
      <Box sx={{width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alingItems: 'center'}}>
        <img src={`/assets/images/${icon}`} width='40px'  />
      </Box>
      <Typography sx={{color: '#FB923C'}}>{title}</Typography>
      <Typography variant='caption'>{caption}</Typography>
    </Box>
  )
}

export default App;