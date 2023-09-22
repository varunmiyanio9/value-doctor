import * as React from 'react';
import {
	Chart,
	ChartSeries,
	ChartSeriesItem,
	ChartTitle,
	ChartValueAxis,
	ChartValueAxisItem,
	ChartLegend,
} from '@progress/kendo-react-charts';
import 'hammerjs';

const BarChart = props => {
	const { chartName, data } = props;
	return (
		<Chart>
			{chartName && <ChartTitle text={chartName} />}
			<ChartValueAxis>
				<ChartValueAxisItem
					// title={{
					// 	text: 'Miles',
					// }}
					min={0}
					max={100}
				/>
			</ChartValueAxis>
			<ChartLegend position='bottom' orientation='horizontal' />
			<ChartSeries>
				<ChartSeriesItem
					color={'#000'}
					type='column'
					data={[data[0]]}
					name='AS-IS'
				/>
				<ChartSeriesItem
					color={'#F7C62F'}
					type='column'
					data={[data[1]]}
					name='Planned'
				/>
				<ChartSeriesItem
					color={'#55AB1D'}
					type='column'
					data={[data[2]]}
					name='Current/Actual'
				/>
			</ChartSeries>
		</Chart>
	);
};

export default BarChart;
