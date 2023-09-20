import * as React from 'react';
import { Drawer, DrawerContent } from '@progress/kendo-react-layout';
import * as CONST from './const';

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
				items={CONST.ITEMS.map(item => ({
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
