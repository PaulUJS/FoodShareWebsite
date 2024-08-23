import { useEffect, useState } from "react"
import AxiosInstance from "./Axios";
import { NavLink, useNavigate } from 'react-router-dom'

function Feed() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        AxiosInstance.get(`/recipe`)
        .then((res) => {
            setData(res.data)
            console.log(res.data)
        })
        
    }, [])

    return (
            data.map(recipes => {
                return (    
                    <div className="recipe-container">
                        <NavLink to={`/recipe/${recipes.name}`}>Name: {recipes.name}</NavLink>
                    </div>
                )
            })    
    )
}

export default Feed