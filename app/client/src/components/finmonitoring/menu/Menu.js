import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

import Enum from '../../../../../common/Enum'

function OptionsPanel({ onClose }){
    return (
        <div className="options_panel options_panel-active">
            <div className="options_panel__header">
                <div className="options_panel__title">Title</div>
                <div className="close" onClick={onClose}>x</div>
            </div>
        </div>
    );
}

const MenuEnum = Enum({
    default: 'default',
    options: 'options',
    settings: 'settings',
    admin: 'admin',
})

function toggleOptions(prev){
    return prev !== MenuEnum.options ? MenuEnum.options : MenuEnum.default;
}

export default function Menu({ }){

    const navigate = useNavigate();

    const [menuItem, setMenuItem] = useState(MenuEnum.default)

    return (<>
        <div className="menu">

            <div className="menu__block">
                <div className={`menu__item ${menuItem===MenuEnum.options?'menu__item-active':''}`}
                     onClick={e => setMenuItem(toggleOptions)}
                >
                    O
                </div>
            </div>

            <div className="menu__block">
                <div className="menu__item" onClick={e=>e}>?</div>
                <div className="menu__item" onClick={e=>e}>S</div>
                <div className="menu__item" onClick={e=>e}>W</div>
                {/*<div className="menu__item" onClick={e=>navigate('/authenticate')}>Auth</div>*/}
                <div className="menu__item" onClick={e=>navigate('/logout')}>LogOut</div>
            </div>

            {menuItem===MenuEnum.options && <OptionsPanel onClose={e => setMenuItem(toggleOptions)}/>}

        </div>
    </>);
}