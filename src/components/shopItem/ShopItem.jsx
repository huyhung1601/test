import axios from 'axios'
import React, {useEffect, useState} from 'react'
import './styles.scss'

const ShopItem = ({match}) => {
    useEffect(() => {
        fetchItem()
        console.log(match)
    }, [])
    const [item, setItem] =useState()
    async function fetchItem (){
        try{
            const res = await axios.get(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`)
            const data = res.data.data;
            setItem(data)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className = "shopItem">
            {item && 
            <div>
                <img src={item.item.images.icon} alt="" />
            <   h6>hello</h6>
            </div>
            
            }
        </div>
    )
}

export default ShopItem
