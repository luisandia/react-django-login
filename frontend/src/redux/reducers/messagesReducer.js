import { CREATE_MESSAGE } from "../types"

const initialState = {
  msg: "",
  status: ""
}

export default (state = initialState, { type, payload }) => {
  console.log(payload)
  switch (type) {
    case CREATE_MESSAGE:
      return { ...payload };
    default:
      return state
  }
}
