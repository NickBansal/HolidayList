import React from 'react'
import '../Stylesheets/SortButtons.css'
import buttonData from '../Data/buttonData'

const SortButtons = ({ handleClick, sortByElement }) => {
    return (
        <div className="allButtons">
            {buttonData.map((item, index) => {
                const newClassName = index === sortByElement ? 'buttons--selected' : 'buttons--notSelected'
                return (
                <button 
                className={`allButtons__sort ${newClassName}`}
                key={index} 
                value={item.title}
                onClick={e => handleClick(e.target.value, index)}>sort {item.sortBy}</button>
                )
            })}
        </div>
    )
}

export default SortButtons