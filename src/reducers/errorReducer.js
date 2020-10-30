const errorReducer = (state='', action) => {
  switch(action.type) {
    case 'SET_ERROR':
      return action.errorMessage;
    case 'RESET_ERROR':
      return '';
    default:
      return state
  }
}

export default errorReducer;
