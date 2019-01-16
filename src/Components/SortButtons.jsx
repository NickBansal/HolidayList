import React from 'react'
import '../Stylesheets/SortButtons.css'

const SortButtons = ({ handleClick }) => {
    return (
        <div className="SortButtons">
            <button value='title' onClick={e => handleClick(e.target.value)}>sort alphabetically</button>
            <button value='price' autoFocus onClick={e => handleClick(e.target.value)}>sort by price</button>
            <button value='rating' onClick={e => handleClick(e.target.value)}>sort by star rating</button>
        </div>
    )
}

export default SortButtons