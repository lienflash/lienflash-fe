const userReducer = (state={}, action) => {
  switch(action.type) {
    case 'SET_USER':
      return action.userInfo;
    case 'LOGOUT_USER':
      return {};
    default:
      return state;
  }
}

export default userReducer;
