import React from 'react'
import ReactDOM from 'react-dom/client'
import locationIcon from "./assets/location-icon.png"


export default function Card(props){
    return (
        <div className='trips'>
                <img  className='trips-img'src = {props.imageUrl}/>
            <div>
            <div className='location'>
                <img src={locationIcon} alt="Location Icon"/>
                <h2>{props.location} </h2>
                <a href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1 className='title'>{props.title}</h1>
            <div>
                <h2 className='date'>{props.startDate}</h2>
            </div>
            <h2 className='desc'>{props.description}</h2>
            </div>
        </div> 
)
}