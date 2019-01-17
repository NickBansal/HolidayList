import React, { Component } from 'react'
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
    sortValue: 'price',
    showDescription: false,
    sortByElement: 1
  }

  render() {
    const { sortByElement, toggleReverse, holidayData, showDescription, holidayElement } = this.state
    const style = {
      backgroundImage: `url(${background})`
    }
    return (
      <div style={style} className='App'>
        <SortButtons 
        sortByElement={sortByElement}
        handleClick={this.handleClick} />
        
        <HolidayInformation
        holidayElement={holidayElement}
        showDescription={showDescription}
        toggleDescription={this.toggleDescription}
        toggleReverse={toggleReverse}
        holidayData={holidayData} />
      </div>
    )
  }

  handleClick = (value, index) => {
    const { holidayData, sortValue, toggleReverse } = this.state
    const newToggleReverse = sortValue !== value ? false : !toggleReverse
    const filteredHolidayData = value === 'title' ?
    holidayData.sort(alphaSort) :
    holidayData.sort((a, b) => b[value] - a[value])
    this.setState({
      holidayData: filteredHolidayData,
      toggleReverse: newToggleReverse,
      sortValue: value,
      sortByElement: index
    })
  }
  
  toggleDescription = (index) => {
    const { showDescription, holidayElement } = this.state
    const newShow = showDescription && index !== holidayElement ? showDescription : !showDescription
    this.setState({
      showDescription: newShow,
      holidayElement: index
    })
  }
}

export default App
