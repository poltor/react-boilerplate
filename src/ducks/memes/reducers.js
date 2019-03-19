export const types = {
  MEMES_REQUEST: 'MEMES/MEMES_REQUEST',
  MEMES_SUCCESS: 'MEMES/MEMES_SUCCESS',
  MEMES_FAILURE: 'MEMES/MEMES_FAILURE',
  FETCH: 'MEMES/FETCH',
  RESET: 'MEMES/RESET',
};


export const initialState = {
  loading: false,
  error: false,
  memes: [],
};


export default (state = initialState, action) => {
  switch (action.type) {

    case types.MEMES_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        memes: [],
      };

    case types.MEMES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        memes: action.memes,
      };

    case types.MEMES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        memes: [],
      };

    case types.RESET:
      return { ...initialState };

    default:
      return state
  }
};


export const actions = {
  requestMemes: () => ({ type: types.MEMES_REQUEST }),
  successMemes: (memes) => ({ type: types.MEMES_SUCCESS, memes }),
  failureMemes: () => ({ type: types.MEMES_FAILURE }),
  fetchMemes: () => ({ type: types.FETCH }),
  reset: () => ({ type: types.RESET }),
};
