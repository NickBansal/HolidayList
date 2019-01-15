import React, { Component } from 'react';
import './Stylesheets/App.css'
import background from './Stylesheets/Images/background.jpg'
import holidayData from './Data'
import HolidayInformation from './Components/HolidayInformation'
import SortButtons from './Components/SortButtons'
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
      <SortButtons handleClick={this.handleClick} />
        

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
