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
        return (
          <div className='HolidayWithDescription' key={i}>
            <div className='HolidayInformation'>
              <img className='HolidayImage' src={info.img} alt='Holiday' />
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
                {holidayElement === i && <i onClick={() => toggleDescription(i)} className={`fas fa-angle-down`}></i>}
                {holidayElement !== i && <i onClick={() => toggleDescription(i)} className={`fas fa-angle-right`}></i>}
              </div>
            </div>
            {holidayElement === i && showDescription &&
              <div className='HolidaySpecificationsDescription'>
                <p>{info.description}</p>
                <button><strong>BOOK NOW</strong></button>
              </div>
            }
          </div>
        )
      })}
    </div>)
}

export default HolidayInformation