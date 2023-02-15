import React from 'react';

import {useAppContext} from "../context/AppContext";
import {Navigate} from "react-router-dom";

export default function AuthMiddleware({ page }){

    const { authHandler } = useAppContext();

    if(!authHandler.isAuthenticated()){
        return <Navigate to={'/authenticate'}/>
    }

    return page;
}