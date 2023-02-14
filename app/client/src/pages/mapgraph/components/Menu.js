import React from 'react';

export default function Menu({ }){
    return (
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
            </div>
        </div>
    );
}