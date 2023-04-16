import React, { useContext, useState } from 'react';

import { AuthContext } from '@/context/AuthContext';
import { useAuthContext } from './useAuthContext';
export const useLogin = () => {
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(null);
	const [success, setSuccess] = useState(null);
	//token is not protected yet i will protect it soon
	const { dispatch } = useAuthContext();
	const login = async (email, password, router) => {
		const response = await fetch('http://localhost:8000/api/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				// Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ email, password }),
		});
		const json = await response.json();
		console.log(json);
		if (!response.ok) {
			setLoading(false);
			console.log(json.message);
			setError('Email or Password is wrong');
		}
		if (response.ok) {
			localStorage.setItem('player', JSON.stringify(json));
			dispatch({ type: 'LOGIN', payload: json });
			setLoading(false);
			setSuccess(200);
			router.push('/dashboard');
		}
	};
	return { login, loading, error, setError, success, setSuccess };
};
