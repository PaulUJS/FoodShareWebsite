import MyTextField from '../components/forms/MyTextField'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useParams } from "react-router-dom";
import AxiosInstance from '../components/Axios'
import { useNavigate } from 'react-router-dom'
import {Box, Button, Typography} from '@mui/material'

function Create() {
    const navigate = useNavigate()
    const {handleSubmit, control} = useForm()
    const { name } = useParams()
    const submission = (data) => {
        AxiosInstance.post(
            `/recipe/`, {name: data.name, ingrediants: data.ingrediants, instructions: data.instructions}
        )
        .then((res) => {
            navigate(`/home/${name}`)
            
        })
    }
    return (
        <div className='create-container'>
            <form className='create-form' onSubmit={handleSubmit(submission)}>
                <Box sx={{display: 'flex', width: '100%', backgroundcolor: '#00003f', marginBottom:'10px'}}>
                    <Typography sx={{marginLeft: '470px', color: 'fff'}}>
                        Create Recipe
                    </Typography>
                </Box>
                <Box sx={{display: 'flex', width: '100%', boxShadow: 3, padding: 4, flexDirection: 'column'}}>
                    <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
                        <MyTextField
                            label='Name'
                            name='name'
                            control={control}
                            placeholder="Enter the name of the recipe"
                            width={'30%'}
                        />
                    </Box>

                    <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
                        <MyTextField
                            label='Ingrediants'
                            name='ingrediants'
                            control={control}
                            placeholder="Enter the ingrediants"
                            width={'30%'}
                            multiline
                            rows={4}
                        />
                    </Box>

                    <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
                        <MyTextField
                            label='Instructions'
                            name='instructions'
                            control={control}
                            placeholder="Enter the instructions"
                            width={'30%'}
                            multiline
                            rows={4}
                        />
                    </Box>
                    
                    <Box sx={{marginLeft: '340px', width:'30%'}}>
                        <Button variant='contained' type='submit' sx={{width:'100%'}}>
                            Submit
                        </Button>
                    </Box>
                </Box>
            </form>
        </div>
    )
}

export default Create