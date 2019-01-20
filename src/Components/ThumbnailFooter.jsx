import React from 'react'

const ThumbnailFooter = ({ date, days, airport, specification, toggleDescription, _id, arrow }) => {
    return (
        <div className='specifications'>
            <p className='specifications__paragraph'>
            <span><strong>{date}</strong></span> for <span><strong>{days}</strong></span> from <span><strong>{airport}</strong></span>, <span><strong>{specification}</strong></span>
            </p>
            <button className='specifications__toggle' onClick={() => toggleDescription(_id)}>
            <i className={`specifications__icon fas fa-angle-${arrow}`}></i>
            </button>
        </div>
    )
}

export default ThumbnailFooter