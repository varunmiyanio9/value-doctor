import * as React from 'react';
import {
	Chart,
	ChartTitle,
	ChartSeries,
	ChartSeriesItem,
	ChartCategoryAxis,
	ChartCategoryAxisItem,
	ChartLegend,
} from '@progress/kendo-react-charts';
const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

const ChartContainer = () => (
	<Chart>
		<ChartTitle text='Team Efficiency' />
		<ChartLegend
			position='bottom'
			orientation='horizontal'
			background={'#f4f5f8'}
			padding={{ left: 80 }}
			labels={{ padding: { right: 80 } }}
		/>
		<ChartCategoryAxis>
			<ChartCategoryAxisItem
				title={{
					text: 'Months',
				}}
				categories={categories}
			/>
		</ChartCategoryAxis>
		<ChartSeries>
			<ChartSeriesItem
				type='line'
				color='#000'
				name='Industry Std'
				data={[123, 276, 310, 212, 240, 156, 250]}
			/>
			<ChartSeriesItem
				color='#F7C62F'
				name='Target'
				type='line'
				data={[165, 210, 287, 144, 190, 167, 212]}
			/>
			<ChartSeriesItem
				color='#55AB1D'
				name='Actual'
				type='line'
				data={[56, 140, 195, 46, 123, 78, 95]}
			/>
		</ChartSeries>
	</Chart>
);

export default ChartContainer;
