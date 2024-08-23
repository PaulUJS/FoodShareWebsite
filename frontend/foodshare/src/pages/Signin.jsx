import {Box, Button, Typography} from '@mui/material'
import MyDatePicker from '../components/forms/MyDatePicker'
import MyTextField from '../components/forms/MyTextField'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import AxiosInstance from '../components/Axios'
import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

function Signin() {
    const [error, setError] = useState(null);
    const navigate = useNavigate()
    const {handleSubmit, control} = useForm()
    const submission = (data) => {
        AxiosInstance.get(
            `/user`
        )
        .then((res) => {
            let arr = res.data
            for (let index = 0; index < arr.length; index++) {
                if (arr[index].username == data.username) {
                    if (arr[index].password == data.password) {
                        navigate(`/home/${arr[index].displayname}`)
                    }
                }
            }
            setError("Couldn't find user")
        })
    }
    return (
        <div className='main-container'>
            <div className='form-container'>
                <div>
                    {error}
                </div>
                <form className="form-data" onSubmit={handleSubmit(submission)}>
                    <Box sx={{display: 'flex', width: '100%', backgroundcolor: '#00003f', marginBottom:'10px'}}>
                        <Typography sx={{marginLeft: '180px', color: 'fff'}}>
                            Sign in
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex', width: '100%', boxShadow: 3, padding: 4, flexDirection: 'column'}}>
                        <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
                            <MyTextField
                                label='Username'
                                name='username'
                                control={control}
                                placeholder="Enter your username"
                                width={'30%'}
                            />

                            <MyTextField
                                label='Password'
                                name='password'
                                control={control}
                                placeholder="Enter your password"
                                width={'30%'}
                            />  
                        </Box>
                        
                        <Box sx={{width:'30%', marginLeft: '20px'}}>
                            <Button variant='contained' type='submit' sx={{width:'100%'}}>
                                Submit
                            </Button>
                        </Box>
                    </Box>
                </form>
            </div>
        </div>
    )
}


export default Signin