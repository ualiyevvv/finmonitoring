import React, {useEffect, useState} from 'react';

import {Link, Routes, Route} from "react-router-dom";

import Auth from './pages/auth/Auth'
import Logout from "./pages/auth/Logout";

import Profile from './pages/profile/Profile'

import {AppContextProvider} from "./context/AppContext";

import './assets/css/style.css'
import './assets/css/adaptive.css'

export default function Router(){
	// return (<TestSocket />)
	return (
		<AppContextProvider>
			<Routes>
				<Route path="/" element={<Profile />} />

				<Route path='/authenticate' element={<Auth />} />
				<Route path="/logout" element={<Logout />} />
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