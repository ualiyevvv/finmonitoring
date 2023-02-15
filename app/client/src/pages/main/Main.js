import React from 'react';
import Menu from "../../components/finmonitoring/menu/Menu";

export default function Main({ children }){
    return (
        <main>
            <Menu />
            { children }
        </main>
    );
}