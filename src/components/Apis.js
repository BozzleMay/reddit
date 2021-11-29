
import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useDispatch, useSelector} from 'react-redux'
import {beginSubreddit, successSubreddit, failureSubreddit} from '../redux/features/SubredditSlice';
import { selectSubreddit } from '../redux/features/SubredditSlice';
import { selectReddit } from '../redux/features/RedditSlice';
import {begin, success, failure} from '../redux/features/RedditSlice';



const Apis = (newTop) => {
   
    const dispatch = useDispatch()
    console.log(newTop.newTop, 'hdhd')

    useEffect(() => {
        const fetchSubredditData = () => {
          return async dispatch => {
            dispatch(beginSubreddit())
            return await axios.get(`https://www.reddit.com/subreddits.json`)
            .then(response => {
              dispatch(successSubreddit(response.data.data.children))
              console.log(response)
            })
             .catch(error => dispatch(failureSubreddit(error)))
          }
        }
    dispatch(fetchSubredditData()) 
}, [dispatch])

useEffect(() => {
    const fetchData = () => {
      return async dispatch => {
        dispatch(begin())
        return await axios.get(`https://www.reddit.com/search.json?q=${newTop.newTop}`)
        .then(response => {
          dispatch(success(response.data.data.children))
          console.log('resposne')
        })
         .catch(error => dispatch(failure(error)))
      }
    }
dispatch(fetchData()) 
}, [newTop])
       
    return (
        <div>
          
        </div>
    )
}

export default Apis
