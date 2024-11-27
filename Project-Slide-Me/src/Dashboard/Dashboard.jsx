import './Dashboard.css';
import { CgProfile } from 'react-icons/cg';
import { useState, useEffect } from 'react';
import {
	BarChart,
	XAxis,
	YAxis,
	Legend,
	Tooltip,
	CartesianGrid,
	Bar,
} from 'recharts';

const data = [
	{ name: 'Page A', uv: 3500 },
	{ name: 'Page B', uv: 3000 },
	{ name: 'Page C', uv: 2000 },
	{ name: 'Page D', uv: 2780 },
	{ name: 'Page E', uv: 1890 },
	{ name: 'Page F', uv: 2390 },
	{ name: 'Page G', uv: 650 },
];

const data1 = [
	{ name: 'จันทร์', Ordernow: 4500, Booking: 1400 },
	{ name: 'อังคาร', Ordernow: 3700, Booking: 400 },
	{ name: 'พุธ', Ordernow: 5550, Booking: 2400 },
	{ name: 'พฤหัสบดี', Ordernow: 2356, Booking: 1540 },
	{ name: 'ศุกร์', Ordernow: 4000, Booking: 2400 },
	{ name: 'เสาร์', Ordernow: 515, Booking: 3214 },
	{ name: 'อาทิตย์', Ordernow: 4000, Booking: 2400 },
];

function Dashboard() {
	// อ่านค่าจำนวนผู้เข้าใช้จาก localStorage ถ้ามี
	const storedUserCount = localStorage.getItem('userCount');
	const storedDriverCount = localStorage.getItem('driverCount');
	const storedOrderCount = localStorage.getItem('orderCount');
	const storedRevenueCount = localStorage.getItem('revenueCount');

	const initialUserCount = storedUserCount ? parseInt(storedUserCount) : 999;
	const initialDriverCount = storedDriverCount
		? parseInt(storedDriverCount)
		: 450;
	const initialOrderCount = storedOrderCount ? parseInt(storedOrderCount) : 33;
	const initialRevenueCount = storedRevenueCount
		? parseInt(storedRevenueCount)
		: 9999;

	// สถานะสำหรับจำนวนผู้เข้าใช้, คนขับ, ออเดอร์, รายได้
	const [userCount, setUserCount] = useState(initialUserCount);
	const [driverCount, setDriverCount] = useState(initialDriverCount);
	const [orderCount, setOrderCount] = useState(initialOrderCount);
	const [revenueCount, setRevenueCount] = useState(initialRevenueCount);

	// เพิ่มจำนวนทุกๆ 3 วินาที
	useEffect(() => {
		const interval = setInterval(() => {
			// อัปเดตจำนวนผู้ใช้
			setUserCount((prevCount) => {
				const newUserCount = prevCount + 2; // เพิ่มจำนวนผู้ใช้ทีละ 2
				localStorage.setItem('userCount', newUserCount); // บันทึกค่าลง localStorage
				return newUserCount;
			});

			// อัปเดตจำนวนคนขับ
			setDriverCount((prevCount) => {
				const newDriverCount = prevCount + 2; // เพิ่มจำนวนคนขับทีละ 2
				localStorage.setItem('driverCount', newDriverCount); // บันทึกค่าลง localStorage
				return newDriverCount;
			});

			// อัปเดตจำนวนออเดอร์
			setOrderCount((prevCount) => {
				const newOrderCount = prevCount + 2; // เพิ่มจำนวนออเดอร์ทีละ 2
				localStorage.setItem('orderCount', newOrderCount); // บันทึกค่าลง localStorage
				return newOrderCount;
			});

			// อัปเดตรายได้ (แบบสุ่ม)
			setRevenueCount((prevCount) => {
				const randomIncrement = Math.floor(Math.random() * 426) + 1; // สุ่มค่าเพิ่ม (1 ถึง 10)
				const newRevenueCount = prevCount + randomIncrement; // เพิ่มค่าสุ่มเข้าไปในรายได้
				localStorage.setItem('revenueCount', newRevenueCount); // บันทึกค่าลง localStorage
				return newRevenueCount; // คืนค่ากลับไป
			});
		}, 2000); // อัปเดตทุกๆ 2 วินาที

		// ล้าง interval เมื่อ component ถูก unmount
		return () => clearInterval(interval);
	}, []);

	return (
		<div>
			{/* แถบด้านบน */}
			<div className='Dashboard-container'>
				<div>
					<CgProfile className='profile' onClick={() => {}} />
				</div>
			</div>

			{/* กล่องสามกล่องด้านล่าง */}
			<div className='box-container'>
				<div className='box'>
					<p className='Usernow'>ผู้เข้าใช้</p>
					<p className='count'>{userCount}</p>
					<p className='Day'>วันนี้</p>
					<div className='Barchart-container'>
						<BarChart width={160} height={80} data={data}>
							<Tooltip />
							<Bar dataKey='uv' fill='#82ca9d' />
						</BarChart>
					</div>
				</div>

				<div className='box'>
					<p className='Usernow'>คนขับ</p>
					<p className='count'>{driverCount}</p>
					<p className='Day'>วันนี้</p>
					<div className='Barchart-container'>
						<BarChart width={160} height={80} data={data}>
							<Bar dataKey='uv' fill='#82ca9d' />
						</BarChart>
					</div>
				</div>

				<div className='box'>
					<p className='Usernow'>จำนวนออเดอร์</p>
					<p className='count'>{orderCount}</p>
					<p className='Day'>วันนี้</p>
					<div className='Barchart-container'>
						<BarChart width={160} height={80} data={data}>
							<Tooltip />
							<Bar dataKey='uv' fill='#82ca9d' />
						</BarChart>
					</div>
				</div>

				<div className='box'>
					<p className='Usernow'>รายได้</p>
					<p className='count'>{revenueCount}</p>
					<p className='Day'>วันนี้</p>
					<div className='Barchart-container'>
						<BarChart width={160} height={80} data={data}>
							<Tooltip />
							<Bar dataKey='uv' fill='#82ca9d' />
						</BarChart>
					</div>
				</div>
			</div>

			{/* กราฟใหญ่ */}
			<div className='large-box'>
				<div className='Graph-container'>
					<BarChart width={1300} height={450} data={data1}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='name' />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey='Ordernow' fill='#82ca9d' />
						<Bar dataKey='Booking' fill='black' />
					</BarChart>
				</div>
				<p className='Graph'></p>
			</div>
		</div>
	);
}

export default Dashboard;
