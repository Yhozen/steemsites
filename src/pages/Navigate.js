import React from 'react'

import { goto, Animated, i18next } from '../utilities'
import { icon } from '../images'
import '../utilities/icon.css'

const Navigate = ({ handleChange, weblink }) => (
    <section id='sec2'>
        <Animated animation='fade'> 
            <img src={icon} className='icon' alt='logo'/>
        </Animated>
        <Animated>
            <h1>STEEMSITES</h1>
            <h2>{i18next.t('navigateSub')}</h2>
        </Animated >
        <Animated animation='slide-right' offset='300'>
            <p> {i18next.t('navigateText')} </p>
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