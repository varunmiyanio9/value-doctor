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
				<DrawerContent style={{ height: 1066 }}>{props.children}</DrawerContent>
			</Drawer>
		</React.Fragment>
	);
};
export default SideNav;
