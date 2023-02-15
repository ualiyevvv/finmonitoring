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

function MenuItem({menuItem, name, url}){
    const navigate = useNavigate();

    return (
        <div className={`menu__item ${menuItem===url ? 'menu__item-active' : ''}`}
             onClick={e=>navigate(url)}>
            {name}
        </div>
    );
}


const MenuItems = {
    mapbox: '/',
    settings: '/settings',
    admin: '/admin',
    logout: '/logout',
    graph_test: '/graph_test',
}


export default function Menu({ }){
    const location = useLocation();

    const [isOptionsOpen, toggleIsOptionsOpen] = useReducer(state => !state, false);
    const [menuItem, setMenuItem] = useState('')

    useEffect(()=>setMenuItem(location.pathname), [location]);

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

                <MenuItem menuItem={menuItem} name={'M'} url={MenuItems.mapbox}/>
                <MenuItem menuItem={menuItem} name={'GraphTest'} url={MenuItems.graph_test}/>
                <MenuItem menuItem={menuItem} name={'S'} url={MenuItems.settings}/>

                <div className="menu__item" onClick={e=>e}>W</div>

                {/*<div className="menu__item" onClick={e=>navigate('/authenticate')}>Auth</div>*/}
                <MenuItem menuItem={menuItem} name={'LogOut'} url={MenuItems.logout}/>

            </div>

            {isOptionsOpen && <OptionsPanel onClose={toggleIsOptionsOpen}/>}

        </div>
    );
}