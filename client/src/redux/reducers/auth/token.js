import * as actions from "../../actions";

// create the reducer function
const tokenReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_TOKEN':
        return {
          ...state,
          token: action.payload,
        };
      default:
        return state;
    }
  };

  export default tokenReducer;