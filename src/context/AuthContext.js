import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom'

const AuthContext = createContext({
    authState: {},
    logout: () => { },
    setAuthInfo: ({token,expiresAt,userInfo}) => { },
    isAuthenticated:()=>{}
});

const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
    const history = useHistory();

    const token = localStorage.getItem('token');
    const expiresAt = localStorage.getItem('expiresAt');
    const userInfo = localStorage.getItem('userInfo');
    console.log(JSON.parse(userInfo));
    const [authState, setAuthState] = useState({
        token,
        expiresAt,
        userInfo: userInfo
    });

    const setAuthInfo = ({ token, expiresAt, userInfo }) => {
        console.log(userInfo)
        localStorage.setItem('token', token);
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        localStorage.setItem('expiresAt', expiresAt);

        setAuthState({
            token,
            expiresAt,
            userInfo
        });
    }

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('expiresAt');
        localStorage.removeItem('userInfo');
        setAuthState({});
        history('/login');
    }

    const isAuthenticated = () => {
        if (!token && !expiresAt) {
            return false
        }
        return (new Date().getTime() / 1000 < authState.expiresAt);
    }
    const isAdmin = () => {
        
    }
    return (
        <Provider value={{authState,logout,setAuthInfo,isAuthenticated}}>
            
            {children}
        </Provider>
    )
}

export { AuthProvider }

export default AuthContext;