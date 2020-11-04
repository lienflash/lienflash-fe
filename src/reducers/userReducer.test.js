import userReducer from './userReducer'

describe('User Reducer', () => {
  it('should return the initial state', () => {
    const expected = {};
    const result = userReducer(undefined, {});

    expect(result).toEqual(expected)
  });
  
  it('should return the correct state if the action is SET_USER', () => {
    const initialState = {};
    const action = {
      type: 'SET_USER',
      userInfo: { name: 'Taryn', email: 'taryn@gmail.com'}
    }

    const newState = {
      name: 'Taryn',
      email: 'taryn@gmail.com'
    }

    const result = userReducer(initialState, action);

    expect(result).toEqual(newState)
  });

  it('should return the correct state if the action is LOGOUT_USER', () => {
    const initialState = {
      name: 'Taryn',
      email: 'taryn@gmail.com'
    }
    const action = {type:'LOGOUT_USER'};

    const newState = {};

    const result = userReducer(initialState, action);

    expect(result).toEqual(newState)
  });
})
