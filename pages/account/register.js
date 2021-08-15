import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from '@/styles/AuthForm.module.css';
import { FaUser } from 'react-icons/fa';
import AuthContext from '@/context/AuthContext';

const RegisterPage = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ passwordConfirm, setPasswordConfirm ] = useState('');
	const [ username, setUserName ] = useState('');
	const { register, error } = useContext(AuthContext);
	useEffect(() => error && toast.error(error));
	const handleSubmit = (e) => {
		e.preventDefault();
		register({ username, email, password });
		if (password != passwordConfirm) {
			toast.error('password  do not match');
			return;
		}
	};
	return (
		<Layout title="User Registration">
			<div className={styles.auth}>
				<h1>
					<FaUser /> Register
				</h1>
				<ToastContainer />
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="username">User Name</label>
						<input type="text" id="" value={username} onChange={(e) => setUserName(e.target.value)} />
					</div>
					<div>
						<label htmlFor="email">Email Address</label>
						<input type="email" id="" value={email} onChange={(e) => setEmail(e.target.value)} />
					</div>
					<div>
						<label htmlFor="password">Password </label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="passwordConfirm">Password </label>
						<input
							type="password"
							id="passwordConfirm"
							value={passwordConfirm}
							onChange={(e) => setPasswordConfirm(e.target.value)}
						/>
					</div>
					<input type="submit" className="btn" value="Register" />
					<p>
						Already have an account ?<Link href=" /account/login">Register</Link>
					</p>
				</form>
			</div>
		</Layout>
	);
};

export default RegisterPage;
