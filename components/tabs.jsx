import React from 'react'

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
class tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value:0
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event, value) {
    this.setState({ value :value});
  }
  render() {


    return (
      <div>
        <Tabs value={this.state.value} onChange={this.handleChange} variant="fullWidth" textColor="inherit"
         indicatorColor="primary" centered>
          <Tab label="My To-do" />
          <Tab label="Watch To-do" />
          <Tab label="Completed" />
        </Tabs>

      </div>
    )
  }
}
export default tabs