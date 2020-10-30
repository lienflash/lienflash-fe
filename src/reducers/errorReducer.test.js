import errorReducer from './errorReducer.js';

describe('errorReducer', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = errorReducer(undefined, {});

    expect(result).toEqual(expected)
  });
  it('should return the correct state if action is SET_ERROR', () => {
    const initialState = '';
    const action = {
      type: 'SET_ERROR',
      errorMessage: 'This is an error message.'
    }

    const newState = 'This is an error message.'

    const result = errorReducer(initialState, action);

    expect(result).toEqual(newState)
  });
  it('should return the correct state if action is RESET_ERROR', () => {
    const initialState = 'This is an error message.';
    const action = {
      type: 'RESET_ERROR',
    }

    const newState = '';

    const result = errorReducer(initialState, action);

    expect(result).toEqual(newState)
  });
})
