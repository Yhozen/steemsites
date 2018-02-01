import React from 'react'

import { createSite, Animated } from '../utilities'

const Publish = ({ handleChange, states }) => {
    let { author, wif, permlink, files, pageName } = states
    return (
    <section id='sec2'>
        <Animated animation='slide-right' offset="0">
            <h1>Publish your own websites</h1>
            <div className='spacer' />
            <p> All you need is a steem account, the corresponding posting wif, a name and the folder with the content. Just drop the folder here to start fast. 
                Also can seed the page in <a href="http://instant.io">instant</a> or with some App that support torrent over WebRTC 
                (see <a href="https://webtorrent.io/desktop/" >WebTorrent Desktop</a> (recommended) or <a href="https://www.vuze.com" >Vuze</a>)  </p>
        </Animated>
        <Animated offset="0">
            <form className="pure-form pure-form-aligned" onSubmit={e => createSite(e, states)}>
                <div className="pure-u-1">
                    <input type='text' placeholder='author' value={author} onChange={e => handleChange(e, 'author')} />
                    <input type='text' placeholder='wif' value={wif} onChange={e => handleChange(e, 'wif')} />
                </div>
                <div className="pure-u-1">
                    <input type='text' placeholder='permlink' value={permlink} onChange={e => handleChange(e, 'permlink')} />
                    <input type='text' placeholder='name' value={pageName} onChange={e => handleChange(e, 'pageName')} />
                    <button type="submit" className="pure-button pure-button-primary">Publish</button>
                </div>
                <div> <p>Drop files anywhere - {files.length} files will be added </p>  </div>
            </form>
        </Animated>
    </section>
    )
}
   
export default Publish

