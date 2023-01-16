import React from "react";
import { initialState } from "./initialState";
import { reducer, actions } from "./reducers";
export const SuggestionItemContext = React.createContext();

export const SuggestionsProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const value = {
    suggestions: state.suggestions,
    totals: state.totals,
    updateTotals: (suggestions) => {
      dispatch({ type: actions.SET_TOTALS, payload: suggestions });
    },
    initSuggestions: (items) => {
      dispatch({ type: actions.SET_SUGGESTIONS, payload: items });
    },
    updateSuggestions: (items) => {
      dispatch({ type: actions.UPDATE_SUGGESTIONS, payload: items });
    },
  };

  return (
    <SuggestionItemContext.Provider value={value}>
      {children}
    </SuggestionItemContext.Provider>
  );
};
