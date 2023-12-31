import React from 'react';
import {
	AppBar,
	AppBarSection,
	AppBarSpacer,
	Avatar,
} from '@progress/kendo-react-layout';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import './Header.scss';
import adidasLogo from '../../assets/logo/adidas-logo.png';

const kendokaAvatar =
	'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200';

const Header = props => {
	const { expanded, setExpanded } = props;
	return (
		<React.Fragment>
			<AppBar className='AppBar'>
				<AppBarSection>
					<button
						className='k-button k-button-md k-rounded-md k-button-flat k-button-flat-base'
						onClick={() => setExpanded(!expanded)}>
						<span className='k-icon k-i-menu' />
					</button>
				</AppBarSection>

				<AppBarSpacer
					style={{
						width: 4,
					}}
				/>

				<AppBarSection>
					<h1 className='title'>o9</h1>
				</AppBarSection>
				<AppBarSection>
					<img className='BrandLogo' src={adidasLogo} alt='adidas' />
				</AppBarSection>

				<AppBarSpacer
					style={{
						width: 32,
					}}
				/>

				<AppBarSection>
					{/* <ul>
						<li>
							<span>What's New</span>
						</li>
						<li>
							<span>About</span>
						</li>
						<li>
							<span>Contacts</span>
						</li>
					</ul> */}
				</AppBarSection>

				<AppBarSpacer />

				<AppBarSection className='actions'>
					<button className='k-button k-button-md k-rounded-md k-button-flat k-button-flat-base'>
						<BadgeContainer>
							<span className='k-icon k-i-bell' />
							<Badge
								shape='dot'
								themeColor='info'
								size='small'
								position='inside'
							/>
						</BadgeContainer>
					</button>
				</AppBarSection>

				<AppBarSection>
					<span className='k-appbar-separator' />
				</AppBarSection>

				<AppBarSection>
					<Avatar type='image'>
						<img src={kendokaAvatar} alt='o9 Layout Kendoka Avatar' />
					</Avatar>
				</AppBarSection>
			</AppBar>
		</React.Fragment>
	);
};

export default Header;
