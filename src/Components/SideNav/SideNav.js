import * as React from 'react';
import { Drawer, DrawerContent } from '@progress/kendo-react-layout';

const items = [
	{
		text: 'Inbox',
		icon: 'k-i-inbox',
		selected: true,
		route: '/',
	},
	{
		separator: true,
	},
	{
		text: 'Notifications',
		icon: 'k-i-bell',
		route: '/notifications',
	},
	{
		text: 'Calendar',
		icon: 'k-i-calendar',
		route: '/calendar',
	},
	{
		separator: true,
	},
	{
		text: 'Attachments',
		icon: 'k-i-hyperlink-email',
		route: '/attachments',
	},
	{
		text: 'Favourites',
		icon: 'k-i-star-outline',
		route: '/favourites',
	},
];

const SideNav = props => {
	const { expanded, setExpanded } = props;

	const onSelect = e => {
		props.history.push(e.itemTarget.props.route);
		setExpanded(!expanded);
	};

	return (
		<div>
			<Drawer
				expanded={expanded}
				position={'start'}
				mode={'push'}
				mini={true}
				items={items.map(item => ({
					...item,
					selected: window.location.pathname?.includes(item.text),
				}))}
				onSelect={onSelect}>
				<DrawerContent>{props.children}</DrawerContent>
			</Drawer>
		</div>
	);
};
export default SideNav;
