import * as React from 'react';
import {
	Chart,
	ChartSeries,
	ChartSeriesItem,
	ChartTitle,
} from '@progress/kendo-react-charts';
import 'hammerjs';
const series = [
	// {
	// 	category: '0-14',
	// 	value: 0.2545,
	// },
	{
		value: 0.4,
		color: '#F7C62F',
	},
	{
		value: 0.6,
		color: '#55AB1D',
	},
	// {
	// 	category: '55-64',
	// 	value: 0.0911,
	// },
	// {
	// 	category: '65+',
	// 	value: 0.0933,
	// },
];
const labelContent = props => {
	let formatedNumber = Number(props.dataItem.value).toLocaleString(undefined, {
		style: 'percent',
		minimumFractionDigits: 2,
	});
	return `${formatedNumber}`;
};
const ChartContainer = () => (
	<Chart style={{ height: 250 }}>
		<ChartTitle text='Promise Delivery' />
		{/* <ChartLegend position='hidden' /> */}
		<ChartSeries>
			<ChartSeriesItem
				type='pie'
				data={series}
				field='value'
				categoryField='category'
				labels={{
					visible: true,
					content: labelContent,
				}}
			/>
		</ChartSeries>
	</Chart>
);

export default ChartContainer;
