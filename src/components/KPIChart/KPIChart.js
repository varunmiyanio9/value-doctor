import React from 'react';
import {
	Chart,
	ChartSeries,
	ChartSeriesItem,
	ChartTitle,
	ChartLegend,
} from '@progress/kendo-react-charts';
const KPIChart = props => {
	const { demand, stock } = props.data;
	return (
		<React.Fragment>
			<Chart style={{ height: 250 }}>
				<ChartTitle text='Demand accuracy' />
				{/* <ChartLegend position='bottom' orientation='horizontal'  /> */}
				<ChartSeries>
					<ChartSeriesItem
						color={'#000'}
						type='bar'
						data={[demand[0]]}
						// name='AS-IS'
					/>
					<ChartSeriesItem
						color={'#F7C62F'}
						type='bar'
						data={[demand[1]]}
						// name='Planned'
					/>
					<ChartSeriesItem
						color={'#55AB1D'}
						type='bar'
						data={[demand[2]]}
						// name='Actual'
					/>
				</ChartSeries>
			</Chart>
			<Chart style={{ height: 250 }}>
				<ChartTitle text='Stock Out' />
				<ChartLegend position='bottom' orientation='horizontal' />
				<ChartSeries>
					<ChartSeriesItem
						color={'#000'}
						type='bar'
						data={[stock[0]]}
						name='AS-IS'
					/>
					<ChartSeriesItem
						color={'#F7C62F'}
						type='bar'
						data={[stock[1]]}
						name='Planned'
					/>
					<ChartSeriesItem
						color={'#55AB1D'}
						type='bar'
						data={[stock[2]]}
						name='Actual'
					/>
				</ChartSeries>
			</Chart>
		</React.Fragment>
	);
};

export default KPIChart;
