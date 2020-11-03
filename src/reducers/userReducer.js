const userReducer = (state={}, action) => {
  switch(action.type) {
    case 'SET_USER':
      return action.userInfo;
    default:
      return state;
  }
}

export default userReducer;
