import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { useSyncExternalStore } from 'react';
import { useTheme } from '@mui/styles';
// import Router from 'next/router';
import { useRouter } from 'next/router';
// const useStyles = makeStyles({
// 	Nav_bar: {
// 		display: 'none',
// 	},
// });
import { createTheme } from '@mui/material/styles';

let theme = createTheme({
	palette: {
		primary: {
			main: '#0052cc',
		},
		secondary: {
			main: '#edf2ff',
		},
	},
});

theme = createTheme(theme, {
	palette: {
		info: {
			main: theme.palette.secondary.main,
		},
	},
});

const useStyles = makeStyles((theme) => ({
	Nav_bar: {},
}));
const drawerWidth = 240;
const navItems = [
	'Home',
	'About us',
	'Events',
	'Sponsors',
	'Our Team',
	'Contact Us',
];

function Nav(props) {
	const classes = useStyles();
	const theme = useTheme();
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const router = useRouter();
	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box
			onClick={handleDrawerToggle}
			sx={{
				textAlign: 'center',
				backgroundColor: 'white',
				color: 'black',
				height: '100%',
			}}
		>
			<Typography variant="h6" sx={{ my: 2, textAlign: '-webkit-center' }}>
				SearchPost.com
			</Typography>
			{/* <Divider /> */}
			{/* <List>
				{x.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton
							sx={{ display: 'flex', justifyContent: 'center' }}
						></ListItemButton>
					</ListItem>
				))}
			</List> */}
			<List>
				<ListItem>
					<Button variant="contained">Login</Button>
					{/* <Button variant="contained">Signup</Button> */}
				</ListItem>
				<ListItem>
					{/* <Button variant="contained">Login</Button> */}
					<Button variant="contained">Signup</Button>
				</ListItem>
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<div id="home">
			<Box sx={{ display: 'flex' }}>
				{/* <CssBaseline /> */}
				<AppBar
					component="nav"
					sx={{
						color: 'black',
						backgroundColor: 'white',
						zIndex: '1000',
					}}
				>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{ mr: 2, display: { sm: 'none' } }}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
						>
							SearchPost.com
						</Typography>
						<Box>
							<List
								sx={{
									display: 'flex',
									'@media(max-width:601px)': {
										display: 'none',
									},
								}}
								className={classes.Nav_bar}
							>
								<ListItem>
									<Button
										onClick={() => {
											router.push('/login');
										}}
										fullWidth
										variant="contained"
									>
										Login
									</Button>
									{/* <Button variant="contained">Signup</Button> */}
								</ListItem>
								<ListItem>
									{/* <Button variant="contained">Login</Button> */}
									<Button
										onClick={() => {
											router.push('/signup');
										}}
										variant="contained"
									>
										Signup
									</Button>
								</ListItem>
							</List>
						</Box>
					</Toolbar>
				</AppBar>
				<Box
					component="nav"
					sx={{ background: 'rgb(30, 30, 30)', height: '100%' }}
				>
					<Drawer
						container={container}
						variant="temporary"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
						sx={{
							display: {
								xs: 'block',
								sm: 'none',
							},
							'& .MuiDrawer-paper': {
								boxSizing: 'border-box',
								width: drawerWidth,
							},
						}}
					>
						{drawer}
					</Drawer>
				</Box>
				<Box component="main">
					<Toolbar />
				</Box>
			</Box>
		</div>
	);
}

Nav.propTypes = {
	window: PropTypes.func,
};

export default Nav;
