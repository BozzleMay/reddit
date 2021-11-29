import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useDispatch, useSelector} from 'react-redux'
import {beginSubreddit, successSubreddit, failureSubreddit} from '../redux/features/SubredditSlice';
import { selectSubreddit } from '../redux/features/SubredditSlice';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Apis from './Apis';
import { Button } from '@mui/material';

const Subreddits = () => {
   
    const dispatch = useDispatch()
    const subRedditData = useSelector(selectSubreddit)
    console.log(subRedditData.subreddit)
    const [newTop, setNewTop] = useState('home')
    
    const handleClick = (index) => {
      setNewTop(index.target.innerHTML.replaceAll(' ', '%20'))
      console.log(newTop)
    }
     
    return (
        <div>
          <Apis newTop={newTop} />
          <Card sx={{marginTop: '20px'}}>
            <CardContent>
             <Box component='ul' sx={{listStyle: 'none'}}>
            {subRedditData.subreddit.map((subred, index) => (
              <>
              <Box component='div' sx={{display: 'flex', alignItems: 'center', padding: '10px'}} >
                <Button onClick={(index) => handleClick(index)}>
              <Avatar src={subred.data.icon_img} />
                <Box component='li' sx={{marginLeft: '5px'}}>{subred.data.title}</Box>
                </Button>
              </Box>
                <Divider />
                </>
            ))}
             </Box>
            </CardContent>
          </Card>
        </div>
    )
}

export default Subreddits
