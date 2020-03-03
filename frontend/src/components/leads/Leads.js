import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../redux/actions/leadsAction';


export class Leads extends Component {


  componentDidMount() {
    this.props.getLeads();
  }

  render() {
    return (
      <div>
        {/* {JSON.stringify( this.props.leads )} */}
        <h2>Leads</h2>
        <table className="table table-scripted">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map(lead => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={this.props.deleteLead.bind(this, lead.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}


          </tbody>
        </table>
      </div>
    )
  }
}

Leads.propTypes = {
  leads: PropTypes.array.isRequired,
  getLeads: PropTypes.func.isRequired,
  deleteLead: PropTypes.func.isRequired
}

const mapStateToProps = ({ leads: { leads } }) => ({
  leads
})

const mapDispatchToProps = {
  getLeads,
  deleteLead
}

export default connect(mapStateToProps, mapDispatchToProps)(Leads)

