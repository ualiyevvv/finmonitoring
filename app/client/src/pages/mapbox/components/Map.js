import React, {useState} from 'react';

import {useNavigate} from "react-router-dom";
import {useAppContext} from "../../../context/AppContext";

export default function MapBox(){
    const navigate = useNavigate()
    const { authHandler } = useAppContext();
    const { user, isAuthenticated } = authHandler;

    return (
        <div className="map">

        </div>
    );
}