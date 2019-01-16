import React from 'react'
import '../Stylesheets/SortButtons.css'
import buttonData from '../Data/buttonData'

const styleSelected = {
    cursor: 'pointer',
    background: '#009bff',
    color:  'whitesmoke',
    boxShadow: 'inset 1px 1px 3px black'
}

const styleNotSelected = {
    background: '#B5EAF8',
    color: '#0051ff',
    boxShadow: '1px 1px 3px #00000078'
}

const SortButtons = ({ handleClick, sortByElement }) => {
    return (
        <div className="SortButtons">
            {buttonData.map((item, index) => {
                const style = index === sortByElement ? styleSelected : styleNotSelected
                return (
                <button 
                style={style}
                key={index} 
                value={item.title}
                onClick={e => handleClick(e.target.value, index)}>sort {item.sortBy}</button>
                )
            })}
        </div>
    )
}

export default SortButtons