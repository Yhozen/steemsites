import React from 'react'

import { createSite, Animated, i18next, getList } from '../utilities'

const getDiscover = sites => {
    return (
        <div className="flex-1">
            <Animated offset='0'>
                <h1>{i18next.t('discoverTitle')}</h1>
                <div className='spacer' />
                <p>{i18next.t('discoverText')}</p>
            </Animated>
            <Animated offset='50'>
                <div id='list'>
                    <ul>
                        {getList(sites)}
                    </ul>
                </div>
            </Animated>
        </div>
    )
}

const Publish = ({ handleChange, states : { author, wif, permlink, files, pageName, sites } }) => {
    return (
    <section className='content-section' id='section-2'>
        <div className="flex-container">
        <div className="flex-1 unmobile">
            <Animated animation='slide-right' offset="0">
                <h1>{i18next.t('publishTitle')}</h1>
                <div className='spacer' />
                <p> {i18next.t('pPublishOne')} <a href="http://instant.io">instant</a> {i18next.t('pPublishTwo')}
                    (see <a href="https://webtorrent.io/desktop/" >WebTorrent Desktop</a> (recommended) or <a href="https://www.vuze.com" >Vuze</a>)  </p>
            </Animated>
            <Animated offset="50" animation='slide-right'>
                <form className="pure-form" onSubmit={e => createSite(e, { author, wif, permlink, files, pageName})}>
                    <div className="pure-u-1">
                        <input type='text' placeholder='author' value={author} onChange={e => handleChange(e, 'author')} />
                        <input type='text' placeholder='wif' value={wif} onChange={e => handleChange(e, 'wif')} />
                    </div>
                    <div className="pure-u-1">
                        <input type='text' placeholder='permlink' value={permlink} onChange={e => handleChange(e, 'permlink')} />
                        <input type='text' placeholder='name' value={pageName} onChange={e => handleChange(e, 'pageName')} />
                        <button type="submit" className="pure-button pure-button-primary">Publish</button>
                    </div>
                    <div> <p id="dropText">{i18next.t('dropPublishOne')} - {files.length} {i18next.t('dropPublishTwo')} </p>  </div>
                </form>
            </Animated>
        </div>
        {getDiscover(sites)}
        </div>
    </section>
    )
}
   
export default Publish

