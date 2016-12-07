import React from 'react'
import {Link} from 'react-router'
// import Helmet from "react-helmet"

class HomePage extends React.Component {
  render () {
    // <Helmet
    // title="Starter kit | Home"
    // />
    return (
      <div className="jumbotron">
        <h1>Courses Administration</h1>
        <p>React, Redux, and React Router</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    )
  }
}

export default HomePage
