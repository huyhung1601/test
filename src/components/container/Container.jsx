import React from 'react'
import Card from '../card/Card'
import beer from '../../asset/icons/beer.jpg'
import burger from '../../asset/icons/burger.jpg'
import cereal from '../../asset/icons/cereal.jpg'
import eggs from '../../asset/icons/eggs.jpg'
import hotdog from '../../asset/icons/hotdog.jpg'
import meat from '../../asset/icons/meat.jpg'
import pizza from '../../asset/icons/pizza.jpg'
import sandwich from '../../asset/icons/sandwich.jpg'
import './Container.scss'
export default function Container() {
    const state = {
        categories:[
            {
                name:'Beer',
                img: beer,
                options: ['IPA','Brown Ale', 'Porter', 'Stout']
            },
            {
                name:'Burger',
                img: burger,
                options: ['IPA','Brown Ale', 'Porter', 'Stout']
            },
            {
                name:'Cereal',
                img: cereal,
                options: ['IPA','Brown Ale', 'Porter', 'Stout']
            },
            {
                name:'Eggs',
                img: eggs,
                options: ['IPA','Brown Ale', 'Porter', 'Stout']
            },
            {
                name:'Hotdog',
                img: hotdog,
                options: ['IPA','Brown Ale', 'Porter', 'Stout']
            },
            {
                name:'Meat',
                img: meat,
                options: ['IPA','Brown Ale', 'Porter', 'Stout']
            },
            {
                name:'Pizza',
                img: pizza,
                options: ['IPA','Brown Ale', 'Porter', 'Stout']
            },
            {
                name:'Sandwich',
                img: sandwich,
                options: ['IPA','Brown Ale', 'Porter', 'Stout']
            },
    ]
    }
    return (
        <section className='menu-container'>
            <div className="bars"></div>
            <section className="top1 h1">
                
            </section>
            <section className="bottom1">
                {state.categories.map(item=>(                  
                    <div>                        
                        <Card category={item}/>
                    </div>
                ))}
            </section>
        </section>
    )
}
