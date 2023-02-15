import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useAppContext} from "../../context/AppContext";

import MapBox from "./components/mapbox/MapBox";
import Main from "../main/Main";
import SearchText from "./components/mapbox/SearchText";
import OverviewPanel from "./components/mapbox/OverviewPanel";

export default function MapGraph(){
    const navigate = useNavigate()
    const { authHandler } = useAppContext();
    const { user, isAuthenticated } = authHandler;

    const [nodes, setNodes] = useState([{name: "alar", num:10}])
    const [relationships, setRelationships] = useState([{name: "ayan", num:23}])


    return (
        <Main>
            <div className="mapbox">

                <SearchText onSearch={value => console.log("searched:", value)}/>

                <div className="map">

                </div>

                <OverviewPanel
                    nodes={nodes}
                    relationships={relationships}
                />

            </div>
        </Main>
    );
}