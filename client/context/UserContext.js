import React, { useEffect, createContext, useReducer } from 'react';
import axios from 'axios';

const UserContext = createContext();

const initialState = {
  user: null,
  userData: null,
};

function userReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
      case 'GET_USER':
      return {
        ...state,
        userData: action.payload,
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
        const response = await axios.get('api/proxy/user/checkAuth', { withCredentials: true });
        if (response.status === 200) {
          dispatch({ type: 'SET_USER', payload: response.data.user });
          console.log('checkAuth user data:', response.data.user);
          console.log('DEBUG data.user.id:', response.data.user.id);

          if (response.data.user.id) {
            try {
              const userDataResponse = await axios.get(`api/proxy/user/${response.data.user.id}`);
              dispatch({ type: 'GET_USER', payload: userDataResponse.data });
              console.log('getUser data:', userDataResponse.data);
            } catch (error) {
              console.log('getUser error:', error);
            }
          }
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
