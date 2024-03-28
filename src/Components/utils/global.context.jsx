/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer, useMemo } from "react";

const ActionTypes = {
  SET_THEME: "SET_THEME",
  SET_API_DATA: "SET_API_DATA",
};

export const initialState = { theme: "light", data: [], selectedDentistId: null }

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_THEME:
      return { ...state, theme: action.payload };
    case ActionTypes.SET_API_DATA:
      return { ...state, data: action.payload };
    case 'SELECT_DENTIST':
      return { ...state, selectedDentistId: action.payload };
    default:
      return state;
  }
};

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};