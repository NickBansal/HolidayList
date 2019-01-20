import React from 'react'
import stars from '../Stylesheets/Images/gold-stars.png'

const ThumbnailHeader = ({ title, rating, location, price }) => {
    return (
        <div className='holidayHeader'>
            <div className='holidayHeader__ratings'>
                <h1 className='holidayHeader__ratings__hotel'><strong>{title} </strong>
                    {
                        Array(Number(rating)).fill(null)
                            .map((item, index) => <img key={index} className='holidayHeader__ratings__stars' src={stars} alt="stars" />)
                    }
                </h1>
                <h2 className='holidayHeader__ratings__location'>{location}</h2>
            </div>
            <div className='holidayHeader__price'>
                <p className='holidayHeader__price__text'>holiday price</p>
                <h3 className='holidayHeader__price__value'>£{price}</h3>
            </div>
        </div>
    )
}

export default ThumbnailHeader