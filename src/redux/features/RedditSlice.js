import {createSlice} from '@reduxjs/toolkit'

export const redditSlice = createSlice({
    name: 'reddit',
    initialState: {
        reddit: [],
    loading: false,
    error: null,
    },
    reducers: {
        success: (state,action) => {
            state.reddit =  action.payload
            
        },
        begin: (state,action) => {
            state.loading =  true
        },
        failure: (state,action) => {
            state.error =  true
        }
    }
})
export const {success, begin, failure} = redditSlice.actions
export const selectReddit = (state) => state.reddit

export default redditSlice.reducer