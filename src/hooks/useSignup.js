import { useState } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { Password } from '@mui/icons-material';
import { useAuthContext } from './useAuthContext';
// const dotenv = require('dotenv').config();
export const useSignup = () => {
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(null);
	const { dispatch } = useAuthContext();
	const signup = async (name, email, password, router) => {
		setLoading(true);
		setError(null);
		const response = await fetch('http://localhost:8000/api/users', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name, email, password }),
		});
		const json = await response.json();
		console.log(json);
		if (!response.ok) {
			setLoading(false);
			console.log(json.message);
			setError(json.message);
		}
		if (response.ok) {
			localStorage.setItem('player', JSON.stringify(json));
			dispatch({ type: 'LOGIN', payload: json });
			setLoading(false);
			router.push('/login');
		}
	};
	return { signup, loading, error, setError };
};
