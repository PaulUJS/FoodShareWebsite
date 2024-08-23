import {Box, Button, Typography} from '@mui/material'
import MyDatePicker from './forms/MyDatePicker'
import MyTextField from './forms/MyTextField'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import AxiosInstance from './Axios'
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'

function Signup() {
    const [error, setError] = useState(null);
    const navigate = useNavigate()
    const {handleSubmit, reset, setValue, control} = useForm()
    const submission = (data) => {
        AxiosInstance.post(
            `/user/`, {username: data.username, password: data.password, displayname: data.displayname}
        )
        .then((res) => {
            navigate(`/signin`)
        })
        .catch(error => {
            setError("User already exists");
        })
    }
   
    return (
        <div className='form-container'>
            <div>
                {error}
                
            </div>
            <form className="form-data" onSubmit={handleSubmit(submission)}>
                <Box sx={{display: 'flex', width: '100%', backgroundcolor: '#00003f', marginBottom:'10px'}}>
                    <Typography sx={{marginLeft: '300px', color: 'fff', fontSize: '28px'}}>
                        Sign up
                    </Typography>
                </Box>
                <Box sx={{display: 'flex', width: '100%', boxShadow: 5, padding: 4, flexDirection: 'column'}}>
                    <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
                        <MyTextField
                            label='Username'
                            name='username'
                            control={control}
                            placeholder="Pick a username"
                            width={'30%'}
                        />

                        <MyTextField
                            label='Password'
                            name='password'
                            control={control}
                            placeholder="Pick a password"
                            width={'30%'}
                        />  

                        <MyTextField
                            label='Displayname'
                            name='displayname'
                            control={control}
                            placeholder="Pick a displayname"
                            width={'30%'}
                        />  
                    </Box>
                    
                    <Box sx={{width:'30%'}}>
                        <Button variant='contained' type='submit' sx={{width:'100%'}}>
                            Submit
                        </Button>
                    </Box>
                </Box>
            </form>
            <NavLink to="/signin" className="navlink"> Sign in </NavLink>
        </div>
    )
}

export default Signup