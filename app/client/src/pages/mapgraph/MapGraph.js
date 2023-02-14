import React from 'react';
import {useNavigate} from "react-router-dom";
import {useAppContext} from "../../context/AppContext";

export default function MapGraph(){

    const navigate = useNavigate()

    const {authHandler, socketHandler, adaptiveHandler} = useAppContext();

    const {user, userLoading, userError, isAuthenticated} = authHandler;
    const {isConnected} = socketHandler;

    const { device } = adaptiveHandler;

    return (<>
        <h1>Map</h1>
    </>);
}