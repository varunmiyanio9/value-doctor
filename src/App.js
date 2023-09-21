import React from 'react';
import Header from './components/Header';
import SideNav from './components/SideNav';
// import Footer from './components/Footer';
import Routes from './Routes';
import '@progress/kendo-theme-default/dist/all.css';
import './App.scss';

function App() {
	const [expanded, setExpanded] = React.useState(true);
	return (
		<div className='App'>
			<div className='ApplicationWrapper'>
				<Header expanded={expanded} setExpanded={setExpanded} />
				<SideNav expanded={expanded} setExpanded={setExpanded}>
					<div className='ContentWrapper'>
						<Routes />
					</div>
				</SideNav>
				{/* <Footer /> */}
			</div>
		</div>
	);
}

export default App;
