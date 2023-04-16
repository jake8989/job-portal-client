import '@/styles/globals.css';
import { Typography } from '@material-ui/core';
import { AuthContextProvider } from '@/context/AuthContext';
export default function App({ Component, pageProps }) {
	return (
		<>
			<AuthContextProvider>
				<Component {...pageProps} />
			</AuthContextProvider>
			<Typography style={{ textAlign: 'center' }}>
				copyright@SearchPost.com|2023
			</Typography>
		</>
	);
}
