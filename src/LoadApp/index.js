import Loadable from 'react-loadable'
import React from 'react'

import './LoadApp.css'

const Loading = () => (
  <div className="load-container">
    <div className="sk-cube-grid">
      <div className="sk-cube sk-cube1"></div>
      <div className="sk-cube sk-cube2"></div>
      <div className="sk-cube sk-cube3"></div>
      <div className="sk-cube sk-cube4"></div>
      <div className="sk-cube sk-cube5"></div>
      <div className="sk-cube sk-cube6"></div>
      <div className="sk-cube sk-cube7"></div>
      <div className="sk-cube sk-cube8"></div>
      <div className="sk-cube sk-cube9"></div>
    </div>
  </div>
)

const LoadableComponent = Loadable({
  loader: () => import('../App'),
  loading: Loading,
})

export default class LoadApp extends React.Component {
  render() {
    return <LoadableComponent/>
  }
}