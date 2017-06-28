const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'test':
      return state;
    default:
      return state;
  }
}
