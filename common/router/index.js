import React from 'react' // eslint-disable-line
import { Route, IndexRoute } from 'react-router'
import Layout from '../component/Layout'
import HomePage from '../component/home/HomePage'
// import AboutPage from '../component/about/AboutPage'
// import CoursesPage from '../component/course/CoursesPage'
// import ManageCoursePage from '../component/course/CourseForm.container' // eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage} />
  </Route>
)

/*<Route path="courses" component={CoursesPage} />
<Route path="course" component={ManageCoursePage} />
<Route path="course/:id" component={ManageCoursePage} />
<Route path="about" component={AboutPage} />*/
