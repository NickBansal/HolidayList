import React, { Component } from 'react';
import './Stylesheets/App.css'
import background from './Stylesheets/Images/background.jpg'
import holidayData from './Data'
import HolidayInformation from './Components/HolidayInformation'

class App extends Component {

  state = {
    holidayData
  }

  render() {
    const style = {
      backgroundImage: `url(${background})`
    }
    return (
      <div style={style} className='App'>
      <div className="SortButtons">
      <button value='title' onClick={(e) => this.handleClick(e.target.value)}>sort alphabetically</button>
      <button value='price' onClick={(e) => this.handleClick(e.target.value)}>sort by price</button>
      <button value='rating' onClick={(e) => this.handleClick(e.target.value)}>sort by star rating</button>
      </div>
      <HolidayInformation holidayData={this.state.holidayData}/>
      </div>
    );
  }

  handleClick = value => {
    const { holidayData } = this.state
    this.setState({
      holidayData: holidayData.sort((a, b) => b[value] - a[value])
    })
  }
}

export default App;
