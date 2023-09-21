import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import { publicRoutes } from './const';

const AppRoutes = props => {
	const [expanded, setExpanded] = React.useState(true);
	return (
		<React.Fragment>
			<BrowserRouter>
				<Header expanded={expanded} setExpanded={setExpanded} />
				<SideNav expanded={expanded} setExpanded={setExpanded}>
					<div className='ContentWrapper'>
						<Routes>
							{publicRoutes.map(route => {
								const { component: Component, path } = route;
								return (
									<Route exact key={path} path={path} element={<Component />} />
								);
							})}
							<Route key='/' path='/' element={<Navigate to='/dashboard' />} />
						</Routes>
					</div>
				</SideNav>
			</BrowserRouter>
		</React.Fragment>
	);
};

export default AppRoutes;
