import React from 'react'

import { goto } from '../utilities'

const Navigate = ({ notify, handleChange, weblink }) => (
    <form className="pure-form" onSubmit={e => goto(e, weblink, notify)}>
        <div className="pure-u-1">
            <input type='text' placeholder='write here your weblink to start' value={weblink} onChange={e => handleChange(e, 'weblink')} />
            <button type="submit" className="pure-button pure-button-primary">Go!</button>
        </div>
    </form>
)
   
export default Navigate
