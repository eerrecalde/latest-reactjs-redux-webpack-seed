webpackJsonp([2,0],{0:function(e,t,u){e.exports=u(314)},73:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.LOAD_COURSES_SUCCESS="LOAD_COURSES_SUCCESS",t.LOAD_AUTHORS_SUCCESS="LOAD_AUTHORS_SUCCESS",t.CREATE_COURSE_SUCCESS="CREATE_COURSE_SUCCESS",t.UPDATE_COURSE_SUCCESS="UPDATE_COURSE_SUCCESS",t.BEGIN_AJAX_CALL="BEGIN_AJAX_CALL",t.AJAX_CALL_ERROR="AJAX_CALL_ERROR"},133:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={authors:[],courses:[],ajaxCallsInProgress:0}},205:function(e,t,u){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u]);return t.default=e,t}function a(){return{type:l.BEGIN_AJAX_CALL}}function o(){return{type:l.AJAX_CALL_ERROR}}Object.defineProperty(t,"__esModule",{value:!0}),t.beginAjaxCall=a,t.ajaxCallError=o;var n=u(73),l=r(n)},206:function(e,t,u){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u]);return t.default=e,t}function o(e){return{type:c.LOAD_COURSES_SUCCESS,courses:e}}function n(e){return{type:c.CREATE_COURSE_SUCCESS,course:e}}function l(e){return{type:c.UPDATE_COURSE_SUCCESS,course:e}}function i(){return function(e){return e((0,h.beginAjaxCall)()),v.default.getAllCourses().then(function(t){e(o(t))}).catch(function(e){throw e})}}function s(e){return function(t,u){return t((0,h.beginAjaxCall)()),v.default.saveCourse(e).then(function(u){t(e.id?l(u):n(u))}).catch(function(e){throw t((0,h.ajaxCallError)(e)),e})}}Object.defineProperty(t,"__esModule",{value:!0}),t.loadCoursesSucess=o,t.createCourseSuccess=n,t.updateCourseSuccess=l,t.loadCourses=i,t.saveCourse=s;var d=u(73),c=a(d),f=u(318),v=r(f),h=u(205)},207:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=1e3},314:function(e,t,u){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=u(18),o=r(a);u(338);var n=u(4),l=(r(n),u(600)),i=(u(97),u(264)),s=r(i),d=u(70),c=u(273),f=u(337),v=r(f),h=u(315),p=r(h),_=u(335),C=r(_),m=window.__PRELOADED_STATE__,y=document.getElementById("app"),g=(0,d.useRouterHistory)(s.default)({basename:""}),S=(0,v.default)(m,g),b=(0,c.syncHistoryWithStore)(g,S,{selectLocationState:function(e){return e.router}});(0,l.render)((0,o.default)(p.default,{store:S,routes:C.default,history:b}),y)},315:function(e,t,u){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=e.history,u=e.routes,r=e.store;return(0,n.default)(s.Provider,{store:r},void 0,(0,n.default)("div",{style:{height:"100%"}},void 0,(0,n.default)(i.Router,{history:t,children:u})))}Object.defineProperty(t,"__esModule",{value:!0});var o=u(18),n=r(o),l=u(4),i=(r(l),u(70)),s=u(97);t.default=a},316:function(e,t,u){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u]);return t.default=e,t}function o(e){return{type:i.LOAD_AUTHORS_SUCCESS,authors:e}}function n(){return function(e){return e((0,c.beginAjaxCall)()),d.default.getAllAuthors().then(function(t){e(o(t))}).catch(function(e){throw e})}}Object.defineProperty(t,"__esModule",{value:!0}),t.loadAuthorsSucess=o,t.loadAuthors=n;var l=u(73),i=a(l),s=u(317),d=r(s),c=u(205)},317:function(e,t,u){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=u(104),o=r(a),n=u(208),l=r(n),i=u(87),s=r(i),d=u(88),c=r(d),f=u(207),v=r(f),h=[{id:"cory-house",firstName:"Cory",lastName:"House"},{id:"scott-allen",firstName:"Scott",lastName:"Allen"},{id:"dan-wahlin",firstName:"Dan",lastName:"Wahlin"}],p=function(e){return e.firstName.toLowerCase()+"-"+e.lastName.toLowerCase()},_=function(){function e(){(0,s.default)(this,e)}return(0,c.default)(e,null,[{key:"getAllAuthors",value:function(){return new l.default(function(e,t){setTimeout(function(){e((0,o.default)([],h))},v.default)})}},{key:"saveAuthor",value:function(e){return new l.default(function(t,u){setTimeout(function(){var r=3;if(e.firstName.length<r&&u("First Name must be at least "+r+" characters."),e.lastName.length<r&&u("Last Name must be at least "+r+" characters."),e.id){var a=h.findIndex(function(t){return t.id===e.id});h.splice(a,1,e)}else e.id=p(e),h.push(e);t((0,o.default)({},e))},v.default)})}},{key:"deleteAuthor",value:function(e){return new l.default(function(t,u){setTimeout(function(){var u=h.findIndex(function(t){t.authorId===e});h.splice(u,1),t()},v.default)})}}]),e}();t.default=_},318:function(e,t,u){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,u){return e.replace(new RegExp(t,"g"),u)}Object.defineProperty(t,"__esModule",{value:!0});var o=u(104),n=r(o),l=u(208),i=r(l),s=u(87),d=r(s),c=u(88),f=r(c),v=u(207),h=r(v),p=[{id:"react-flux-building-applications",title:"Building Applications in React and Flux",watchHref:"http:// www.pluralsight.com/courses/react-flux-building-applications",authorId:"cory-house",length:"5:08",category:"JavaScript"},{id:"clean-code",title:"Clean Code: Writing Code for Humans",watchHref:"http:// www.pluralsight.com/courses/writing-clean-code-humans",authorId:"cory-house",length:"3:10",category:"Software Practices"},{id:"architecture",title:"Architecting Applications for the Real World",watchHref:"http:// www.pluralsight.com/courses/architecting-applications-dotnet",authorId:"cory-house",length:"2:52",category:"Software Architecture"},{id:"career-reboot-for-developer-mind",title:"Becoming an Outlier: Reprogramming the Developer Mind",watchHref:"http:// www.pluralsight.com/courses/career-reboot-for-developer-mind",authorId:"cory-house",length:"2:30",category:"Career"},{id:"web-components-shadow-dom",title:"Web Component Fundamentals",watchHref:"http:// www.pluralsight.com/courses/web-components-shadow-dom",authorId:"cory-house",length:"5:10",category:"HTML5"}],_=function(e){return a(e.title," ","-")},C=function(){function e(){(0,d.default)(this,e)}return(0,f.default)(e,null,[{key:"getAllCourses",value:function(){return new i.default(function(e,t){setTimeout(function(){e((0,n.default)([],p))},h.default)})}},{key:"saveCourse",value:function(e){return e=(0,n.default)({},e),new i.default(function(t,u){setTimeout(function(){var r=1;if(e.title.length<r&&u("Title must be at least "+r+" characters."),e.id){var a=p.findIndex(function(t){return t.id===e.id});p.splice(a,1,e)}else e.id=_(e),e.watchHref="http:// www.pluralsight.com/courses/"+e.id,p.push(e);t(e)},h.default)})}},{key:"deleteCourse",value:function(e){return new i.default(function(t,u){setTimeout(function(){var u=p.findIndex(function(t){t.courseId===e});p.splice(u,1),t()},h.default)})}}]),e}();t.default=C},319:function(e,t,u){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){return(0,l.default)("div",{className:"container-fluid"},void 0,(0,l.default)(d.default,{loading:e.loading}),e.children)}function o(e,t){return{loading:e.ajaxCallsInProgress>0}}Object.defineProperty(t,"__esModule",{value:!0});var n=u(18),l=r(n),i=u(4),s=(r(i),u(321)),d=r(s),c=u(97);t.default=(0,c.connect)(o)(a)},320:function(e,t,u){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){return d}Object.defineProperty(t,"__esModule",{value:!0});var o=u(18),n=r(o),l=u(4),i=(r(l),u(124)),s=r(i),d=(0,n.default)("div",{},void 0,(0,n.default)(s.default,{title:"Starter kit | About"}),(0,n.default)("h1",{},void 0,"About"),(0,n.default)("p",{},void 0,"This is app uses React, Redux, and React Redux."));t.default=a},321:function(e,t,u){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=u(18),o=r(a),n=u(4),l=(r(n),u(70)),i=u(322),s=r(i),d=(0,o.default)(l.IndexLink,{to:"/",activeClassName:"active"},void 0,"Home"),c=(0,o.default)(l.Link,{to:"/courses",activeClassName:"active"},void 0,"Courses"),f=(0,o.default)(l.Link,{to:"/about",activeClassName:"active"},void 0,"About"),v=(0,o.default)(s.default,{interval:100,dots:20}),h=function(e){var t=e.loading;return(0,o.default)("nav",{className:"nav"},void 0,d," | ",c," | ",f,t&&v)};t.default=h},322:function(e,t,u){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=u(134),o=r(a),n=u(87),l=r(n),i=u(88),s=r(i),d=u(136),c=r(d),f=u(135),v=r(f),h=u(4),p=r(h),_=function(e){function t(e,u){(0,l.default)(this,t);var r=(0,c.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e,u));return r.state={frame:1},r}return(0,v.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){e.setState({frame:e.state.frame+1})},this.props.interval)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){for(var e=this.state.frame%(this.props.dots+1),t="";e>0;)t+=".",e--;return p.default.createElement("span",this.props,t," ")}}]),t}(h.Component);_.defaultProps={interval:300,dots:3},t.default=_},323:function(e,t,u){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=u(18),o=r(a),n=u(4),l=(r(n),function(e){var t=e.name,u=e.label,r=e.onChange,a=e.defaultOption,n=e.value,l=e.error,i=e.options;return(0,o.default)("div",{className:"form-group"},void 0,(0,o.default)("label",{htmlFor:t},void 0,u),(0,o.default)("div",{className:"field"},void 0,(0,o.default)("select",{name:t,value:n,onChange:r,className:"form-control"},void 0,(0,o.default)("option",{value:""},void 0,a),i.map(function(e){return(0,o.default)("option",{value:e.value},e.value,e.text)})),l&&(0,o.default)("div",{className:"alert alert-danger"},void 0,l)))});t.default=l},324:function(e,t,u){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=u(18),o=r(a),n=u(4),l=(r(n),function(e){var t=e.name,u=e.label,r=e.onChange,a=e.placeholder,n=e.value,l=e.error,i="form-group";return l&&l.length&&(i+=" has-error"),(0,o.default)("div",{className:i},void 0,(0,o.default)("label",{htmlFor:t},void 0,u),(0,o.default)("div",{className:"field"},void 0,(0,o.default)("input",{type:"text",name:t,className:"form-control",placeholder:a,value:n,onChange:r}),l&&(0,o.default)("div",{className:"alert alert-danger"},void 0,l)))});t.default=l},325:function(e,t,u){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var u=e.filter(function(e){return e.id===t});return u.length?u[0]:null}function n(e,t){var u={id:"",watchHref:"",title:"",authorId:"",length:"",category:""},r=t.params.id;return r&&e.courses.length&&(u=o(e.courses,r)),{course:u,authors:(0,L.authorsFormattedForDropdown)(e)}}function l(e){var t=(0,c.default)({},R,M);return{actions:(0,O.bindActionCreators)(t,e)}}Object.defineProperty(t,"__esModule",{value:!0}),t.ManageCoursePage=void 0;var i=u(18),s=a(i),d=u(104),c=a(d),f=u(134),v=a(f),h=u(87),p=a(h),_=u(88),C=a(_),m=u(136),y=a(m),g=u(135),S=a(g),b=u(4),A=(a(b),u(97)),O=u(103),w=u(206),M=r(w),E=u(316),R=r(E),P=u(326),j=a(P),L=u(336),N=t.ManageCoursePage=function(e){function t(e,u){(0,p.default)(this,t);var r=(0,y.default)(this,(t.__proto__||(0,v.default)(t)).call(this,e,u));return r.state={course:(0,c.default)({},e.course),errors:{},saving:!1},r.updateCourseState=r.updateCourseState.bind(r),r.saveCourse=r.saveCourse.bind(r),r}return(0,S.default)(t,e),(0,C.default)(t,[{key:"componentDidMount",value:function(){this.props.authors.length||this.props.actions.loadAuthors()}},{key:"componentWillReceiveProps",value:function(e){this.props.course.id!==e.course.id&&this.setState({course:(0,c.default)({},e.course)})}},{key:"updateCourseState",value:function(e){var t=e.target.name,u=this.state.course;return u[t]=e.target.value,this.setState({course:u})}},{key:"courseFormIsValid",value:function(){var e=!0,t={};return this.state.course.title.length<5&&(t.title="Title must be at least 5 characters.",e=!1),this.setState({errors:t}),e}},{key:"saveCourse",value:function(e){var t=this;e.preventDefault(),this.courseFormIsValid()&&(this.setState({saving:!0}),this.props.actions.saveCourse(this.state.course).then(function(){return t.redirect("/courses")}).catch(function(e){t.setState({saving:!1})}))}},{key:"redirect",value:function(e){this.setState({saving:!1}),this.context.router.push(e)}},{key:"render",value:function(){return(0,s.default)(j.default,{allAuthors:this.props.authors,onChange:this.updateCourseState,onSave:this.saveCourse,course:this.state.course,errors:this.state.errors,saving:this.state.saving})}}]),t}(b.Component);N.contextTypes={router:b.PropTypes.object},N.fetchData=function(e){var t=e.store;return t.dispatch(M.loadCourses()),t.dispatch(R.loadAuthors())},t.default=(0,A.connect)(n,l)(N)},326:function(e,t,u){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=u(18),o=r(a),n=u(4),l=(r(n),u(324)),i=r(l),s=u(323),d=r(s),c=u(124),f=r(c),v=(0,o.default)(f.default,{title:"Starter kit | Course"}),h=(0,o.default)("h1",{},void 0,"Manage Course"),p=function(e){var t=e.course,u=e.allAuthors,r=e.onSave,a=e.onChange,n=e.saving,l=e.errors;return(0,o.default)("form",{},void 0,v,h,(0,o.default)(i.default,{name:"title",label:"Title",value:t.title,onChange:a,error:l.title}),(0,o.default)(d.default,{name:"authorId",label:"Author",value:t.authorId,defaultOption:u&&u.length?"Select Author":"Loading authors...",options:u,onChange:a,error:l.authorId}),(0,o.default)(i.default,{name:"category",label:"Category",value:t.category,onChange:a,error:l.category}),(0,o.default)(i.default,{name:"length",label:"length",value:t.length,onChange:a,error:l.length}),(0,o.default)("button",{disabled:n,className:"btn btn-primary",value:n?"Saving..":"Save",onClick:r},void 0,n?"Saving..":"Save"))};t.default=p},327:function(e,t,u){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=u(18),o=r(a),n=u(4),l=(r(n),u(328)),i=r(l),s=(0,o.default)("thead",{},void 0,(0,o.default)("tr",{},void 0,(0,o.default)("th",{},void 0," "),(0,o.default)("th",{},void 0,"Title"),(0,o.default)("th",{},void 0,"Author"),(0,o.default)("th",{},void 0,"Category"),(0,o.default)("th",{},void 0,"Length"))),d=function(e){var t=e.courses;return(0,o.default)("table",{className:"table"},void 0,s,(0,o.default)("tbody",{},void 0,t.map(function(e){return(0,o.default)(i.default,{course:e},e.id)})))};t.default=d},328:function(e,t,u){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=u(18),o=r(a),n=u(4),l=(r(n),u(70)),i=function(e){return(0,o.default)("tr",{className:"row"},void 0,(0,o.default)("td",{},void 0,(0,o.default)("a",{className:"row__link",href:e.course.watchHref,target:"_blank"},void 0,"Watch")),(0,o.default)("td",{},void 0,(0,o.default)(l.Link,{className:"row__link row__link--secondary",to:"/course/"+e.course.id},void 0,e.course.title)),(0,o.default)("td",{},void 0,e.course.authorId),(0,o.default)("td",{},void 0,e.course.category),(0,o.default)("td",{},void 0,e.course.length))};t.default=i},329:function(e,t,u){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return{courses:e.courses}}function n(e){return{actions:(0,b.bindActionCreators)(O,e)}}Object.defineProperty(t,"__esModule",{value:!0});var l=u(18),i=a(l),s=u(134),d=a(s),c=u(87),f=a(c),v=u(88),h=a(v),p=u(136),_=a(p),C=u(135),m=a(C),y=u(4),g=a(y),S=u(97),b=u(103),A=u(206),O=r(A),w=u(327),M=a(w),E=u(70),R=u(124),P=a(R),j=(0,i.default)(P.default,{title:"Starter kit | Courses"}),L=(0,i.default)("h1",{},void 0,"Courses"),N=(0,i.default)(E.Link,{to:"/course"},void 0,(0,i.default)("button",{className:"btn btn-primary"},void 0,"Add Course")),U=function(e){function t(e,u){(0,f.default)(this,t);var r=(0,_.default)(this,(t.__proto__||(0,d.default)(t)).call(this,e,u));return r.redirectToAddCoursePage=r.redirectToAddCoursePage.bind(r),r}return(0,m.default)(t,e),(0,h.default)(t,[{key:"componentDidMount",value:function(){this.props.courses.length||this.props.actions.loadCourses()}},{key:"redirectToAddCoursePage",value:function(){E.browserHistory.push("/course")}},{key:"courseRow",value:function(e,t){return(0,i.default)("div",{},t,e.title)}},{key:"render",value:function(){var e=this.props.courses;return(0,i.default)("div",{},void 0,j,L,N,(0,i.default)(M.default,{courses:e}))}}]),t}(g.default.Component);U.fetchData=function(e){var t=e.store;return t.dispatch(O.loadCourses())},t.default=(0,S.connect)(o,n)(U)},330:function(e,t,u){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){return c}Object.defineProperty(t,"__esModule",{value:!0});var o=u(18),n=r(o),l=u(4),i=(r(l),u(70)),s=u(124),d=r(s),c=(0,n.default)("div",{className:"jumbotron"},void 0,(0,n.default)(d.default,{title:"Starter kit | Home"}),(0,n.default)("h1",{},void 0,"Courses Administration"),(0,n.default)("p",{},void 0,"React, Redux, and React Router"),(0,n.default)(i.Link,{to:"about",className:"btn btn-primary btn-lg"},void 0,"Learn more"));t.default=a},331:function(e,t,u){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u]);return t.default=e,t}function o(e){return"_SUCCESS"===e.substring(e.length-8)}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.default.ajaxCallsInProgress,t=arguments[1];return t.type===i.BEGIN_AJAX_CALL?e+1:t.type===i.AJAX_CALL_ERROR||o(t.type)?e-1:e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var l=u(73),i=a(l),s=u(133),d=r(s)},332:function(e,t,u){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u]);return t.default=e,t}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.default.authors,t=arguments[1];switch(t.type){case l.LOAD_AUTHORS_SUCCESS:return t.authors;default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var n=u(73),l=a(n),i=u(133),s=r(i)},333:function(e,t,u){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v.default.courses,t=arguments[1];switch(t.type){case c.LOAD_COURSES_SUCCESS:return e.concat(t.courses);case c.CREATE_COURSE_SUCCESS:return[].concat((0,s.default)(e),[(0,l.default)({},t.course)]);case c.UPDATE_COURSE_SUCCESS:return[].concat((0,s.default)(e.filter(function(e){return e.id!==t.course.id})),[(0,l.default)({},t.course)]);default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var n=u(104),l=a(n),i=u(345),s=a(i);t.default=o;var d=u(73),c=r(d),f=u(133),v=a(f)},334:function(e,t,u){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=u(103),o=u(333),n=r(o),l=u(332),i=r(l),s=u(331),d=r(s),c=u(273),f=(0,a.combineReducers)({router:c.routerReducer,courses:n.default,authors:i.default,ajaxCallsInProgress:d.default});t.default=f},335:function(e,t,u){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=u(18),o=r(a),n=u(4),l=(r(n),u(70)),i=u(319),s=r(i),d=u(330),c=r(d),f=u(320),v=r(f),h=u(329),p=r(h),_=u(325),C=r(_);t.default=(0,o.default)(l.Route,{path:"/",component:s.default},void 0,(0,o.default)(l.IndexRoute,{component:c.default}),(0,o.default)(l.Route,{path:"courses",component:p.default}),(0,o.default)(l.Route,{path:"course",component:C.default}),(0,o.default)(l.Route,{path:"course/:id",component:C.default}),(0,o.default)(l.Route,{path:"about",component:v.default}))},336:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.authorsFormattedForDropdown=void 0;var r=u(688),a=function(e){return e.authors};t.authorsFormattedForDropdown=(0,r.createSelector)([a],function(e){return e.map(function(e){return{value:e.id,text:e.firstName+" "+e.lastName}})})},337:function(e,t,u){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=u(103),o=u(683),n=r(o),l=u(334),i=r(l),s=function(e){var t=(0,a.createStore)(i.default,e,(0,a.applyMiddleware)(n.default));return t};t.default=s}});
//# sourceMappingURL=main.14452e9257726340e87c.js.map