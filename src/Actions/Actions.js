export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const addname = (data) => {
  return {
    type: "ADD_NAME",
    payload: data,
  };
};

export const deletename = (data) => {
  return {
    type: "DELETE_NAME",
    payload: data,
  };
};

export const updatename = ({ idholder, edit }) => {
  return {
    type: "UPDATE_NAME",
    payload: { idholder, edit },
  };
};
