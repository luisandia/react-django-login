import React, { Component } from 'react'
import { withAlert } from 'react-alert'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

class Alerts extends Component {

  componentDidUpdate(PrevProps) {

    const { error, alert, message, detail } = this.props;
    if (error !== PrevProps.error) {
      if (error.msg.name) alert.error(`Name ${error.msg.name}`)
      if (error.msg.email) alert.error(`email ${error.msg.email}`)
      if (error.msg.message) alert.error(`message ${error.msg.message}`)
    }

    if (message !== PrevProps.message) {
      if (message.deleteLead) alert.success(message.deleteLead);
      if (message.addLead) alert.success(message.addLead);
    }
    if (detail !== PrevProps.detail) {
      alert.error(`Name ${error.msg.detail}`)
    }
  }
  render() {
    return (
      <>

      </>
    )
  }
}

Alerts.propTypes = {
  error: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages
})

export default connect(mapStateToProps)(withAlert()(Alerts));
