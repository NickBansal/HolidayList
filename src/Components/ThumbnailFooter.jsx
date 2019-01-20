import React from 'react'

const ThumbnailFooter = ({ date, days, airport, specification, toggleDescription, _id, arrow }) => {
    return (
        <div className='specifications'>
            <p className='specifications__paragraph'>
            <strong>{date}</strong> for <strong>{days}</strong> from <strong>{airport}</strong>, <strong>{specification}</strong>
            </p>
            <button className='specifications__toggle' onClick={() => toggleDescription(_id)}>
            <i className={`specifications__icon fas fa-angle-${arrow}`}></i>
            </button>
        </div>
    )
}

export default ThumbnailFooter