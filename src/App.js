import React, { Component } from 'react'
import steem from 'steem'
import PeerWeb from 'peerweb'

import './main.css'

const { log, info } = console

const peerweb = new PeerWeb(true)
//@garox/aprende-a-programar-or-web-mobile-server-y-desktop#@garox/re-garox-aprende-a-programar-or-web-mobile-server-y-desktop-20171222t213647532z
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    steem.api.getAccounts(['ned', 'dan'], log) // crazy af
    steem.api.getContent('garox', 're-garox-aprende-a-programar-or-web-mobile-server-y-desktop-20171222t213647532z', function(err, result) {
      console.log(err);
      info(JSON.parse(result.json_metadata))
    })
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    peerweb.render(this.state.value)
    event.preventDefault()
  }
  render() {
    return (
      <div className='App'>
        <div className="row"/>
        <div className="row">
          <div id="inner">
            <h1>SteemSites</h1>
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
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
