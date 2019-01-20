import React from 'react'
import stars from '../Stylesheets/Images/gold-stars.png'

const ThumbnailHeader = ({ title, rating, location, price }) => {
    return (
        <div className='holidayHeader'>
            <div className='holidayHeader__ratings'>
                <h1 className='holidayHeader__hotelName'><strong>{title} </strong>
                    {
                        Array(Number(rating)).fill(null)
                            .map((item, index) => <img key={index} className='holidayHeader__stars' src={stars} alt="stars" />)
                    }
                </h1>
                <h2 className='holidayHeader__location'>{location}</h2>
            </div>
            <div className='price'>
                <p className='price__text'>holiday price</p>
                <h3 className='price__value'>£{price}</h3>
            </div>
        </div>
    )
}

export default ThumbnailHeader