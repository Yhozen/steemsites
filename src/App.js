import React, { Component } from 'react'
import N from 'react-notify-toast'
import dragDrop from 'drag-drop'

import { Publish, Navigate } from './pages'
import { AOS, Ribbon } from './utilities'

import './pure' // PURE CSS
import './main.css'

import images from './images'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      files: [],
      author: '',
      wif: '',
      pageName: '',
      permlink: '',
      weblink: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    AOS.init()
    import('./utilities/steem') // Download steem (async)
    import('./utilities/peerweb') // Download peerweb (async)
    dragDrop('#dropTarget', files => this.setState({files}) )
  }

  handleChange (event, value) {
    let toChange = {}
    toChange[value] = event.target.value
    this.setState(toChange)
  }

  render () {
    let { author, wif, permlink, files, weblink, pageName } = this.state
    const { handleChange } = this
    console.log(this.state.files)
    return (
      <div className='App'>
      <section>
        <img className="pure-img" src={images.header} alt="header"/>
        <div className="skewed-up-left"></div>
      </section>
      <Navigate handleChange={handleChange} weblink={weblink} />
      <section>
      <img className="pure-img" src={images.middle} alt="middle section background"/>
        <div className="skewed-down-right"></div>
        <div className="skewed-up-right"></div>
      </section>
      <Publish handleChange={handleChange} states={ {author, wif, permlink, files, pageName} } />
      <section>
      <img className="pure-img" src={images.last} alt="last section background"/>
        <div className="skewed-down-right"></div>
      </section>
      <Ribbon size='100' />
      <N/>
    </div>
    )
  }
}