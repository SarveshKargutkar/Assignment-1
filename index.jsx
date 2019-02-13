import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route } from "react-router-dom";
import history from './history';
// import login from './Component/login'
// import group from './Component/group'
// import todo from './Component/todo'
// import store from './store'
// import { MenuIcon } from '@material-ui/icons'
// import AppBar from './components/appBar'
// import Tabs from './components/tabs'
import Login from './components/login'
class Index extends React.Component {
  render() {
    return (
      // <Provider store={store}>
          <Router history={history}>
              <div>
                  <Route exact path='/' component={Login}></Route>
              </div>
          </Router>
      // </Provider>
      // <div>
      //   <Login/>
      //   {/* <AppBar /> */}
      //   {/* <Tabs /> */}
      // </div>
    )
  }
}
ReactDOM.render(
  <Index />
  , document.getElementById('root'));