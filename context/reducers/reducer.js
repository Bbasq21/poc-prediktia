import { calculateTotals } from "../../helpers/suggestions";
import { actions } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_TOTALS:
      return {
        ...state,
        totals: calculateTotals(action.payload),
      };
    case actions.SET_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.payload,
      };

    case actions.UPDATE_SUGGESTIONS:
      return {
        ...state,
        suggestions: [...state.suggestions, action.payload],
      };
    default:
      return state;
  }
};
