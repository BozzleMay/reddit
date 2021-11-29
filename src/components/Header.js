import React from 'react'
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../redux/features/UserSlice'
import AccountCircle from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';





const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
 

  const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Header = () => {
   
    const user = useSelector(selectUser)
    console.log(user)
    const dispatch = useDispatch()

    const handleLogout = (e) => {
        e.preventDefault()
       
       dispatch(logout())
    }
    return (
        <Box >
        <AppBar
            elevation={0}
            >
            
                <Toolbar 
             >
                <div style={{display: 'flex', width:'100%', justifyContent:'space-between', alignItems: 'center'}}>
                <Avatar src='./reddit.jfif'/>
              
                
                <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <div>
         
           
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleLogout}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          
            </div>
                </Toolbar>
                </AppBar>
                <Offset />
                </Box>
    )
}

export default Header
