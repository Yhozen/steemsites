import Loadable from 'react-loadable'
import React from 'react'

import './LoadApp.css'

const delays = [ 2, 3, 4,
                 1, 2, 3,
                 0, 1, 2, ]

const Loading = () => (
  <div className="load-container">
    <div className="sk-cube-grid">
      {delays.map(delay => <div className="sk-cube" key={Math.random()} style={{ animationDelay: `.${delay}s`}}/>)}
    </div>
  </div>
)

const LoadableComponent = Loadable({
  loader: () => import('../App'),
  loading: Loading,
})

export default class LoadApp extends React.Component {
  render () {
    return <LoadableComponent/>
  }
}