import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addLead } from '../../redux/actions/leadsAction';

export class Form extends Component {

  state = {
    name: "",
    email: "",
    message: ""
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    this.props.addLead(lead);
  }

  componentDidUpdate(PrevProps) {
    const { message } = this.props;
    if (message !== PrevProps.message) {
      if (message.addLead) {
        this.setState({
          name: "",
          email: "",
          message: ""
        })
      }
    }
  }

  render() {
    return (
      <div className="card card-body mt-4 mb-4">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control"
              name="name"
              id="name"
              onChange={this.onChange}
              value={this.state.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" className="form-control"
              name="email"
              id="email"
              onChange={this.onChange}
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <input type="text" className="form-control"
              name="message"
              id="message"
              onChange={this.onChange}
              value={this.state.message}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  message: state.messages
})


export default connect(mapStateToProps, { addLead })(Form)
