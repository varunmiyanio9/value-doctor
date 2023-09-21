import React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';
import SupplyPlanningFoundationData from './SupplyPlanningFoundation.json';
import ReplenishmentData from './Replenishment.json';

const Inputs = () => {
	const [selected, setSelected] = React.useState(1);
	const handleSelect = e => {
		setSelected(e.selected);
	};
	return (
		<TabStrip selected={selected} onSelect={handleSelect}>
			<TabStripTab title='Supply Planning Foundation Data'>
				<Grid
					editField='inEdit'
					style={{
						height: '100%',
						width: '100%',
					}}
					data={SupplyPlanningFoundationData}
				>
					<GridColumn field='SNO' title='SNO' width='40px' />
					<GridColumn field='Month' title='Month' />
					<GridColumn field='Data' title='Data' />
					<GridColumn field='Custom' title='Custom' />
					<GridColumn
						field='Industry sprint plan'
						title='Industry sprint plan'
					/>
					<GridColumn
						field='Planned sprint release'
						title='Planned sprint release'
					/>
					<GridColumn
						field='Actual sprint release'
						title='Actual sprint release'
					/>
					<GridColumn
						field='Average Implementaion Time (weeks )'
						title='Average Implementaion Time (weeks)'
					/>
					<GridColumn field='Complexity' title='Complexity' />
					<GridColumn
						field='Tag To Value( Drop Down)'
						title='Tag To Value(Drop Down)'
					/>
					<GridColumn
						field='Config/Integration/ Plugin'
						title='Config/Integration/Plugin'
					/>
					<GridColumn
						field='User Story part Of CR'
						title='User Story part Of CR'
					/>
					<GridColumn
						field='User story are approved by customer'
						title='User story are approved by customer'
					/>
					<GridColumn
						field='User story Part of Ref model'
						title='User story Part of Ref model'
					/>
					<GridColumn field='Architect Comment' title='Architect Comment' />
					<GridColumn field='Config Lead Comment' title='Config Lead Comment' />
					<GridColumn
						field='Integration Archtect Comment'
						title='Integration Archtect Comment'
					/>
					<GridColumn
						field='Client management comment'
						title='Client management comment'
					/>
					<GridColumn field='Risk' title='Risk' />
					<GridColumn field='ISL/ IDB Comment' title='ISL/ IDB Comment' />
					<GridColumn field='Impact' title='Impact' />
					<GridColumn
						field='Scope For Performance Improvement'
						title='Scope For Performance Improvement'
					/>
				</Grid>
			</TabStripTab>
			<TabStripTab title='Replenishment Data'>
				<Grid
					editField='inEdit'
					style={{
						height: '100%',
						width: '100%',
					}}
					data={ReplenishmentData}
				>
					<GridColumn field='SNO' title='SNO' width='40px' />
					<GridColumn field='Data' title='Data' />
					<GridColumn field='Custom' title='Custom' />
					<GridColumn
						field='Industry sprint plan'
						title='Industry sprint plan'
					/>
					<GridColumn
						field='Planned sprint release'
						title='Planned sprint release'
					/>
					<GridColumn
						field='Actual sprint release'
						title='Actual sprint release'
					/>
					<GridColumn
						field='Average Implementaion Time (weeks )'
						title='Average Implementaion Time (weeks)'
					/>
					<GridColumn field='Complexity' title='Complexity' />
					<GridColumn
						field='Tag To Value( Drop Down)'
						title='Tag To Value(Drop Down)'
					/>
					<GridColumn
						field='Config/Integration/ Plugin'
						title='Config/Integration/Plugin'
					/>
					<GridColumn
						field='User Story part Of CR'
						title='User Story part Of CR'
					/>
					<GridColumn
						field='User story are approved by customer'
						title='User story are approved by customer'
					/>
					<GridColumn
						field='User story Part of Ref model'
						title='User story Part of Ref model'
					/>
					<GridColumn field='Architect Comment' title='Architect Comment' />
					<GridColumn field='Config Lead Comment' title='Config Lead Comment' />
					<GridColumn
						field='Integration Archtect Comment'
						title='Integration Archtect Comment'
					/>
					<GridColumn
						field='Client management comment'
						title='Client management comment'
					/>
					<GridColumn field='Risk' title='Risk' />
					<GridColumn field='ISL/ IDB Comment' title='ISL/ IDB Comment' />
					<GridColumn field='Impact' title='Impact' />
					<GridColumn
						field='Scope For Performance Improvement'
						title='Scope For Performance Improvement'
					/>
				</Grid>
			</TabStripTab>
		</TabStrip>
	);
};

export default Inputs;
