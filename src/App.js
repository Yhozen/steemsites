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
    import('./utilities/steem') // Download steem (async)
    import('./utilities/peerweb') // Download peerweb (async)
    AOS.init()
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
      <section id='sec2'>
        <Animated>
            <h1>STEEMSITES</h1>
            <h2>Decentralize the web.</h2>
        </Animated > 
        <div className='spacer' />
        <Animated animation='slide-right' offset='300'>
          <p> Steemsites is a new way to create, host and access to webpages.
            Powered by the Steem blockchain and WebTorrent now you can build websites that are totally decentralize and will be avaible as long as one person is sharing it.
            Thus now we can have neutral and uncensored websites thanks to the community. You can access to a web via a weblink, which is the author/nameofthepage (Just like a Github repository). Try a weblink below (for example "garox/init") </p>
        </Animated>
        <Animated animation='fade-zoom-in' duration='600' offset='350'>
          <Navigate handleChange={handleChange} weblink={weblink} notify={notify}/>
        </Animated>
             
      </section>
      <section>
      <img className="pure-img" src={images.middle} alt="middle section background"/>
        <div className="skewed-down-right"></div>
        <div className="skewed-up-right"></div>
      </section>
      <section id='sec2'>
           <Animated animation='slide-right'>
              <h1>Publish your own websites</h1>
              <div className='spacer' />
              <p> All you need is a steem account, the corresponding posting wif, a name and the folder with the content. For now you will need to drop the entire
                folder to <a href="http://instant.io">instant</a> to seed the torrent and also to get the magnet link.  </p>
            </Animated>
            <Animated>
              <Publish handleChange={handleChange} states={ {author, wif, permlink, magnetLink} } notify={notify}/>
            </Animated>
      </section>
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