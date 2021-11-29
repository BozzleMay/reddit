import {createSlice} from '@reduxjs/toolkit'

export const subredditSlice = createSlice({
    name: 'subreddit',
    initialState: {
        subreddit: [],
    loading: false,
    error: null,
    },
    reducers: {
        successSubreddit: (state,action) => {
            state.subreddit =  action.payload
            
        },
        beginSubreddit: (state,action) => {
            state.loading =  true
        },
        failureSubreddit: (state,action) => {
            state.error =  true
        }
    }
})
export const {successSubreddit, beginSubreddit, failureSubreddit} = subredditSlice.actions
export const selectSubreddit = (state) => state.subreddit

export default subredditSlice.reducer