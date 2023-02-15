import React, {useEffect, useState} from 'react';

import {Link, Routes, Route, Navigate} from "react-router-dom";

import Auth from './pages/auth/Auth'
import Logout from "./pages/auth/Logout";

import Profile from './archive/profile/Profile';

import AuthMiddleware from './middlewares/AuthMiddleware';

import {AppContextProvider, useAppContext} from "./context/AppContext";

import './assets/css/styles.css';

import MapBox from "./pages/mapbox/MapBox";
import Settings from "./pages/settings/Settings";

export default function Router(){
	return (
		<AppContextProvider>
			<Routes>
				<Route path='/authenticate' element={<Auth />} />
				<Route path="/logout" element={<Logout />} />

				<Route path="/" element={<AuthMiddleware page={<MapBox />} />} />
				<Route path="/settings" element={<AuthMiddleware page={<Settings />} />} />
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