import React,{ useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Home.css'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  TextField,
} from '@mui/material';
import { ShoppingCart, Home as HomeIcon } from '@mui/icons-material';
import './Login.css'
const Login = () => {
const [action,setAction]  = useState("Sign Up");
  return (
    <>
    <AppBar position="static" style={{backgroundColor:'black'}}>
          <Toolbar>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <IconButton color="inherit">
                <HomeIcon />
              </IconButton>
            </Link>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <b>SUPER MARKET MANAGEMENT</b>
            </Typography>
            <TextField
              placeholder="Search..."
              variant="outlined"
              size="small"
              sx={{
                backgroundColor: 'rgba(200, 200, 200, 0.3)',
                '& input': {
                  color: 'inherit',
                },
                '& input::placeholder': {
                  color: 'inherit',
                },
                mr: 2,
              }}
            />
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Button color="inherit" sx={{ color: 'white' }}>
                Login
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
    <div className='container'>
        

        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        
        <div className='inputs'>
            {action==="Login"?<div></div>: <div className='input'>
                <input type='text' placeholder='Name'/>
            </div>}
           
            <div className='input'>
                <input type='email' placeholder='Email Id'/>
            </div>
            <div className='input'>
                <input type='password' placeholder='Password'/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>: <div className='forgot-password'>Lost Password?<span>Click Here!</span></div>}
       
        <div className='submit-container'>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        </div>
    </div>
    <AppBar position="static" style={{backgroundColor:'black'}}>
          <Toolbar>
            <Container>
              <Typography variant="body1" color="inherit" sx={{ flexGrow: 1 }}>
                 All rights reserved.
              </Typography>
              <Typography variant="body1" color="inherit">
                Contact Us | Privacy Policy | Terms of Service
              </Typography>
            </Container>
          </Toolbar>
        </AppBar>
    </>
  )
}

export default Login