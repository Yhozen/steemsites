import React, { Component } from 'react'
import steem from 'steem'

const { log, info } = console
//@garox/aprende-a-programar-or-web-mobile-server-y-desktop#@garox/re-garox-aprende-a-programar-or-web-mobile-server-y-desktop-20171222t213647532z
export default class App extends Component {
  componentDidMount() {
    steem.api.getAccounts(['ned', 'dan'], log) //(err, result) => log(err, result) )
    steem.api.getContent('garox', 're-garox-aprende-a-programar-or-web-mobile-server-y-desktop-20171222t213647532z', function(err, result) {
      console.log(err);
      info(JSON.parse(result.json_metadata))
    });
  }
  render() {
    return (
      <div className='App'>
        <div className="row"/>
        <div className="row">
          <div id="inner">
            <h1>SteemSites</h1>
            <p>Enjoy!</p>
            <p>Enjoy!</p>
          </div>
        </div>
        <div className="row" >
        <button className="btn">Login</button>
        </div>
    </div>
    );
  }
}
