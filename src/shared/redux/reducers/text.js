const text = (state = 'Hello World', action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return Object.assign({}, state, action.text);
      break;
    default:
      return state;
  }
};

export default text;