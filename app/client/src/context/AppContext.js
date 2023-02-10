import React, {createContext, useContext, useEffect, useState} from 'react';

import useAuth from "./hooks/useAuth";

const Context = createContext();

const useAppContext = () => useContext(Context);

function AppContextProvider({ children }){

    const authHandler = useAuth({socketHandler});

    return (
        <Context.Provider value={{
            authHandler,
        }}>
            {children}
        </Context.Provider>
    );
};

export {AppContextProvider, useAppContext};

/*
▄───▄
█▀█▀█
█▄█▄█
─███──▄▄
─████▐█─█
─████───█
─▀▀▀▀▀▀▀
*/