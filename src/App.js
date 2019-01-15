import React, { Component } from 'react';
import './Stylesheets/App.css'
import background from './Stylesheets/Images/background.jpg'
import holidayData from './Data'
import HolidayInformation from './Components/HolidayInformation'
import { alphaSort } from './utils'

class App extends Component {

  state = {
    holidayData,
    toggleReverse: false,
    sortValue: 'title'  
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

        <HolidayInformation 
        toggleReverse={this.state.toggleReverse}
        holidayData={this.state.holidayData} />
      </div>
    );
  }

  handleClick = value => {
    const { holidayData, sortValue, toggleReverse } = this.state
    const newToggleReverse = sortValue !== value ? false : !toggleReverse

    const filteredHolidayData = value === 'title' ? 
    holidayData.sort(alphaSort) : 
    holidayData.sort((a, b) => b[value] - a[value])

    this.setState({
      holidayData: filteredHolidayData,
      toggleReverse: newToggleReverse,
      sortValue: value
    })
  }
}

export default App;
