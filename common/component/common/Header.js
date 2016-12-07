import React, {PropTypes} from 'react'
import {Link, IndexLink} from 'react-router'
import LoadingDots from './LoadingDots'
import styles from './Header.scss'

const Header = ({loading}) => {
  return (
    <nav className="nav">
      <IndexLink to="/" className={styles.nav_link} activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/courses" className={styles.nav_link} activeClassName="active">Courses</Link>
      {" | "}
      <Link to="/about" className={styles.nav_link} activeClassName="active">About</Link>
      {loading && <LoadingDots interval={100} dots={20} />}
    </nav>
  )
}

Header.propTypes = {
  loading: PropTypes.bool.isRequired
}

export default Header
