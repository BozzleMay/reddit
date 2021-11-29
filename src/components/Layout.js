import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Drawer from '@mui/material/Drawer'
import PostCard from './PostCard';
import Subreddits from './Subreddits';

const articles = [1,2,3,4,5,6,8]
const drawerWidth = 240
const articleHeadings = ['ksjsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',2,3,4,5,6,8]

const Layout = () => {
    return (
        <Container sx={{display: 'flex'}}>
        <Box component='main'   sx={{minWidth: '75%', marginTop: '20px'}}>
<PostCard />

        </Box>
        <aside>
        
                <div>
                    
                       <Subreddits />

                    
                
            
    

    </div>
                
                
       




                
      

        </aside>
        </Container>
    )
}

export default Layout
