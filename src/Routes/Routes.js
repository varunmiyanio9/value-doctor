import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes } from './const';

const AppRoutes = props => {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Routes>
					{publicRoutes.map(route => {
						const { component: Component, path } = route;
						return <Route key={path} path={path} element={<Component />} />;
					})}
					<Route key='/' path='/' element={<Navigate to='/dashboard' />} />
				</Routes>
			</BrowserRouter>
		</React.Fragment>
	);
};

export default AppRoutes;
