import React from 'react'

import { goto, Animated } from '../utilities'
import { icon } from '../images'
import '../utilities/icon.css'

const Navigate = ({ handleChange, weblink }) => (
    <section id='sec2'>
        <img src={icon} className='icon' alt='logo'/>
        <Animated>
            <h1>STEEMSITES</h1>
            <h2>Decentralize the web.</h2>
        </Animated >
        <Animated animation='slide-right' offset='300'>
            <p> Steemsites is a new way to create, host and access to webpages.
            Powered by the Steem blockchain and WebTorrent now you can build websites that are totally decentralize and will be avaible as long as one person is sharing it.
            Thus now we can have neutral and uncensored websites thanks to the community. You can access to a web via a weblink, which is the author/nameofthepage (Just like a Github repository). Try a weblink below (for example "garox/init") </p>
        </Animated>
        <Animated animation='fade-zoom-in' duration='600' offset='350'>
            <form className="pure-form" onSubmit={e => goto(e, weblink)}>
                <div className="pure-u-1">
                    <input type='text' placeholder='write here your weblink to start' value={weblink} onChange={e => handleChange(e, 'weblink')} />
                    <button type="submit" className="pure-button pure-button-primary">Go!</button>
                </div>
            </form>
        </Animated>
    </section>
)
   
export default Navigate