import React, { Component } from 'react'
import N , {notify} from 'react-notify-toast'
import PeerWeb from 'peerweb'

import { Publish, Navigate } from './pages'
import { AOS, Animated, Ribbon } from './utilities'

import { buttons, forms } from './pure' // PURE CSS
import './main.css'

import headerBG from './images/header.jpg' // Cannot load without this image because it's cool af

const images = {
  header: headerBG,
  middle: 'https://lh3.googleusercontent.com/1iU7YVb6RpLMSbfiIzBL1tAII0rJIPREwyckqvMAUAg4cB0FHoUehL37dS_PBGeRZKx3c2my8VrRof32vv2wa13lW6gyJ0UQVk8-Crc=w4160-h2340-no',
  last: 'https://lh3.googleusercontent.com/rAKp9cydlNx1t2pIRiojbAI5MRUkrPeKFrQYBRfZP8CNePy3Ko85R2364zPHvjt1Bwp4SznfPjZiqp4=w4160-h2340-no'
}

const peerweb = new PeerWeb(true)

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
  }

  handleChange (event, value) {
    let toChange = {}
    toChange[value] = event.target.value
    this.setState(toChange)
  }

  render () {
    let { author, wif, permlink, magnetLink, weblink, page } = this.state
    const { handleChange } = this
    return (
      <div className='App'>
      <section>
        <img className="pure-img" src={images.header}/>
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
          <Navigate handleChange={handleChange} weblink={weblink} peerweb={peerweb} notify={notify}/>
        </Animated>
             
      </section>
      <section>
      <img className="pure-img" src={images.middle}/>
        <div className="skewed-down-right"></div>
        <div className="skewed-up-right"></div>
      </section>
      <section id='sec2'>
           <Animated animation='slide-right'>
              <h1>Publish your own websites</h1>
              <div className='spacer' />
              <p> All you need is a steem account, the corresponding posting wif, a name and the folder with the content. For now you will need to drop tha entire
                folder to <a href="http://instant.io">instant</a> to seed the torrent and also to get the magnet link.  </p>
            </Animated>
            <Animated>
              <Publish handleChange={handleChange} states={ {author, wif, permlink, magnetLink} }/>
            </Animated>
      </section>
      <section>
      <img className="pure-img" src={images.last}/>
        <div className="skewed-down-right"></div>
      </section>
        <button className='btn'>Login</button>
        <Ribbon size='100' />
        <N/>
    </div>
    )
  }
}