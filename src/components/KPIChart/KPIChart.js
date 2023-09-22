import React from 'react';
import {
	Chart,
	ChartSeries,
	ChartSeriesItem,
	ChartTitle,
	ChartLegend,
} from '@progress/kendo-react-charts';
const KPIChart = () => {
	return (
		<React.Fragment>
			<Chart>
				<ChartTitle text='Demand accuracy' />
				{/* <ChartLegend position='bottom' orientation='horizontal'  /> */}
				<ChartSeries>
					<ChartSeriesItem
						color={'silver'}
						type='bar'
						data={[10]}
						// name='AS-IS'
					/>
					<ChartSeriesItem
						color={'salmon'}
						type='bar'
						data={[5]}
						// name='Planned'
					/>
					<ChartSeriesItem
						color={'skyblue'}
						type='bar'
						data={[20]}
						// name='Actual'
					/>
				</ChartSeries>
			</Chart>
			<Chart>
				<ChartTitle text='Stock Out' />
				<ChartLegend position='bottom' orientation='horizontal' />
				<ChartSeries>
					<ChartSeriesItem
						color={'silver'}
						type='bar'
						data={[10]}
						name='AS-IS'
					/>
					<ChartSeriesItem
						color={'salmon'}
						type='bar'
						data={[5]}
						name='Planned'
					/>
					<ChartSeriesItem
						color={'skyblue'}
						type='bar'
						data={[20]}
						name='Actual'
					/>
				</ChartSeries>
			</Chart>
		</React.Fragment>
	);
};

export default KPIChart;
