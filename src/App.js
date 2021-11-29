
import './App.css';
import Login from './components/Login';
import { selectUser } from './redux/features/UserSlice';
import { useSelector } from 'react-redux';
import Logout from './components/Logout';
import axios from 'axios'
import GoogleLogin from 'react-google-login'
import { processResult } from '@reduxjs/toolkit/node_modules/immer/dist/internal';

function App() {
  const handleFailure = (result) => {
    alert(result)
  }
  const handleLogin = (googleData) => {
    console.log(googleData)
  }


  const user = useSelector(selectUser)
  return (
    <>
    <div className="app">
      {user ? <Login /> : <Logout/>}
    </div>
    <div>
      <GoogleLogin 
      clientId={processResult.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText='Log in with Google'
      onSuccess={handleLogin}
      onFailure={handleFailure}
      cookiePolicy={'single_host_origin'}

      >

      </GoogleLogin>
    </div>
    </>
  );
}

export default App;
