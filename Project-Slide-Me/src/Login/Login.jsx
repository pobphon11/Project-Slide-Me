import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleLogin = () => {
		if (username === 'AdminSlideme' && password === '1234') {
			navigate('/dashboard');
		} else if (username === 'User' && password === '1234') {
			navigate('/User');
		} else {
			alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
		}
	};

	return (
		<div className='login-page'>
			<div className='login-container'>
				<div className='login-left'>
					<img
						src='public/Screenshot 2024-11-25 194628.png'
						alt='Logo'
						className='logo-img'
					/>
				</div>
				<div className='login-right'>
					<h1>SLIDE ME</h1>
					<div>
						<input
							className='login-form'
							type='text'
							placeholder='Username'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<input
							className='login-form'
							type='password'
							placeholder='Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button className='login-button' onClick={handleLogin}>
						LOGIN
					</button>
				</div>
			</div>
		</div>
	);
}

export default Login;
