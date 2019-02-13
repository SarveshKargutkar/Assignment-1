import React from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Login from './login'
class appBar extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    console.log("here")
  }
  render() {
    return (
      <div>
        <AppBar position="relative">
          <Toolbar color="black" >
            <IconButton color="inherit" onClick={this.handleClick} >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" >
              To-dos
          </Typography>
          </Toolbar>
        </AppBar>

      </div>
    )
  }
}
export default appBar