import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const Shop = () =>{


    const[items,setitems]=useState([])


    useEffect(() => {
        
        axios.get(`https://fortnite-api.theapinetwork.com/store/get`)
        .then(res =>{
        const items =res.data;
        console.log(items.data)
        setitems(items.data)
    })
    }, [])

   

    return(
        <div>
        {items.map(item =>(
            <div>
        <h1 key={item.itemId}>
            <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
            </h1>
            <img src={item.item.images.information} alt="" width="200px"></img>
            </div>
        ))}
        </div>
    )
}
export default Shop