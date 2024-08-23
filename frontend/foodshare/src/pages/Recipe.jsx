import { useParams } from "react-router-dom";
import axios from 'axios'
import AxiosInstance from '../components/Axios'
import { useEffect, useState } from "react"

function Recipe() {
    const { name } = useParams()
    const [data, setData] = useState([]);   
    useEffect(() => {
        AxiosInstance.get(`/recipe`)
        .then((res) => {
            let arr = res.data
            for (let index = 0; index < arr.length; index++) {
                if (arr[index].name == name) {
                    setData(arr[index])
                }
            }
        })
    }, [])
    return (
        <div className="recipe-container">
            <label className="recipe-label">Title</label>
            <div className="recipe-items">
                {data.name}
            </div>
            

            <label className="recipe-label">Ingrediants</label>
            <div className="recipe-items">
                {data.ingrediants}
            </div>

            <label className="recipe-label">Instructions</label>
            <div className="recipe-items">
                {data.instructions}
            </div>
        </div>
    )
}

export default Recipe