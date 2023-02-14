import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useAppContext} from "../../context/AppContext";
import Workspace from "../../components/phone/Workspace";
import Menu from "../../components/phone/Menu";
import Workflow from "../../components/phone/Workflow";

import LogOutIcon from '../../assets/icons/log out.svg'

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
    <Workflow>

        <Workspace>
            <h1 style={{textAlign: "center"}}>[Logout page]</h1>

            <div className="push" onClick={onLogout}>
                <div className="push__icon"><LogOutIcon /></div>
                <div className="push__info">
                    <div style={{color: "red"}} className="push__title">Logout</div>
                </div>
            </div>

        </Workspace>

        <Menu />
    </Workflow>
    );
}