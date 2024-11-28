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

			// const resultDiv = document.createElement('div');
			// resultDiv.style.position = 'absolute';
			// resultDiv.style.top = '10px';
			// resultDiv.style.right = '10px';
			// resultDiv.style.background = '#fff';
			// resultDiv.style.border = '1px solid #ddd';
			// resultDiv.style.padding = '10px';
			// resultDiv.style.overflow = 'auto';
			// resultDiv.style.zIndex = '';
			// map.Route.placeholder(resultDiv);

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
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<div className='wrapper-container'>
				<div
					ref={mapRef}
					style={{
						marginTop: '20px',
						width: '1000px',
						height: '400px',
						marginBottom: '20px',
					}}
				></div>
				<div className='map-text-container'>
					<h3 className='text-detail'>ข้อมูลการเดินทาง</h3>
					<div className='details'>
						<div className='detail'>
							<strong>
								<h4> ชื่อคนขับ</h4>
								<p className='inside'>นายสมมุติ 001</p>
							</strong>
						</div>
						<div className='detail'>
							<strong>
								<h4> ประเภทของรถ</h4>
								<p className='inside'>รถสไลด์6ล้อ</p>
							</strong>
						</div>
						<div className='detail'>
							<strong>
								<h4> ชื่อลูกค้า</h4>
								<p className='inside'>นายสมมุติ 002</p>
							</strong>
						</div>
						<div className='detail'>
							<strong>
								<h4> ราคา</h4>
								<p className='inside'>1000บาท</p>
							</strong>
						</div>
						<div className='detail'>
							<strong>
								<h4> วิธีการชำระเงิน</h4>
								<p className='inside'> ชำระโดยบัตรเครดิต</p>
							</strong>
						</div>
						<div className='detail'>
							<strong>
								<h4>ระยะทาง</h4>
								<p className='inside'>8-15 กิโลเมตร</p>
							</strong>
						</div>
						<div className='detail'>
							<strong>
								<h4>ระยะเวลา</h4>
								<p className='inside'>00 ชั่วโมง 50นาที 50วินาที</p>
							</strong>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MapComponent;
