import React from 'react'
import './cards.css'
import { cardData } from '../../data/data'
import Card from '../card/Card'

function Cards() {
  return (
    <div className='cards'>
{
    cardData.map((card,index) =>(
        <div className='parentContainer'>
            <Card
            title={card.title}
            color={card.color}
            barValue={card.barValue}
            png={card.png}
            series={card.series}
            />
        </div>
    ))
}

    </div>
  )
}

export default Cards