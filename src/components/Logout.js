import React, {useState} from 'react'
import './Logout.css'
import Header from './Header'
import Layout from './Layout'
import Subreddits from './Subreddits'




const Logout = () => {
    
   

    return (
        <>
        <Header />
        <Layout searchTerm={searchTerm}/>
        <Subreddits searchTerm={searchTerm}/>
        </>
    )
}

export default Logout
