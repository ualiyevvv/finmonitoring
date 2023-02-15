import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useAppContext} from "../../context/AppContext";

import Main from "../main/Main";

import SearchText from "./components/SearchText";
import Map from "./components/Map";
import OverviewPanel from "./components/OverviewPanel";

export default function MapBox(){
    const navigate = useNavigate()
    const { authHandler } = useAppContext();
    const { user, isAuthenticated } = authHandler;

    const [nodes, setNodes] = useState([{name: "alar", num:10}])
    const [relationships, setRelationships] = useState([{name: "ayan", num:23}])

    return (
        <Main>
            <div className="mapbox">

                <SearchText onSearch={value => console.log("searched:", value)}/>

                <Map />

                <OverviewPanel
                    nodes={nodes}
                    relationships={relationships}
                />

            </div>
        </Main>
    );
}