import React, { Component } from 'react'
import steem from 'steem'
import PeerWeb from 'peerweb'
import $ from 'jquery'

import './pure/forms.css'
import './pure/buttons-min.css'
import 'normalize.css'
import './main.css'
import { validateAccountName } from 'steem/lib/utils';

const { log, info } = console

const peerweb = new PeerWeb(true)

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      magnetLink: '',
      author: '',
      wif: '',
      permlink: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    steem.api.getAccounts(['ned', 'dan'], log) // crazy af
    steem.api.getContent('garox', 're-garox-aprende-a-programar-or-web-mobile-server-y-desktop-20171222t213647532z', function(err, result) {
      console.log(err);
      info(JSON.parse(result.json_metadata))
    })
  }

  handleChange(event, value) {
    let toChange = {}
    toChange[value] = event.target.value
    this.setState(toChange)
  }

  render() {
    let { author, wif, permlink, magnetLink } = this.state
    return (
      <div className='App'>
          <div id="inner">
            <h1>SteemSites</h1>
            <form className="pure-form" onSubmit={e => write(e, author, wif, permlink, magnetLink)}>
              <div className="pure-u-1">
                <input type='text' placeholder='author' value={author} onChange={e => this.handleChange(e, 'author')} />
                <input type='text' placeholder='wif' value={wif} onChange={e => this.handleChange(e, 'wif')} />
              </div>
              <div className="pure-u-1">
                <input type='text' placeholder='permlink' value={permlink} onChange={e => this.handleChange(e, 'permlink')} />
                <input type='text' placeholder='magnet link' value={magnetLink} onChange={e => this.handleChange(e, 'magnetLink')} />
                <button type="submit" className="pure-button pure-button-primary">Publish</button>
              </div>
            </form>
            <p>Enjoy the torrent!</p>
          </div>
        <button className="btn">Login</button>
    </div>
    );
  }
}

function write( event, author, wif, permlink, magnetLink ) {
  let title = 'steemsites'
  let body = 'testing'
  let json_metadata = {
    magnetLink,
    app: 'steemsites'
  }
  const jsonMetadata = JSON.stringify(json_metadata)
  steem.broadcast.comment(wif, 'garox', 'aprende-a-programar-or-web-mobile-server-y-desktop', author, permlink, title, body, jsonMetadata, function(err, result) {
    console.log(result)
  });
  event.preventDefault()
}