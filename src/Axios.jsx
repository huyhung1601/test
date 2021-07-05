import React, { useState, useEffect } from 'react'
import axios from 'axios'

const fetchData = async ()=>{
    return axios
    .get('https://randomuser.me/api')
    .then(({data})=>{
        console.log(data);
        return data
    })
    .catch(err=>{
        console.log(err)
    })
}

export default function Axios() {
    const[randomUser, setRandomUser] = useState('')
    const [infos, setInfos] = useState('')
    useEffect(() => {
        fetchData().then((randomData)=>{
            setRandomUser(JSON.stringify(randomData) || "No data");
            setInfos(randomData.results)
        })
    }, [])
    // async function getData() {
    //     try {
    //         const res = await axios.get('https://randomuser.me/api');
    //         const data = JSON.stringify(res.data)
    //         .then(
    //         setRandomUser(data))
    //     } catch (err){
    //         console.log(err.message)
    //     }
    // }
    
    return (
        <div>
            {infos.map((info,index)=>(
                {info}
            ))}
            {/* <h1>{randomUser}</h1> */}
            <button onClick={()=>fetchData()}>get Data</button>
        </div>
    )
}

