/*
 * @Author: zhangzheng
 * @Date: 2021-12-15 18:08:34
 * @LastEditors: zhangzheng
 * @LastEditTime: 2021-12-15 18:09:01
 * @Descripttion:
 */
import React, { createContext, useReducer, useContext } from 'react';

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
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