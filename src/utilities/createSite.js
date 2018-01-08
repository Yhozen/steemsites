import steem from 'steem'

function createSite (e, author, wif, permlink, magnetLink, notify)  {
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
        const content = await getContent(author, permlink)
        const { title, body, jsonMetadata, wif, author } = data
        if (content) {
            const upPermlink =`update-${permlink}-${Date.now()}` 
            await comment(wif, author, permlink, upPermlink, data)
            notify.show('Updated', 'success')
        } else {
           await comment(wif, '', 'steemsites',  permlink, data)
           notify.show('Site added', 'success')
        }
    } catch (err) {
        notify.show(`Couldn't add: ${err}`, 'error')
    }
}

function getContent (author, permlink) {
    return new Promise((resolve,reject) => {
        steem.api.getContent(author, permlink, (err, response) => {
            if (err) return reject(err) // eslint-disable-next-line
            if (response.id == 0) return resolve(false)
            resolve(response)
        })
    })
}
function comment ( namespace, permlink, upPermlink, data) {
    const { title, body, jsonMetadata, wif, author } = data
    return new Promise((resolve,reject) => {
        steem.broadcast.comment(wif, namespace, permlink, author, upPermlink, title, body, jsonMetadata, (err, response) => {
            if (err) return reject(err)
            resolve(response)
        })
    })
}
