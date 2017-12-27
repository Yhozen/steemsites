import React, { Component } from 'react'
import steem from 'steem'
import PeerWeb from 'peerweb'
import $ from 'jquery'

import Publish from './pages/Publish'
import Navigate from './pages/Navigate'

import './pure/forms.css'
import './pure/buttons-min.css'
import 'normalize.css'
import './main.css'
import { validateAccountName } from 'steem/lib/utils'; // When was this added?

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
      weblink: '',
      page: null
    }
    this.changePage = this.changePage.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.goto = this.goto.bind(this)
  }
  componentDidMount () {
  }

  handleChange (event, value) {
    let toChange = {}
    toChange[value] = event.target.value
    this.setState(toChange)
  }

  goto (e) {
    const { weblink } = this.state
    const parts = weblink.split('/')
    steem.api.getContent(parts[0], parts[1], function(err, result) {
      if (err) cb(err)
      let { magnetLink } = JSON.parse(result.json_metadata)
      log(magnetLink)
      peerweb.render(magnetLink)
    })
    e.preventDefault()
  }

  changePage (n) {
    let { author, wif, permlink, magnetLink, weblink } = this.state
    const { goto, handleChange, setState } = this
    if (n == 1) {
      setState({page: <Navigate goto={goto} handleChange={handleChange} weblink={weblink}/> })
    } else if (n == 2) {
      setState({page:  <Publish write={write} handleChange={handleChange} states={ {author, wif, permlink, magnetLink} }/>})
    } else {
      setState({page: <Navigate goto={goto} handleChange={handleChange} weblink={weblink}/> })
    }
  }

  render () {
    let { author, wif, permlink, magnetLink, weblink, page } = this.state
    const { goto, handleChange, setState } = this
    return (
      <div className='App'>
          <div id="inner">
            <h1>SteemSites</h1>
            { page? page : <Navigate goto={goto} handleChange={handleChange} weblink={weblink}/> }
            <p>Enjoy the torrente!</p>
          </div>
        <button className="btn">Login</button>
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