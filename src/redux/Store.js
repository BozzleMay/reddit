import {configureStore} from '@reduxjs/toolkit'
import userReducer from './features/UserSlice'
import redditReducer from './features/RedditSlice'
import subredditReducer from './features/SubredditSlice'

export default configureStore({
    reducer: {
      user: userReducer,
      reddit: redditReducer,
      subreddit: subredditReducer,
    }
    }
   
)