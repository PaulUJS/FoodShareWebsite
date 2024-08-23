import {Box, Button, Typography} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom";
import { useForm } from 'react-hook-form'

import Feed from "../components/Feed"

function Home() {
    const navigate = useNavigate()
    const { name } = useParams()
    const {handleSubmit} = useForm()
    const submission = (data) => {
        navigate(`/create/${name}`)
    }
    return (
        <div className='home-container'>
            <div className='display-name'>
                {name}
            </div>
            <form onSubmit={handleSubmit(submission )}>
                <Box sx={{width:'30%'}}>
                    <Button sx={{marginBottom:'30px', marginLeft:'10px'}}variant='contained' type='submit' className='create-button'>
                        Create recipe
                    </Button>
                </Box>
            </form>
            <Feed/>
        </div>
    )
}

export default Home