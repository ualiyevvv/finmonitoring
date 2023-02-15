import React from 'react';

import LoadingIcons from 'react-loading-icons'
import {useAppContext} from "../../../context/AppContext";
import {useNavigate} from "react-router-dom";

export default function Banned(){
    const navigate = useNavigate();
    const { authHandler } = useAppContext();
    const onLogout = (e) => {
        authHandler.logout().then(r => {
            navigate('/', {replace: true});
        });
    }

    return (<>
        <h1>You have been banned</h1>
        <p>{authHandler.user.ban_reasons}</p>
        <LoadingIcons.Circles stroke="red" />

        <button onClick={onLogout}>Logout</button>
    </>);
}