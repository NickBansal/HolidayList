import React from 'react'
import stars from '../Stylesheets/Images/gold-stars.png'

const ThumbnailHeader = ({ title, rating, location, price }) => {
    return (
        <div className='HoldiayInformationTitle'>
            <div className='Ratings'>
                <h1 className='RatingsTitle'><strong>{title} </strong>
                    {
                        Array(Number(rating)).fill(null)
                            .map((item, index) => <img key={index} className='StarsImage' src={stars} alt="stars" />)
                    }
                </h1>
                <h2 className='RatingsLocation'>{location}</h2>
            </div>
            <div className='Price'>
                <p className='HolidayPriceText'>holiday price</p>
                <h3 className='HolidayPriceValue'>£{price}</h3>
            </div>
        </div>
    )
}

export default ThumbnailHeader