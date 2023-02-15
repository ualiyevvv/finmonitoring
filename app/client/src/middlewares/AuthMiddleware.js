import React, {useEffect} from 'react';

import {useAppContext} from "../context/AppContext";
import {Navigate} from "react-router-dom";

export default function AuthMiddleware({ page }){

    const { authHandler } = useAppContext();

    useEffect(()=>{
        console.log(authHandler.user);
    }, [])

    if(!authHandler.isAuthenticated()){
        return <Navigate to={'/authenticate'}/>
    }
    else if(authHandler.user.status === 'waiting'){
        return <Navigate to={'/waiting'} />
    }
    else if(authHandler.user.status === 'banned'){
        return <Navigate to={'/banned'} />
    }

    return page;
}