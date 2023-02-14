import React from 'react';
import {useNavigate} from "react-router-dom";
import {useAppContext} from "../../context/AppContext";
import Menu from "./components/Menu";
import MapBox from "./components/MapBox";
import OptionsPanel from "./components/OptionsPanel";

export default function MapGraph(){

    const navigate = useNavigate()

    const { authHandler } = useAppContext();

    const {user, isAuthenticated} = authHandler;

    return (
        <main>

            <Menu />

            {/*<OptionsPanel />*/}

            <MapBox />

        </main>
    );
}