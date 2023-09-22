import * as React from 'react';
import { Drawer, DrawerContent } from '@progress/kendo-react-layout';
import { useNavigate } from 'react-router-dom';
import * as CONST from './const';
import './SideNav.scss';

const SideNav = props => {
	const { expanded } = props;
	const navigate = useNavigate();

	const onSelect = e => {
		navigate(e.itemTarget.props.route);
	};

	return (
		<React.Fragment>
			<Drawer
				expanded={expanded}
				position={'start'}
				mode={'push'}
				mini={true}
				items={CONST.ITEMS.map(item => ({
					...item,
					selected: window.location.pathname?.includes(item.text),
				}))}
				onSelect={onSelect}>
				<DrawerContent style={{ height: '100%' }}>
					{props.children}
				</DrawerContent>
			</Drawer>
		</React.Fragment>
	);
};
export default SideNav;
