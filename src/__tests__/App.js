import '../setupTest'
import React from 'react'
import App from '../App'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('<App />', () => {

  let wrapper 
  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  it('Component matches the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('Changes the sortValue in state on click handler', () => {

    wrapper.instance().handleClick('title')
    expect(wrapper.state().sortValue).toBe('title')
    wrapper.instance().handleClick('price')
    expect(wrapper.state().sortValue).toBe('price')
    wrapper.instance().handleClick('ratings')
    expect(wrapper.state().sortValue).toBe('ratings')
  })
  it('Changes the toggleReverse in state on click handler', () => {

    wrapper.instance().handleClick('title')
    expect(wrapper.state().toggleReverse).toBe(false)
    wrapper.instance().handleClick('title')
    expect(wrapper.state().toggleReverse).toBe(true)
    wrapper.instance().handleClick('title')
    expect(wrapper.state().toggleReverse).toBe(false)
    wrapper.instance().handleClick('price')
    expect(wrapper.state().toggleReverse).toBe(false)
 
  })
  it('Changes the showDescription in state on click handler', () => {
    wrapper.instance().toggleDescription(1)
    expect(wrapper.state().showDescription).toBe(true)
    expect(wrapper.state().holidayElement).toBe(1)
    wrapper.instance().toggleDescription(2)
    expect(wrapper.state().showDescription).toBe(true)
    expect(wrapper.state().holidayElement).toBe(2)
    wrapper.instance().toggleDescription(3)
    expect(wrapper.state().showDescription).toBe(true)
    expect(wrapper.state().holidayElement).toBe(3)
    wrapper.instance().toggleDescription(3)
    expect(wrapper.state().showDescription).toBe(false)
    expect(wrapper.state().holidayElement).toBe(3)
 
  })
})
