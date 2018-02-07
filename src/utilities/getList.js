import React from 'react'
import { peerweb } from './peerweb'
import i18next from './international'

export default function getList (sites) {
    if (!sites) return (<li>{i18next.t('discoverEmpty')}</li>)
    let listOfSites = []
    for (let name of Object.keys(sites)) {
        listOfSites.push(<li onClick={() => peerweb.render(sites[name], name)}>{name.toLocaleUpperCase()}</li>)
    }
    return listOfSites
}