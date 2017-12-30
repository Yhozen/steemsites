import React, { Component } from 'react'
import steem from 'steem'
import PeerWeb from 'peerweb'

import { Publish, Navigate } from './pages'
import { AOS, Animated, Ribbon } from './utilities'

import { buttons, forms } from './pure'
import './main.css'

import headerBG from './images/header.jpg' // Cannot load without this image because it's cool af

const images = {
  header: headerBG,
  middle: 'https://lh3.googleusercontent.com/1iU7YVb6RpLMSbfiIzBL1tAII0rJIPREwyckqvMAUAg4cB0FHoUehL37dS_PBGeRZKx3c2my8VrRof32vv2wa13lW6gyJ0UQVk8-Crc=w4160-h2340-no',
  last: 'https://lh3.googleusercontent.com/rAKp9cydlNx1t2pIRiojbAI5MRUkrPeKFrQYBRfZP8CNePy3Ko85R2364zPHvjt1Bwp4SznfPjZiqp4=w4160-h2340-no'
}

const { log, info } = console

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
    this.goto = this.goto.bind(this)
  }

  componentDidMount() {
    AOS.init()
  }

  handleChange (event, value) {
    let toChange = {}
    toChange[value] = event.target.value
    this.setState(toChange)
  }

  goto (e) {
    const { weblink } = this.state
    const [ author , permlink ] = weblink.split('/')
    steem.api.getContent(author, permlink, function(err, result) {
      if (err) cb(err)
      let { magnetLink } = JSON.parse(result.json_metadata)
      log(magnetLink)
      peerweb.render(magnetLink)
    })
    e.preventDefault()
  }

  render () {
    let { author, wif, permlink, magnetLink, weblink, page } = this.state
    const { goto, handleChange } = this
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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Animated>
        <Animated animation='fade-zoom-in' duration='600' offset='350'>
          <Navigate goto={goto} handleChange={handleChange} weblink={weblink}/>
        </Animated>
             
      </section>
      <section>
      <img className="pure-img" src={images.middle}/>
        <div className="skewed-down-right"></div>
        <div className="skewed-up-right"></div>
      </section>
      <section id='sec2'>
            <h1></h1>
            <Animated>
              <Publish write={write} handleChange={handleChange} states={ {author, wif, permlink, magnetLink} }/>
            </Animated>
      </section>
      <section>
      <img className="pure-img" src={images.last}/>
        <div className="skewed-down-right"></div>
      </section>
        <button className='btn'>Login</button>
        <Ribbon size='100' />
    </div>
    )
  }
}

function write ( e, author, wif, permlink, magnetLink ) {
  let title = 'steemsites'
  let body = 'testing'
  let json_metadata = {
    magnetLink,
    app: 'steemsites'
  }
  const jsonMetadata = JSON.stringify(json_metadata)
  steem.broadcast.comment(wif, 'garox', 'aprende-a-programar-or-web-mobile-server-y-desktop', author, permlink, title, body, jsonMetadata, function(err, result) {
    if (err) throw err
    log(result)
  })
  e.preventDefault()
}