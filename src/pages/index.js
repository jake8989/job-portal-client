import Head from 'next/head';
// import makeStyles from '@material-ui/core';
import Nav from '@/components/Nav';
import { ListItem, Typography } from '@material-ui/core';
import { ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Image from 'next/image';

import Button from '@mui/material/Button';
import List from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
const useStyles = makeStyles({
	paper: {
		height: '100vh',
	},
	frontpage: {
		flexWrap: 'wrap',
		'@media(max-width:801px)': {
			flexDirection: 'column',
		},
	},
});
// import { Paper } from '@material-ui/core';
export default function Home() {
	const classes = useStyles();
	return (
		<>
			<Nav></Nav>
			<Head>
				<title>Job-Search App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Paper className={classes.paper}>
					<Box
						sx={{
							display: 'flex',
							// border: '2px solid black',
							flexDirection: 'row',
							// width: '100%',
							flexWrap: 'wrap',
						}}
						className={classes.frontpage}
					>
						<Box
							sx={{
								width: '50%',
								flexWrap: 'wrap',
								display: 'flex',
							}}
							display={'flex'}
							justifyContent={'center'}
							// marginLeft={'4em'}
						>
							<Image
								height={500}
								width={520}
								src={'/Job hunt-amico.png'}
							></Image>
						</Box>
						<Box
							sx={{
								width: '50%',
								flexWrap: 'wrap',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
							display={'flex'}
						>
							{' '}
							<Typography variant="h3">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
								obcaecati harum sunt?
							</Typography>{' '}
							{/* <ButtonGroup> */}
							{/* </ButtonGroup> */}
							{/* <Button>Post Job</Button> */}
							<Box>
								<Button variant="contained">Post Job</Button>

								<Button sx={{ marginLeft: '2rem' }} variant="contained">
									Search Jobs
								</Button>
							</Box>
						</Box>
					</Box>
				</Paper>
			</main>
		</>
	);
}
