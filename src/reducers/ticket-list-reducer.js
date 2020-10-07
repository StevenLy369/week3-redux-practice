export default (state = {}, action) => {

    
    switch (action.type) {
   
    case 'DELETE_TICKET':
      const newState = { ...state };
      // delete newState[id];
      return newState;
    default:
      return state;
    }
  };