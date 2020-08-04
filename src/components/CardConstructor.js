import React from 'react'
import Card from './Card'

const CardConstructor = ({details}) => {
    if ( !details ) {
        return <h2>"Loading data...</h2>
    } 
        console.log(details[0].name)
        return (
           <div className="user-card-container">
               {details.map(item => (
                   <Card key={item.id} details={item} />
               ))}
           </div>
        )
    }


export default CardConstructor