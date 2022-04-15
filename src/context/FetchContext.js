import React, { createContext, useContext } from 'react'
import AuthContext from './AuthContext';
import axios from 'axios';

const FetchContext = createContext();

const { Provider } = FetchContext;

const FetchProvider = ({ children }) => {
    const authCtx = useContext(AuthContext);
    const authAxios = axios.create({
        baseURL: process.env.REACT_APP_API_URL
    });

    authAxios.interceptors.request.use(
        config => {
            config.headers.Authorization = `${authCtx.authState.token}`;
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );

    return (
        <Provider value={{authAxios}}>
            {children}
        </Provider>
    )
}

export default FetchContext
export {FetchProvider}