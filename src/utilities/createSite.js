import steem from 'steem'

function steemCallback (err, result) {
    if (err) throw err
    log(result)
}

const createSite = (e, author, wif, permlink, magnetLink) => {
    let title = 'steemsites'
    let body = 'testing'
    let json_metadata = {
      magnetLink,
      app: 'steemsites'
    }
    const jsonMetadata = JSON.stringify(json_metadata)
    steem.broadcast.comment(wif, 'garox', 'aprende-a-programar-or-web-mobile-server-y-desktop', author, permlink, title, body, jsonMetadata, steemCallback)
    e.preventDefault()
}

export default createSite