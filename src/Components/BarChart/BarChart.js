import * as React from 'react';
import {
	Chart,
	ChartSeries,
	ChartSeriesItem,
} from '@progress/kendo-react-charts';
import 'hammerjs';
const [firstSeries, secondSeries] = [
	[1, 2, 3, 5],
	[1, 1, 1, 1],
];
const BarChart = () => (
	<Chart>
		<ChartSeries>
			<ChartSeriesItem
				type='column'
				stack={{
					type: '100%',
				}}
				data={firstSeries}
			/>
			<ChartSeriesItem type='column' data={secondSeries} />
		</ChartSeries>
	</Chart>
);

export default BarChart;
