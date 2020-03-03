import { GET_MESSAGES, CREATE_MESSAGE } from "../types"

const initialState = {
  msg: "",
  status: ""
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MESSAGES:
      return payload;
    case CREATE_MESSAGE:
      return { ...payload };
    default:
      return state
  }
}
