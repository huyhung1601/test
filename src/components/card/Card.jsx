import React, {useState} from 'react'
import './Card.scss'

export default function Card(props) {
const [showOptions, toggleOptions] = useState(false);


    return (        
        <section className='card-container' onClick={()=>toggleOptions(!showOptions)}>
            {
                showOptions ? (
                    <ul className="card-list">
                        {props.category.options.map(option=>(
                    <li key={option}>{option}</li>
                    
                ))}
                    </ul>) :
                (
                    <>
                   <section className='top-card'> 
                       <img className='card-img' src={props.category.img} alt={props.category.name}/>      
                    </section>
                    <section className="bottom-card">
                        {props.category.name}
                    </section>
                    </>
                )             
            }
        </section>
    )
}
