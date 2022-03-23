const defaultState = {
  isLogin: false,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, isLogin: true };
    case "LOG_OUT":
      return { ...state, isLogin: false };
    default:
      return state;
  }
};

export default userReducer;
