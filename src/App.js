import React, { Component } from 'react'
import steem from 'steem'
import PeerWeb from 'peerweb'
import AOS from 'aos'

import Publish from './pages/Publish'
import Navigate from './pages/Navigate'
import Animated from './pages/Animated'

import './pure/forms.css'
import './pure/buttons.css'
import './main.css'
import 'aos/dist/aos.css'

import headerBG from './images/header.jpg' // Cannot load without this image because it's cool af

const images = {
  header: headerBG,
  middle: 'https://lh3.googleusercontent.com/H5b6w6IpPE4woX4pjo_rb8VPIjN3_ARXlHyCQFJGiI4KfIJ_DycJOLTLqNzSyww-I9OoZYv7bNMmiJpG3dITpOYA6tL98tAPk6k8vJPfZpwNICbtTbN8xglP3yONQl4vxOtHcQjEIN5BYfv94lFWuqPOmZ3Sub8fV0oC_J4N2Rup_oIFlqBANTfxIMHSWt8ch1475GnzV2mdDA_lyHpL5Nj8M4yrUdD9o8ifH7IqtnAjd5cvGjiAHAf4S8mJj318SMLKXe4j0oU684blM3Da69cx6tGpThhWh4zZkofNkwm0Hzq8gbG5C9j1yJAdQGghXy_gzaq4qQOiqYr0MesiMRPZ7TFZhyNcpDBzevpuSEgoQlv-DtLe54nv5Xk1ScDqNQ80eefq4v7PbnkCOHmgrNTNpWT_stEaonhuMlk4D2kg_YSPqQi9iO8KjFWhs5dkHUWmPKRDO6tBjNO9z7KehqHODbxC_LGH9HbX5ZEukFvTSP0u2HxahQ2qqAxanj6GwGhKi_4JcjzLECbcQ6f0SUoP61-Y2j2-SuvwD9vA6peoA7VKDna9FUNdlnl0Y4kYy9hY39TFsCJ9SRNqt_gq-6Jb5WlFglaziMgkR06o=w1440-h810-no',
  last: 'https://lh3.googleusercontent.com/OqOu0bvLI1veosvgmvZkHr6NkJXk2CW8tyh59VIuY7R0BaYn5z_rxQkpvfsAn27ABzOMPEtTN1GM5LuCFyZcnrEdColy-kze584HOzFrheoGcDJA42LEFxZgLq0hGT_LTum5hvgYEHpAYKg_To7YMnqraG9vO7rGAGUAAs0a4WwdPXGCohJq39tAW4dxfAQByzIq1Rj-xjyxE2ZC1sMfYWdHtLUEMpb9FD6h4xyw4U8RV1ZYxPDA6uz9s_uiLnEiOBtxzDnMqJfxxrYO9-4PhmiHNcz9pTsXm-7XUOHQSuKFogVNa7PsDrVDYogMBJpKL6oANVSq_-XPxyFVnei0Ju932dI_cUYhwfxOB3WN5IMgcbxLJUfdTqV3Vr7xAMD6qUwwdH5qUfJFHwy3OA15lFk8_Td5nhDraU0lrv4FcemdMVVNX18anKpTI5dsmsV92kLY3EDpZklQBWe6h2eUMbyvOdjEFFnftB5l_N54WUohHvJlu3eD78sc0ZmBQsZSa_i2tFVaT1Ya2UkCQvz_pUA5DBDLgw48H1taEBD2G8SvN0qUn8pKgGtTk9e19nYtO759KVYavaMiXPagmRkLRS_hjCZnTXlg4fX7V7p2=w1440-h810-no'
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
        <Animated animation='fade-zoom-in' duration='600' offset='400'>
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