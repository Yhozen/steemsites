import steem from 'steem'

function steemCallback (err, result) {
    if (err) throw `update-${err}-${Date.now()}` 
    log(result, 'be humble')
}

function createSite (e, author, wif, permlink, magnetLink)  {
    let title = 'steemsites'
    let body = 'BEST SITE EVER'
    let json_metadata = {
      magnetLink,
      app: 'steemsites'
    }
    let authorLC = author.toLowerCase()
    let permlinkLC = permlink.toLowerCase()
    const jsonMetadata = JSON.stringify(json_metadata)
    const data = {jsonMetadata, body, title, wif}
    shouldUpdate(authorLC, permlinkLC, data)

    //steem.broadcast.comment(wif, 'garox', 'aprende-a-programar-or-web-mobile-server-y-desktop', author, permlink, title, body, jsonMetadata, steemCallback)
    e.preventDefault()
}


export default createSite

async function shouldUpdate (author, permlink, data) {
    const content = await getContent(author, permlink)
    const { title, body, jsonMetadata, wif } = data
    console.log('yet ehre')
    if (!(!content)) {
        const upPermlink =`update-${permlink}-${Date.now()}` 
        console.log('here')
        steem.broadcast.comment(wif, author, permlink, author, upPermlink, title, body, jsonMetadata, steemCallback)
    } else {
        steem.broadcast.comment(wif, '', 'steemsites', author, permlink, title, body, jsonMetadata, steemCallback)
    }
}

function getContent (author, permlink) {
    return new Promise((resolve,reject) => {
        steem.api.getContent(author, permlink, (err, response) => {
            if (err) return resolve(false)
            if (response.id == 0) return resolve(false)
            resolve(response)
        })
    })
}