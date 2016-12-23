import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as courseActions from '../../action/courseActions'
import CourseList from './CourseList'
import {browserHistory, Link} from 'react-router'
import Helmet from "react-helmet"

class CoursesPage extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this)
  }

  componentDidMount () {
    if (!this.props.courses.length) {
      this.props.actions.loadCourses()
    }
  }

  redirectToAddCoursePage () {
    browserHistory.push('/course')
  }

  courseRow (course, index) {
    return <div key={index}>{course.title}</div>
  }

  render () {
    const {courses} = this.props
    return (
      <div>
        <Helmet
          title="Starter kit | Courses"
        />
        <h1>Courses</h1>
        <Link to="/course">
          <button
            className="btn btn-primary"
          >Add Course</button>
        </Link>
        <CourseList courses={courses} />
      </div>
    )
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

CoursesPage.fetchData = (obj) => {
  return obj.store.dispatch(courseActions.loadCourses())
}

CoursesPage.updateData = (obj) => {
  return obj.store.dispatch(courseActions.saveCourse(obj.params))
}

function mapStateToProps (state, ownProps) {
  return {
    courses: state.courses
  }
}

function mapDispatchToProp (dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(CoursesPage)
