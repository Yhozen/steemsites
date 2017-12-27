import React from 'react'

const Navigate = ({goto, handleChange, weblink}) => (
    <form className="pure-form" onSubmit={e => goto(e)}>
        <div className="pure-u-1">
            <input type='text' placeholder='weblink' value={weblink} onChange={e => handleChange(e, 'weblink')} />
        </div>
        <div className="pure-u-1">
            <button type="submit" className="pure-button pure-button-primary">Go!</button>
        </div>
    </form>
)
   
export default Navigate;