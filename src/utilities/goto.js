import steem from 'steem'
import PeerWeb from 'peerweb'

const peerweb = new PeerWeb(true)

function goto (e, weblink, notify) {
    const [ author , permlink ] = weblink.toLowerCase().split('/')
    awaitMagnetLink(author, permlink, notify) 
    e.preventDefault()
}

async function awaitMagnetLink (author, permlink, notify) {
    try {
        const { result, replies } = await getInParallel(author, permlink)
        let { magnetLink } = JSON.parse(result.json_metadata)
        if (magnetLink == undefined) throw 'No steemsites found'
        notify.show(`Starting to download '${result.title}'`)
        const newer =  getNewVersion(replies, author)
        if (newer) magnetLink = JSON.parse(newer.json_metadata).magnetLink
        peerweb.render(magnetLink)
    } catch(err) {
        notify.show(`Couldn't download: ${err}`)
    }
}

async function getInParallel (author, permlink) {
    return {
        result: await getContent(author, permlink),
        replies: await getContentReplies(author, permlink)
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

 export default goto