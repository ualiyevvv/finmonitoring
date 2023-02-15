import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useAppContext} from "../../context/AppContext";

import LogOutIcon from '../../assets/icons/log out.svg'
import Main from "../main/Main";

export default function Logout(){
    const navigate = useNavigate();
    const {authHandler} = useAppContext()
    const {logout} = authHandler;

    const onLogout = () => {
        console.log('logout')
        logout();
        navigate('/', {replace: true});
    }

    return (
        <Main>
            <div>
                <h1>[Logout page]</h1>
                <LogOutIcon />
                <button onClick={onLogout}>Logout</button>
            </div>
        </Main>
    );
}