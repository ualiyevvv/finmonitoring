import React, {createContext, useContext, useEffect, useState} from 'react';

import useAuth from "./hooks/useAuth";
import useSocket from "./hooks/useSocket";
import useAdaptive from "./hooks/useAdaptive";

const Context = createContext();
const useAppContext = () => useContext(Context);

function AppContextProvider({ children }){

    const adaptiveHandler = useAdaptive();

    const socketHandler = useSocket()
    const authHandler = useAuth({socketHandler});

    return (
        <Context.Provider value={{
            adaptiveHandler,
            socketHandler,
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