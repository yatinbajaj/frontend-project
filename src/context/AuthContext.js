import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom'

const AuthContext = createContext({
    authState: { token:"",expiresAt:0,userInfo:""},
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

    const [authState, setAuthState] = useState({
        token,
        expiresAt,
        userInfo: userInfo ? JSON.parse(userInfo) : {}
    });

    const setAuthInfo = ({token,expiresAt,userInfo}) => {
        localStorage.setItem('token', token);
        localStorage.setItem('userInfo', userInfo);
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