import React, { PropTypes } from 'react'
// import Header from './common/Header'
import {connect} from 'react-redux'

class Layout extends React.Component {
  render () {
    // <Header
    // loading={this.props.loading}
    // />
    return (
      <div className="container-fluid">
        {this.props.children}
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  // loading: PropTypes.bool.isRequired
}

// function mapStateToProps (state, ownProps) {
//   return {
//     loading: state.ajaxCallsInProgress > 0
//   }
// }

// export default connect(mapStateToProps)(Layout)
export default Layout
