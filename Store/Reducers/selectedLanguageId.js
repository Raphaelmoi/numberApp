const initialState = {languageList: []};

function selectedLanguageId(state = initialState, action) {
  let nextState;

  switch (action.type) {
    case 'SELECTED_LANG':
        nextState = {
          ...state,
          languageList: [ action.value],
        // }
      };
      return nextState || state;

    default:
      return state;
  }
}

export default selectedLanguageId;
