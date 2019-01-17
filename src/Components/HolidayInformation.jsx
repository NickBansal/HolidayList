import React from 'react'
import stars from '../Stylesheets/Images/gold-stars.png'
import '../Stylesheets/HolidayInformation.css'

const HolidayInformation = ({
  holidayData, toggleReverse,
  toggleDescription, showDescription, holidayElement }) => {

  const thumbnailOrder = toggleReverse ? 'column-reverse' : 'column'
  const style = {
    flexDirection: thumbnailOrder,
    display: 'flex'
  }

  return (
    <div style={style} className="FullHolidayList">
      {holidayData.map((info, i) => {
        const { img, title, rating, location, price, date, days, airport, specification, description, _id } = info
        return (
          <div className='HolidayWithDescription' key={i}>
            <div className='HolidayInformation'>
              <img className='HolidayImage' src={img} alt='Holiday' />
              <div className='HoldiayInformationTitle'>
                <div className='Ratings'>
                  <p><strong>{title} </strong>
                    {Array(Number(rating)).fill(null)
                      .map((item, index) => <img key={index} className='StarsImage' src={stars} alt="stars" />)}
                  </p>
                  <p>{location}</p>
                </div>
                <div className='Price'>
                  <p>holiday price</p>
                  <h3>£{price}</h3>
                </div>
              </div>

              <div className='HolidaySpecifications'>
                <p><span>{date}</span> for <span>{days}</span> from <span>{airport}</span>, <span>{specification}</span></p>
                {
                  holidayElement === _id && showDescription &&
                  <i onClick={() => toggleDescription(_id)} className='fas fa-angle-down'></i>
                }
                {
                  !(holidayElement === _id && showDescription) &&
                  <i onClick={() => toggleDescription(_id)} className='fas fa-angle-right'></i>
                }
              </div>
            </div>
            {holidayElement === _id && showDescription &&
              <div className='HolidaySpecificationsDescription'>
                <p>{description}</p>
                <button><strong>BOOK NOW</strong></button>
              </div>
            }
          </div>
        )
      })}
    </div>)
}

export default HolidayInformation