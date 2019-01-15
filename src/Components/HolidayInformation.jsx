import React from 'react'
import stars from '../Stylesheets/Images/gold-stars.png'
import '../Stylesheets/HolidayInformation.css'

const HolidayInformation = ({ holidayData, toggleReverse, toggleDescription, showDescription }) => {

    const thumbnailOrder = toggleReverse ? 'column-reverse' : 'column'
    const style = {
        flexDirection: thumbnailOrder,
        display: 'flex'
    }

    return (<div style={style} className="FullHolidayOrder">
         {holidayData.map((info, i) => {
          return (
            <div key={i} className='HolidayInformation'>
              <img className='Holiday' src={info.img} alt='Holiday' />
              <div className='HoldiayInformationTitle'>
                <div className='Ratings'>
                    <p><strong>{info.title} </strong>
                  {Array(Number(info.rating)).fill(null)
                    .map((item, index) => <img key={index} className='StarsImage' src={stars} alt="stars" />)}
                    </p>
                  <p>{info.location}</p>
                </div>
                <div className='Price'>
                  <p>holiday price</p>
                  <h3>£{info.price}</h3>
                </div>
              </div>
              <div className='HolidaySpecifications'>
                <p><span>{info.date}</span> for <span>{info.days}</span> from <span>{info.airport}</span>, <span>{info.specification}</span></p>
                <i onClick={() => toggleDescription()} className='fas fa-angle-right'></i>
              </div>
            </div>
          )
        })}
    </div>)
}

export default HolidayInformation