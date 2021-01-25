const initialState = {
  names: [],
};

const NamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NAME":
      return {
        ...state,
        names: [...state.names, action.payload],
      };

    case "DELETE_NAME":
      const newarr = state.names.filter((e) => e.id !== action.payload);
      return {
        ...state,
        names: newarr,
      };

    case "UPDATE_NAME":
      const x = state.names.map((e) =>
        e.id === action.payload.idholder
          ? { ...e, name12: action.payload.edit }
          : e
      );
      return {
        ...state,
        names: x,
      };

    default:
      return state;
  }
};

export default NamesReducer;
