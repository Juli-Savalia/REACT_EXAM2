let initialState = {
  userlist: [],
  err: null,
};

const examReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_RECORD":
      return {
        ...state,
        userlist: [...state.userlist, action.payload],
      };

    case "VIEW_RECORD":
      return {
        ...state,
        userlist: action.payload,
      };

    case "DELETE_RECORD":
      return {
        ...state,
        userlist: state.userlist.filter((user) => user.id !== action.payload),
      };
    case "MULTIPLE_DELETEREC":
      return {
        ...state,
        userlist: action.payload,
      };
    default:
      return state;
  }
};

export default examReducer;
