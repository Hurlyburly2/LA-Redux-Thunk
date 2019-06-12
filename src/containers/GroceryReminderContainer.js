import React, { Component } from 'react'
import { connect } from 'react-redux'

class GroceryReminderContainer extends Component {
  constructor(props) {
    super(props)

    this.reminderClick = this.reminderClick.bind(this)
  }

  reminderClick() {
    // the method that will start the timer and update state accordingly
  }

  render() {
    let reminderStatus
    // Show that the timer is running once the reminder button has been clicked
    if (this.props.isRunning) {
      reminderStatus = <img src="https://s3.amazonaws.com/horizon-production/images/redux/loading-icon.gif" alt="loading-icon" height="42" width="42"></img>
    }
    // When state has been updated correctly, will give an alert to the user.
    if (this.props.sendAlert) {
      alert("Don't forget to get some kale!")
    }

    return(
      <div id="reminder-group">
        <div>
          {reminderStatus}
        </div>

        <button onClick={this.reminderClick}>
          Set Reminder for Kale
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // we'll need to listen for the timer completing, so that we can alert the user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // the action creator we use in `reminderClick()` will need to be defined here.
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryReminderContainer)
