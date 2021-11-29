import React, {useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { selectReddit } from '../redux/features/RedditSlice';
import { useDispatch, useSelector} from 'react-redux'
import {begin, success, failure} from '../redux/features/RedditSlice';
import axios from 'axios'
import Divider from '@mui/material/Divider';
import CardMedia from '@mui/material/CardMedia';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Box from '@mui/material/Box';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import IconButton from '@mui/material/IconButton';

const PostCard = () => {
    const dispatch = useDispatch()
    const data = useSelector(selectReddit)
    const [upArrow, setUpArrow] = useState('black')
    const [downArrow, setDownArrow] = useState('black')
    

    const timePosted = new Date(1634483004 - 1000) 
    console.log(timePosted.toString())
    console.log(Date.now())
    const diff = (Date.now() -1634483004)
   console.log(new Date(diff * 1000))
// Get data from the api


  
 
       
     

      const handleClick = ( e, index) => {
        console.log(document.getElementById(index))
        
     if (upArrow === 'black') {
        setUpArrow('green') 
        setDownArrow('black')
     
       
     }
     if (upArrow === 'green'){
       setUpArrow('black')
     }
        
      }
      const handleDownClick = () => {
        setDownArrow('red')
        setUpArrow('black')
      }
     
    return (<div>
        {data.reddit.length !=0 ? data.reddit.map((post, index )=> (     
        
             <Card raised={true} sx={{display: 'flex', marginBottom: '10px', marginRight:'10px'}} key={index}>
            <CardContent >
                <Box component='div' sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <IconButton key={index}  sx={{fill: 'blue'}} className='iconButton' onClick={(e) => handleClick( e, index)}  >
                <ArrowUpwardIcon id={index} sx={{color: upArrow}} /> 
                </IconButton > 
                {/* {data.reddit.length != 0 ? data.reddit[0].data.ups : 'loading...'} */}
                {post.data.ups}
                <IconButton onClick={handleDownClick}>
                <ArrowDownwardIcon  sx={{color: downArrow}}/>
                </IconButton>
                </Box>
                </CardContent>
                <Box component='div' sx={{flex: 1}}>
                <CardContent >
                
      <Typography sx={{ fontSize: 16, fontWeight: 600 }} color="text.secondary" gutterBottom>
      {/* {data.reddit.length != 0 ? data.reddit[0].data.title : 'loading...'}  */}
      {post.data.title}
      </Typography>
      <CardMedia
        component="img"
        alt="reddit"
        height="auto"
        image={post.data.url}
        sx={{marginBottom: '5px'}}
        // image={data.reddit.length != 0 ? data.reddit[0].data.url : 'loading...'}
      />
      <Divider />
      
    </CardContent>
    <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
    {/* {data.reddit.length != 0 ? data.reddit[0].data.author : 'loading...'} */}
    {post.data.author}
    <Box component='div' sx={{display:'flex'}}>
    <ChatBubbleOutlineIcon />
    {/* {data.reddit.length != 0 ? data.reddit[0].data.num_comments : 'loading...'} */}
    {post.data.num_comments}
    </Box>
    </CardActions>
    </Box>
    </Card>
        
        )) :'loading...'}
        </div>
    )
}

export default PostCard
