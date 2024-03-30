import React from 'react'
import ReactDOM from 'react-dom/client'
import data from "./data.jsx"
import locationIcon from "./assets/location-icon.png"

export default function Center(){
    const dataMap = (data.map(x=>
        <div className='trips'>
            <img  className='trips-img'src = {x.imageUrl}/>
        <div>
        <div className='location'>
            <img src={locationIcon} alt="Location Icon"/>
            <h2>{x.location} </h2>
            <a href={x.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1 className='title'>{x.title}</h1>
        <div>
            <h2 className='date'>{x.startDate} - {x.endDate}</h2>
        </div>
        <h2 className='desc'>{x.description}</h2>
    </div>
</div> ))
    return (dataMap)
}