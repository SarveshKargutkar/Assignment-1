import React from 'react'
import { IconButton, TextField } from '@material-ui/core'
class login extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    console.log("successful")
  }
  render() {
    return (
      <div 
      style={{
        background: "red",
      }}>
        {/* <form>
          <label >
            email:      < input type="text"
               onChange={(event) => this.handleChange(event, "username")}
            /> </label>
          <br />
          <label >
            Password: < input type="text"
             onChange={(event) => this.handleChange(event, "password")}
            /> </label>
        </form> */}
        <TextField
          label="email-id"
          style={{
            position: "absolute",
            width: 300,
            height: 56,
            left: 30,
            top: 216,
            background: "#23234F",
            color:"red"
          }}
          placeholder="Enter email-id"


        />
        <TextField
          label="Password"
          style={{
            position: "absolute",
            width: 300,
            height: 56,
            left: 30,
            top: 315,
            background: "#23234F",
          }}
          placeholder="Password"
        />
        <br />
        <IconButton onClick={this.handleClick}
          style={{
            position: "absolute",
            width: 79,
            height: 28,
            left: 140,
            top: 411,
            color: "red"
          }}
          
        >
          register
            </IconButton > 

      </div >
    )
  }
}
export default login