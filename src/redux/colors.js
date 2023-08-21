
const ADD_COLOR = 'ADD_COLOR';


export const addColor = (name, code) => ({
  type: ADD_COLOR,
  payload: { name, code },
});


const initialState = { colors: [] };

const colorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COLOR:
      return {
        ...state,
        colors: [...state.colors, { name: action.payload.name, code: action.payload.code }],
      };
    default:
      return state;
  }
};

export default colorsReducer;
