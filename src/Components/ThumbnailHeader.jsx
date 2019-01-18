import React from 'react'
import stars from '../Stylesheets/Images/gold-stars.png'

const ThumbnailHeader = ({ title, rating, location, price }) => {
    return (
        <div className='HoldiayInformationTitle'>
            <div className='Ratings'>
                <h1><strong>{title} </strong>
                    {
                        Array(Number(rating)).fill(null)
                            .map((item, index) => <img key={index} className='StarsImage' src={stars} alt="stars" />)
                    }
                </h1>
                <h2>{location}</h2>
            </div>
            <div className='Price'>
                <p>holiday price</p>
                <h3>£{price}</h3>
            </div>
        </div>
    )
}

export default ThumbnailHeader