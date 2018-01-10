import React, { Component } from 'react'
import N , {notify} from 'react-notify-toast'

import { Publish, Navigate } from './pages'
import { AOS, Animated, Ribbon } from './utilities'

import './pure' // PURE CSS
import './main.css'

import images from './images'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      magnetLink: '',
      author: '',
      wif: '',
      permlink: '',
      weblink: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    AOS.init()
    import('./utilities/steem') // Download steem (async)
    import('./utilities/peerweb') // Download peerweb (async)
  }

  handleChange (event, value) {
    let toChange = {}
    toChange[value] = event.target.value
    this.setState(toChange)
  }

  render () {
    let { author, wif, permlink, magnetLink, weblink } = this.state
    const { handleChange } = this
    return (
      <div className='App'>
      <section>
        <img className="pure-img" src={images.header} alt="header"/>
        <div className="skewed-up-left"></div>
      </section>
      <Navigate handleChange={handleChange} weblink={weblink} notify={notify}/>
      <section>
      <img className="pure-img" src={images.middle} alt="middle section background"/>
        <div className="skewed-down-right"></div>
        <div className="skewed-up-right"></div>
      </section>
      <Publish handleChange={handleChange} states={ {author, wif, permlink, magnetLink} } notify={notify}/>
      <section>
      <img className="pure-img" src={images.last} alt="last section background"/>
        <div className="skewed-down-right"></div>
      </section>
        <button className='btn'>Login</button>
        <Ribbon size='100' />
        <N/>
    </div>
    )
  }
}