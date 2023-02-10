import React, {useEffect, useState} from 'react';

import {Link, Routes, Route} from "react-router-dom";

import {AppContextProvider} from "./context/AppContext";

import Home from './pages/Home'

export default function Router(){
	// return (<TestSocket />)
	return (
		<AppContextProvider>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</AppContextProvider>
	);
}

/*
▄───▄
█▀█▀█
█▄█▄█
─███──▄▄
─████▐█─█
─████───█
─▀▀▀▀▀▀▀
*/