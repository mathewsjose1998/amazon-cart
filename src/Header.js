import React from 'react'
import './Header.css'

function Header({names,items}) {
    return (
        <div className="App-header">
            <h1>Amazon Cart{names[1]} </h1>
            <h2>{items[1]}</h2>
            
        </div>
    )
}

export default Header
