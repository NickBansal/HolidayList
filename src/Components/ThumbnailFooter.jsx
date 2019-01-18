import React from 'react'

const ThumbnailFooter = ({ date, days, airport, specification, toggleDescription, _id, arrow }) => {
    return (
        <div className='HolidaySpecifications'>
            <p><span>{date}</span> for <span>{days}</span> from <span>{airport}</span>, <span>{specification}</span></p>
            <button onClick={() => toggleDescription(_id)}><i className={`fas fa-angle-${arrow}`}></i></button>
        </div>
    )
}

export default ThumbnailFooter