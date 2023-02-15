import React, {useEffect, useReducer, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

function OptionsPanel({ onClose=f=>f }){
    return (
        <div className="options_panel options_panel-active">
            <div className="options_panel__header">
                <div className="options_panel__title">Title</div>
                <div className="close" onClick={onClose}>x</div>
            </div>
        </div>
    );
}

const MenuItem = {
    mapbox: '/',
    settings: '/settings',
    admin: '/admin',
    logout: '/logout',
}

export default function Menu({ }){
    const location = useLocation();
    const navigate = useNavigate();

    const [isOptionsOpen, toggleIsOptionsOpen] = useReducer(state => !state, false);
    const [menuItem, setMenuItem] = useState('')

    useEffect(()=>{
        setMenuItem(location.pathname)
    }, [location]);

    return (
        <div className="menu">

            <div className="menu__block">
                <div className={`menu__item ${isOptionsOpen?'menu__item-active':''}`}
                     onClick={toggleIsOptionsOpen}>
                    O
                </div>
            </div>

            <div className="menu__block">
                <div className="menu__item" onClick={e=>e}>?</div>

                <div className={`menu__item ${menuItem===MenuItem.mapbox ? 'menu__item-active' : ''}`}
                     onClick={e=>navigate(MenuItem.mapbox)}>
                    M
                </div>

                <div className={`menu__item ${menuItem===MenuItem.settings ? 'menu__item-active' : ''}`}
                     onClick={e=>navigate(MenuItem.settings)}>
                    S
                </div>

                <div className="menu__item" onClick={e=>e}>W</div>

                {/*<div className="menu__item" onClick={e=>navigate('/authenticate')}>Auth</div>*/}
                <div className={`menu__item ${menuItem===MenuItem.logout ? 'menu__item-active' : ''}`}
                     onClick={e=>navigate(MenuItem.logout)}>
                    LogOut
                </div>
            </div>

            {isOptionsOpen && <OptionsPanel onClose={toggleIsOptionsOpen}/>}

        </div>
    );
}