import React from 'react';
import {
	AppBar,
	AppBarSection,
	AppBarSpacer,
	Avatar,
} from '@progress/kendo-react-layout';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';

import './Header.scss';

const kendokaAvatar =
	'https://www.telerik.com/kendo-react-ui-develop/components/images/kendoka-react.png';

const Header = props => {
	const { expanded, setExpanded } = props;
	return (
		<React.Fragment>
			<AppBar>
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
					<h1 className='title'>KendoReact</h1>
				</AppBarSection>

				<AppBarSpacer
					style={{
						width: 32,
					}}
				/>

				<AppBarSection>
					<ul>
						<li>
							<span>What's New</span>
						</li>
						<li>
							<span>About</span>
						</li>
						<li>
							<span>Contacts</span>
						</li>
					</ul>
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
						<img src={kendokaAvatar} alt='KendoReact Layout Kendoka Avatar' />
					</Avatar>
				</AppBarSection>
			</AppBar>
		</React.Fragment>
	);
};

export default Header;
