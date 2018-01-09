function goto (e, weblink, notify) {
    const [ author , permlink ] = weblink.toLowerCase().split('/')
    awaitMagnetLink(author, permlink, notify) 
    e.preventDefault()
}

async function awaitMagnetLink (author, permlink, notify) {
    try {
        const { steem } =  await import('./steem')
        const { result, replies } = await getInParallel(author, permlink, steem)
        let { magnetLink } = JSON.parse(result.json_metadata) // eslint-disable-next-line
        if (magnetLink == undefined) throw 'No steemsites found'
        notify.show(`Starting to download '${result.title}'`, 'success')
        const newer =  getNewVersion(replies, author)
        if (newer) magnetLink = JSON.parse(newer.json_metadata).magnetLink
        const  { peerweb } =  await import('./peerweb')
        peerweb.render(magnetLink)
    } catch(err) {
        notify.show(`Couldn't download: ${err}`, 'error')
    }
}

async function getInParallel (author, permlink, steem) {
    return {
        result: await getContent(author, permlink, steem),
        replies: await getContentReplies(author, permlink, steem)
    }
}

function getNewVersion (replies, author) {
   const toReturn = replies.filter(reply => {
       return reply.author === author // add a check for json_metadata later
   })
   return toReturn[toReturn.length -1]
}

function getContent (author, permlink, steem) {
    return new Promise((resolve,reject) => {
        steem.api.getContent(author, permlink, (err, response) => {
            if (err) return reject(err) // eslint-disable-next-line
            if (response.id == 0) return reject('Bad permlink')
            resolve(response)
        })
    })
}
function getContentReplies (author, permlink, steem) {
    return new Promise((resolve,reject) => {
        steem.api.getContentReplies(author, permlink, (err, response) => {
            resolve(response)
        })
    })
 }

 export default goto