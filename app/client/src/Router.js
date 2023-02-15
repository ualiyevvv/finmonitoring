import React, {useEffect, useState} from 'react';

import {Link, Routes, Route, Navigate} from "react-router-dom";

import Auth from './pages/auth/auth/Auth'
import Logout from "./pages/auth/logout/Logout";

import AuthMiddleware from './middlewares/AuthMiddleware';

import {AppContextProvider, useAppContext} from "./context/AppContext";

import './assets/css/styles.css';

import MapBox from "./pages/mapbox/MapBox";
import Settings from "./pages/settings/Settings";
import GraphTest from "./pages/graph_test/GraphTest";
import Page404 from "./pages/404/Page404";
import Waiting from "./pages/auth/waiting/Waiting";
import Banned from "./pages/auth/banned/Banned";

import App from "./pages/App.tsx";

export default function Router(){
	return (
		<AppContextProvider>
			<Routes>
				<Route path='/authenticate' element={<Auth />} />
				<Route path="/logout" element={<Logout />} />

				<Route path="/" element={<AuthMiddleware page={<MapBox />} />} />
				<Route path="/settings" element={<AuthMiddleware page={<Settings />} />} />

				<Route path="/graph_test" element={<AuthMiddleware page={<GraphTest />} />} />

				<Route path="/waiting" element={<Waiting />} />
				<Route path="/banned" element={<Banned />} />

				<Route path="/app" element={<App />} />

				<Route path="*" element={<AuthMiddleware page={<Page404 />} />} />
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