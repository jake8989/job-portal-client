import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Alert, AlertTitle } from '@mui/material';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSignup } from '@/hooks/useSignup';
import { useRouter } from 'next/router';
const theme = createTheme();

export default function SignIn() {
	const router = useRouter();
	let { signup, isLoading, error, setError } = useSignup();
	// let [err, setErr] = React.useState(null);
	const [show, setShow] = React.useState('show');

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		if (!data.get('email') || !data.get('password') || !data.get('name')) {
			alert('Please provide input fields');
			return;
		}
		const name = data.get('name');
		const email = data.get('email');
		const password = data.get('password');
		await signup(name, email, password, router);
		// if (!error) router.push('/login');
		// if (!error) setShow('');
		console.log(name, email, password);
		// onCheck(error);
	};
	// if (isLoading) return <h1>Loading..</h1>;
	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<Box
						component="form"
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin="normal"
							fullWidth
							id="name"
							label="Name"
							name="name"
							// autoComplete="email"
							autoFocus
							required
						/>
						<TextField
							margin="normal"
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							// autoComplete="email"
							autoFocus
							required
						/>
						<TextField
							margin="normal"
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							// autoComplete="current-password"
							required
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
							disabled={isLoading}
						>
							Sign In
						</Button>
						{error && (
							// <Alert severity="error">
							// 	<AlertTitle>Error</AlertTitle>
							// 	{error}
							// </Alert><Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
							<Alert
								severity="error"
								action={
									<Button
										color="inherit"
										size="small"
										onClick={() => {
											setError(null);
											console.log(error);
											console.log('random');
										}}
									>
										X
									</Button>
								}
							>
								{error}
							</Alert>
						)}
						<Grid container>
							<Grid item xs></Grid>
							<Grid item></Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
