import * as React from 'react';
import {
	Chart,
	ChartLegend,
	ChartSeries,
	ChartSeriesItem,
	ChartSeriesLabels,
	ChartTitle,
} from '@progress/kendo-react-charts';
import 'hammerjs';

const data = [
	{
		kind: 'Planning',
		share: 0.2,
	},
	{
		kind: 'Scope Creep',
		share: 0.5,
	},
	{
		kind: 'Delay',
		share: 0.3,
	},
	// {
	// 	kind: 'Solar',
	// 	share: 0.052,
	// },
	// {
	// 	kind: 'Wind',
	// 	share: 0.225,
	// },
	// {
	// 	kind: 'Other',
	// 	share: 0.192,
	// },
];

const labelContent = e => e.category;
const ChartContainer = () => (
	<Chart style={{ height: 250 }}>
		<ChartTitle text='Gap' />
		<ChartSeries>
			<ChartSeriesItem
				type='donut'
				data={data}
				categoryField='kind'
				field='share'>
				<ChartSeriesLabels
					color='#fff'
					background='none'
					content={labelContent}
				/>
			</ChartSeriesItem>
		</ChartSeries>
		<ChartLegend visible={false} />
	</Chart>
);

export default ChartContainer;
