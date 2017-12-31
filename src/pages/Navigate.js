import React from 'react'
import steem from 'steem'
import PeerWeb from 'peerweb'

const peerweb = new PeerWeb(true)

const Navigate = ({ notify, handleChange, weblink }) => (
    <form className="pure-form" onSubmit={e => goto(e, weblink, notify)}>
        <div className="pure-u-1">
            <input type='text' placeholder='write here your weblink to start' value={weblink} onChange={e => handleChange(e, 'weblink')} />
            <button type="submit" className="pure-button pure-button-primary">Go!</button>
        </div>
    </form>
)
   
export default Navigate

function goto (e, weblink, notify) {
    const [ author , permlink ] = weblink.toLowerCase().split('/')
    awaitMagnetLink(author, permlink, notify) 
    e.preventDefault()
}

async function awaitMagnetLink (author, permlink, notify) {
    try {
        const result = await getContent(author, permlink)
        let { magnetLink } = JSON.parse(result.json_metadata)
        if (magnetLink == undefined) throw 'No steemsites found'
        notify.show(`Starting to download '${result.title}'`)
        const replies = await getContentReplies(author, permlink)
        const newer =  getNewVersion(replies, author)
        if (newer) magnetLink = JSON.parse(newer.json_metadata).magnetLink
        peerweb.render(magnetLink)
    } catch(err) {
        notify.show(`Couldn't download: ${err}`)
    }
}

function getNewVersion (replies, author) {
   const toReturn = replies.filter(reply => {
       return reply.author == author // add a check for json_metadata later
   })
   return toReturn[toReturn.length -1]
}

function getContent (author, permlink) {
    return new Promise((resolve,reject) => {
        steem.api.getContent(author, permlink, (err, response) => {
            if (err) return reject(err)
            if (response.id == 0) return reject('Bad permlink')
            resolve(response)
        })
    })
}
function getContentReplies (author, permlink) {
    return new Promise((resolve,reject) => {
        steem.api.getContentReplies(author, permlink, (err, response) => {
            resolve(response)
        })
    })
 }
