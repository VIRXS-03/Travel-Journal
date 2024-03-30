import React from 'react'
import ReactDOM from 'react-dom/client'
import globe from "./assets/globe.png"

export default function Navbar(){
    return (
        <nav>
            <img src={globe}/>
            <h1>my travel wishlist</h1>
        </nav>
    )
}