import './Show.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import React, { useState } from 'react';
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapComponent from './Distance/MapComponent';

function Show() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/map' element={<MapComponent />} />{' '}
					{/* เพิ่มเส้นทางนี้ */}
				</Routes>
			</Router>
		</div>
	);
}

export default Show;
