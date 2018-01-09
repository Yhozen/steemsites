function createSite (e, { author, wif, permlink, magnetLink }, notify)  {
    const title = 'steemsites'
    const body = 'BEST SITE EVER'
    const json_metadata = {
      magnetLink,
      app: 'steemsites'
    }
    const authorLC = author.toLowerCase()
    const permlinkLC = permlink.toLowerCase()
    const jsonMetadata = JSON.stringify(json_metadata)
    const data = {jsonMetadata, body, title, wif, author: authorLC}
    shouldUpdate(authorLC, permlinkLC, data, notify)
    e.preventDefault()
}


export default createSite

async function shouldUpdate (author, permlink, data, notify) {
    try {
        const { steem } =  await import('./steem')
        const content = await getContent(author, permlink, steem)
        if (content) {
            const upPermlink =`update-${permlink}-${Date.now()}` 
            await comment( author, permlink, upPermlink, data, steem )
            notify.show('Updated', 'success')
        } else {
           await comment( '', 'steemsites',  permlink, data, steem )
           notify.show('Site added', 'success')
        }
    } catch (err) {
        notify.show(`Couldn't add: ${err}`, 'error')
    }
}

function getContent (author, permlink, steem) {
    return new Promise((resolve,reject) => {
        steem.api.getContent(author, permlink, (err, response) => {
            if (err) return reject(err) // eslint-disable-next-line
            if (response.id == 0) return resolve(false)
            resolve(response)
        })
    })
}
function comment ( namespace, permlink, upPermlink, data, steem) {
    const { title, body, jsonMetadata, wif, author } = data
    return new Promise((resolve,reject) => {
        steem.broadcast.comment(wif, namespace, permlink, author, upPermlink, title, body, jsonMetadata, (err, response) => {
            if (err) return reject(err)
            resolve(response)
        })
    })
}
