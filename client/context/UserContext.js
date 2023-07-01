import React, { useEffect, createContext, useReducer } from 'react';
import axios from 'axios';

const UserContext = createContext();

const initialState = {
  user: null,
};

function userReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

function UserContextProvider(props) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/user/checkAuth', { withCredentials: true });
        if (response.status === 200) {
          dispatch({ type: 'SET_USER', payload: response.data.user });
          console.log('checkAuth user data:', response.data.user);
        }
      } catch (error) {
        console.log('checkAuth didn`t work', error);
      }
    };

    checkAuth();
  }, []);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
