import React from 'react'
import '../Stylesheets/HolidayInformation.css'
import ThumbnailHeader from '../Components/ThumbnailHeader'
import ThumbnailFooter from '../Components/ThumbnailFooter'

const HolidayInformation = ({ holidayData, toggleReverse,toggleDescription, showDescription, holidayElement }) => {
  
  const thumbnailOrder = toggleReverse ? 'column-reverse' : 'column'
  const style = {
    flexDirection: thumbnailOrder,
    display: 'flex'
  }

  return (
    <div style={style} className="FullHolidayList">
      {holidayData.map((info, i) => {
        const { img, title, rating, location, price, date, days, airport, specification, description, _id } = info
        const arrow = holidayElement === _id && showDescription ? 'down' : 'right'
        return (
          <div className='HolidayWithDescription' key={i}>
            <div className='HolidayInformation'>
              <img className='HolidayImage' src={img} alt='Holiday' />
              
              <ThumbnailHeader 
              title={title} 
              rating={rating} 
              location={location} 
              price={price}/>

              <ThumbnailFooter 
              date={date} 
              days={days} 
              airport={airport} 
              specification={specification} 
              toggleDescription={toggleDescription}
              arrow={arrow}
              _id={_id}/>
 
            </div>
            {
              holidayElement === _id && showDescription &&
              <div className='toggleInformation'>
                <p className='toggleInformation__description'>{description}</p>
                <button className='toggleInformation__bookNow'><strong>BOOK NOW</strong></button>
              </div>
            }
          </div>
        )
      })}
    </div>)
}

export default HolidayInformation