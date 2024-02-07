// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  firstNameState = () => {
    const {firstName} = this.state
    if (firstName) {
      this.setState(() => ({firstName: false}))
    } else {
      this.setState(() => ({firstName: true}))
    }
  }

  lastNameState = () => {
    const {lastName} = this.state
    if (lastName) {
      this.setState(() => ({lastName: false}))
    } else {
      this.setState(() => ({lastName: true}))
    }
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="main">
        <h1 className="h1">Show/Hide</h1>
        <div className="content">
          <div className="buttonContainer1">
            {
              // eslint-disable-next-line
              <button className="button" onClick={this.firstNameState}>
                Show/Hide Firstname
              </button>
            }
            {firstName ? <p className="p1">Joe</p> : null}
          </div>

          <div className="buttonContainer2">
            {
              // eslint-disable-next-line
              <button className="button" onClick={this.lastNameState}>
                Show/Hide Lastname
              </button>
            }
            {lastName ? <p className="p1">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
