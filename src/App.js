import React, { Component } from 'react';
import './Stylesheets/App.css'
import background from './Stylesheets/Images/background.jpg'
import holidayData from './Data'

class App extends Component {
  render() {
    const style = {
      backgroundImage: `url(${background})`
    }
    return (
      <div style={style} className="App">
        {console.log(holidayData)}
        {holidayData.map((info, i) => {
          return (
            <div key={i} className="HolidayInformation">
              <img src={info.img} alt="Holiday"/>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
