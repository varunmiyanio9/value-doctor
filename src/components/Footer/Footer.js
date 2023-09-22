import React from 'react';
import './Footer.scss';

const Footer = props => {
	return (
		<div className='FooterWrapper'>
			<h1>Test</h1>
			<div className='IconWrapper'></div>
			<div className='copyright'>
				&copy; Copyright. All Rights Reserved {new Date().getFullYear()}
			</div>
		</div>
	);
};

export default Footer;
