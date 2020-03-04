import axios from 'axios';
import { GET_LEADS, DELETE_LEAD, ADD_LEAD} from '../types';
import { createMessage, returnErrors } from './messagesAction';

export const getLeads = () => (dispatch) => {

  axios.get('/api/leads/')
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      })
    })
    .catch(err => console.error(err));
}

export const deleteLead = (id) => (dispatch) => {

  axios.delete(`/api/leads/${id}/`)
    .then(res => {
      dispatch(createMessage({ deleteLead: "Lead Deleted" }))
      dispatch({
        type: DELETE_LEAD,
        payload: id
      })
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}
export const addLead = (post) => (dispatch) => {

  axios.post(`/api/leads/`, post)
    .then(res => {
      dispatch(createMessage({ addLead: "Lead Added" }))
      dispatch({
        type: ADD_LEAD,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
    });
}

