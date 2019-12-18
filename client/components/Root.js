import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// import { connect } from 'react-redux'
import Navbar from './Navbar.js'
import LandingPage from './LandingPage'

class Root extends React.Component {
  constructor() {
    super()
  }

  // componentDidMount() {}

  render() {
    return (
      <BrowserRouter>
        <nav>
          <Navbar />
        </nav>
        <div>
          <Route path="/" component={LandingPage} />
        </div>
      </BrowserRouter>
    )
  }
}

export default Root

// const mapState = state => {
//   return {}
// }

// const mapDispatch = dispatch => {
//   return {}
// }

// export default connect(
//   mapState,
//   mapDispatch
// )(Root)
