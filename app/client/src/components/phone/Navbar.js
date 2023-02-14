import React from 'react'

import ArrowLeft from '../../assets/icons/arrow-left.svg'
import InfoCirce from '../../assets/icons/info-circle.svg'
import {useNavigate} from "react-router-dom";

import ArrowDownIcon from "../../assets/icons/arrow-down.svg"

export default function Navbar({
                                   title,
                                   back=false,
                                   back_url='',
                                   info=false,
                                   select=false,
                                   onBackClick=f=>f,
                                   onInfoClick=f=>f,
}){
    return (

        <div className="navbar">
            {(back || back_url) &&
            <div className="navbar__left backbtn-control" onClick={onBackClick}>
                <ArrowLeft />
            </div>}

            {title &&
            <div className={`${select ? "navbar__title tal": "navbar__title"} `}>
                {title}
            </div>}

            {info &&
            <div className="navbar__right info-control" onClick={onInfoClick}>
                <InfoCirce />
            </div>}

            {select &&
            <div className="select-navbar">
                <div className="select__name">
                    Жилье
                </div>
                <ArrowDownIcon/>
            </div>}
        </div>
    )
}