import React from 'react'
import stars from '../Stylesheets/Images/gold-stars.png'
import '../Stylesheets/App.css'

const HolidayInformation = ({ holidayData, toggleReverse }) => {

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
                  {Array(Number(info.rating)).fill(<img className='StarsImage' src={stars} alt="stars" />)
                  .map(star => star)}
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
                <i className='fas fa-angle-right'></i>
              </div>
            </div>
          )
        })}
    </div>)
}

export default HolidayInformation