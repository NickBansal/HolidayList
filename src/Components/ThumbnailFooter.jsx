import React from 'react'

const ThumbnailFooter = ({ date, days, airport, specification, toggleDescription, _id, arrow }) => {
    return (
        <div className='specifications'>
            <p className='specifications__paragraph'><span>{date}</span> for <span>{days}</span> from <span>{airport}</span>, <span>{specification}</span></p>
            <button className='.specification__toggle' onClick={() => toggleDescription(_id)}>
            <i className={`.specification__icon fas fa-angle-${arrow}`}></i>
            </button>
        </div>
    )
}

export default ThumbnailFooter