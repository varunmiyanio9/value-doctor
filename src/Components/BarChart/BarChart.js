import * as React from 'react';
import {
	Chart,
	ChartSeries,
	ChartSeriesItem,
} from '@progress/kendo-react-charts';
import 'hammerjs';

const BarChart = props => {
	const [firstSeries, secondSeries] = props.data;
	return (
		<Chart>
			<ChartSeries>
				<ChartSeriesItem type='column' data={firstSeries} />
				<ChartSeriesItem type='column' data={secondSeries} />
			</ChartSeries>
		</Chart>
	);
};

export default BarChart;
