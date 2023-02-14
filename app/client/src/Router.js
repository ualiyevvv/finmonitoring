import React, {useEffect, useState} from 'react';

import {Link, Routes, Route, Navigate} from "react-router-dom";

import Auth from './pages/auth/Auth'
import Logout from "./pages/auth/Logout";

import Profile from './pages/profile/Profile';

import AuthMiddleware from './middlewares/AuthMiddleware';

import {AppContextProvider, useAppContext} from "./context/AppContext";

import './assets/css/styles.css';
import MapGraph from "./pages/mapgraph/MapGraph";

export default function Router(){
	return (
		<AppContextProvider>
			<Routes>
				<Route path="/" element={<AuthMiddleware page={Profile} />} />

				<Route path='/authenticate' element={<Auth />} />
				<Route path="/logout" element={<Logout />} />

				<Route path="/mapgraph" element={<MapGraph />} />
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