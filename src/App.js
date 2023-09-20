import React from 'react';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import Routes from './Routes';
import '@progress/kendo-theme-default/dist/all.css';
import './App.scss';

function App() {
	return (
		<div className='App'>
			<div className='ApplicationWrapper'>
				<h1>Working</h1>
				<Header />
				<SideNav />
				<div className='ContentWrapper'>
					<Routes />
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
