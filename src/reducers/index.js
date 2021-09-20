const initialState = {
  menuActive: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_ACTION':
      return {
        ...state,
        menuActive: !state.menuActive,
      };

    default:
      return state;
  }
} 

export default reducer;