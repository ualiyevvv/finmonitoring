import React from 'react';

import LoadingIcons from 'react-loading-icons'
import {useNavigate} from "react-router-dom";
import {useAppContext} from "../../../context/AppContext";

export default function Waiting(){
    const navigate = useNavigate();
    const { authHandler } = useAppContext();
    const onLogout = (e) => {
        authHandler.logout().then(r => {
            navigate('/', {replace: true});
        });
    }

    return (<>
        <h1>Please wait for account verification</h1>
        <LoadingIcons.Circles stroke="black" />
        <button onClick={onLogout}>Logout</button>
    </>);
}