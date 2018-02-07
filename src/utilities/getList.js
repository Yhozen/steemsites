import React from 'react'
import { peerweb } from './peerweb'

export default function getList (sites) {
    if (!sites) return (<li>No site discover yet</li>)
    let listOfSites = []
    for (let name of Object.keys(sites)) {
        listOfSites.push(<li onClick={() => peerweb.render(sites[name], name)}>{name.toLocaleUpperCase()}</li>)
    }
    return listOfSites
}