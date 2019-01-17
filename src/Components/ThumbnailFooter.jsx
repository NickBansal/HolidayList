import React from 'react'

const ThumbnailFooter = ({ date, days, airport, specification, toggleDescription, _id, arrow }) => {
    return (
        <div className='HolidaySpecifications'>
            <p><span>{date}</span> for <span>{days}</span> from <span>{airport}</span>, <span>{specification}</span></p>
            <i onClick={() => toggleDescription(_id)} className={`fas fa-angle-${arrow}`}></i>
        </div>
    )
}

export default ThumbnailFooter