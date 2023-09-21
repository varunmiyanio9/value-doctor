import React from 'react';
import Routes from './Routes';
import '@progress/kendo-theme-default/dist/all.css';
import './App.scss';

function App() {
	return (
		<div className='App'>
			<div className='ApplicationWrapper'>
				<Routes />
			</div>
		</div>
	);
}

export default App;
