import React from 'react'
import ReactDOM from 'react-dom/client'
import data from "./data.jsx"
import locationIcon from "./assets/location-icon.png"
import Card from "./Card.jsx"

export default function Center(){
    const cards=(data.map(x=>
        <Card
        imageUrl={x.imageUrl}
        location={x.location}
        googleMapsUrl={x.googleMapsUrl}
        title={x.title}
        startDate={x.startDate}
        endDate={x.endDate}
        description={x.description}
        key={x.id}
        />))

    return(
        <section className="cards-list">
            {cards}
        </section>
    )
}