import React from 'react'

const Publish = ({write, handleChange, states}) => {
    let { author, wif, permlink, magnetLink } = states
    return (
        <form className="pure-form pure-form-aligned" onSubmit={e => write(e, author, wif, permlink, magnetLink)}>
            <div className="pure-u-1">
                <input type='text' placeholder='author' value={author} onChange={e => handleChange(e, 'author')} />
                <input type='text' placeholder='wif' value={wif} onChange={e => handleChange(e, 'wif')} />
            </div>
            <div className="pure-u-1">
                <input type='text' placeholder='permlink' value={permlink} onChange={e => handleChange(e, 'permlink')} />
                <input type='text' placeholder='magnet link' value={magnetLink} onChange={e => handleChange(e, 'magnetLink')} />
                <button type="submit" className="pure-button pure-button-primary">Publish</button>
            </div>
        </form>
    )
}
   
export default Publish