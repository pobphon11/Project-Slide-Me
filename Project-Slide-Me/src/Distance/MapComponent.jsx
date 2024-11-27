import React, { useEffect, useRef } from 'react';
import './MapComponent.css';

const MapComponent = () => {
	const mapRef = useRef(null);
	const routeDetails = {};

	useEffect(() => {
		if (window.longdo) {
			const map = new window.longdo.Map({
				placeholder: mapRef.current,
			});

			const resultDiv = document.createElement('div');
			// resultDiv.style.position = 'absolute';
			// resultDiv.style.top = '10px';
			// resultDiv.style.right = '10px';
			// resultDiv.style.background = '#fff';
			// resultDiv.style.border = '1px solid #ddd';
			// resultDiv.style.padding = '10px';
			// resultDiv.style.overflow = 'auto';
			// resultDiv.style.zIndex = '';
			map.Route.placeholder(resultDiv);

			map.Route.add(
				new window.longdo.Marker(
					{ lon: 100.577862, lat: 13.878293 },
					{ title: 'มหาวิทยาลัยศรีปทุม บางเขน', detail: 'ตำแหน่งเริ่มต้น' }
				)
			);
			map.Route.add({ lon: 100.569957, lat: 13.84786 });
			map.Route.search();
		}
	}, []);

	return (
		<div
			style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
		>
			{/* แผนที่ */}
			<div
				ref={mapRef}
				style={{
					marginTop: '200px',
					width: '70%',
					height: '300px',
					marginBottom: '20px',
				}}
			></div>
			{/* ข้อมูลการเดินทาง */}
			<div
				style={{
					width: '70%',
					padding: '20px',
					backgroundColor: '#f9f9f9',
					border: '1px solid #ddd',
					borderRadius: '5px',
				}}
			>
				<h3>ข้อมูลการเดินทาง</h3>
				<p>
					<strong>ประเภทของรถ:</strong> {routeDetails.vehicleType}
					<strong className='vehicleType'>
						ประเภทของรถdsjfgkdsfhkjsdfhkudsfhku:
					</strong>
				</p>
				<p>
					<strong>ระยะทาง:</strong> {routeDetails.distance}
				</p>
				<p>
					<strong>ระยะเวลา:</strong> {routeDetails.time}
				</p>
				<p>
					<strong>ชื่อคนขับ:</strong> {routeDetails.driverName}
				</p>
				<p>
					<strong>เบอร์โทรคนขับ:</strong> {routeDetails.driverPhone}
				</p>
				<p>
					<strong>ค่าบหฟกหฟกริการ:</strong> {routeDetails.fare}
				</p>
			</div>
		</div>
	);
};

export default MapComponent;
