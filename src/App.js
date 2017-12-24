import React, { Component } from 'react'
import steem from 'steem'
import PeerWeb from 'peerweb'

const { log, info } = console

//@garox/aprende-a-programar-or-web-mobile-server-y-desktop#@garox/re-garox-aprende-a-programar-or-web-mobile-server-y-desktop-20171222t213647532z
export default class App extends Component {
  componentDidMount() {
    steem.api.getAccounts(['ned', 'dan'], log) // crazy af
    steem.api.getContent('garox', 're-garox-aprende-a-programar-or-web-mobile-server-y-desktop-20171222t213647532z', function(err, result) {
      console.log(err);
      info(JSON.parse(result.json_metadata))
    })
    const own = new PeerWeb(true)
    own.render('magnet:?xt=urn:btih:150a6d99e26aa722531c7cd5626631bdedf277bd&dn=page&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com')
  }
  render() {
    return (
      <div className='App'>
        <div className="row"/>
        <div className="row">
          <div id="inner">
            <h1>SteemSites</h1>
            <p>Enjoy!</p>
            <p>Enjoy the torrent!</p>
          </div>
        </div>
        <div className="row" >
        <button className="btn">Login</button>
        </div>
    </div>
    );
  }
}
