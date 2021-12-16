import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  nickName: ""
};

function reducer(state, action) {
  switch (action.type) {
    case 'updateNickName':
      console.log(action)
      return {nickName: action.nickName};
    default:
      throw new Error();
  }
}

const Context = createContext();

function useStore() {
  return useContext(Context);
}

function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  );
}

export { useStore, StoreProvider };