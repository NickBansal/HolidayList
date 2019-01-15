import React, { Component } from 'react';
import './Stylesheets/App.css'
import background from './Stylesheets/Images/background.jpg'
import holidayData from './Data'
import stars from './Stylesheets/Images/gold-stars.png'

class App extends Component {
  render() {
    const style = {
      backgroundImage: `url(${background})`
    }
    return (
      <div style={style} className='App'>
        {holidayData.map((info, i) => {
          return (
            <div key={i} className='HolidayInformation'>
              <img className='Holiday' src={info.img} alt='Holiday' />
              <div className='HoldiayInformationTitle'>
                <div className='Ratings'>
                  <p><strong>{info.title} </strong>
                  {Array(info.rating).fill(<img className='StarsImage' src={stars} alt="stars" />)
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
      </div>
    );
  }
}

export default App;
