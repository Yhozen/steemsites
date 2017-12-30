import React from 'react'
import steem from 'steem'

const Navigate = ({ notify, handleChange, weblink, peerweb }) => (
    <form className="pure-form" onSubmit={e => goto(e, weblink, peerweb, notify)}>
        <div className="pure-u-1">
            <input type='text' placeholder='write here your weblink to start' value={weblink} onChange={e => handleChange(e, 'weblink')} />
            <button type="submit" className="pure-button pure-button-primary">Go!</button>
        </div>
    </form>
)
   
export default Navigate

function goto (e, weblink, peerweb, notify) {
    const [ author , permlink ] = weblink.toLowerCase().split('/')
    steem.api.getContent(author, permlink, function(err, result) {
        if (err) notify.show(`Couldn't download: ${err}`)
        const { magnetLink } = JSON.parse(result.json_metadata)
        notify.show(`Starting to download '${result.title}'`)
        peerweb.render(magnetLink)
    })
    e.preventDefault()
}