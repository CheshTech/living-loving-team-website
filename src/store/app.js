const initialState = {
  listings: {},
}

const ADD_LISTINGS = "ADD_LISTINGS"
export const addListings = data => ({ type: ADD_LISTINGS, data })

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_LISTINGS:
      return { ...state, listings: action.data }
    default:
      return state
  }
}
