import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function OptionsPanel({  }){
    return (
        <div className="options_panel options_panel-active">
            <div className="options_panel__header">
                <div className="options_panel__title">Title</div>
                <div className="close">x</div>
            </div>
        </div>
    );
}
export default function Menu({ }){

    const navigate = useNavigate();

    const [menuItem, setMenuItem] = useState('')

    return (<>
        <div className="menu">

            <div className="menu__block">
                <div className="menu__item menu__item-active">
                    O
                </div>
            </div>

            <div className="menu__block">
                <div className="menu__item">?</div>
                <div className="menu__item">S</div>
                <div className="menu__item">W</div>
                {/*<div className="menu__item" onClick={e=>navigate('/authenticate')}>Auth</div>*/}
                <div className="menu__item" onClick={e=>navigate('/logout')}>LogOut</div>
            </div>

            <OptionsPanel />

        </div>
    </>);
}