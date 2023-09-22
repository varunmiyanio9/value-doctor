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
// import { Icon } from '@progress/kendo-react-common';
// import sunnyIcon from 'https://demos.telerik.com/kendo-ui/content/dataviz/chart/images/sunny.png';
// const sunnyIcon =
// 	'https://demos.telerik.com/kendo-ui/content/dataviz/chart/images/sunny.png';
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
		{/* <SeriesNotesIcon /> */}
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
				markers={{
					background: '#323232',
					size: 10,
				}}
			/>
			<ChartSeriesItem
				color='#F7C62F'
				name='Target'
				type='line'
				data={[165, 210, 287, 144, 190, 167, 212]}
				dashType='dot'
				markers={{
					// visible: true,
					background: 'yellow',
					size: 10,
					// visual: e => {
					// 	e.value;
					// 	e.createVisual()
					// 	return e;
					// },
					// backgroundImage:sunnyIcon
				}}
				// markers={{
				// 	visible: true,
				// 	visual: e => {
				// 		e.value = sunnyIcon;
				// 		return e;
				// 	},
				// }}
				// visual={e => {
				// 	e.value =
				// 		'https://demos.telerik.com/kendo-ui/content/dataviz/chart/images/sunny.png';
				// 	return e;
				// }}
				// markers={{
				// 	visual: (
				// 		'https://demos.telerik.com/kendo-ui/content/dataviz/chart/images/sunny.png'
				// 	),
				// }}
				// visual={e => {
				// 	// var targetPoint = { x: e.rect.center().x, y: e.rect.origin.y };
				// 	// var line = new kendo.drawing.Path()
				// 	// 	.moveTo(targetPoint.x, targetPoint.y)
				// 	// 	.lineTo(targetPoint.x, targetPoint.y - 10);
				// 	// var circle = new kendo.drawing.Circle(
				// 	// 	new kendo.geometry.Circle([targetPoint.x, targetPoint.y - 30], 20),
				// 	// 	{
				// 	// 		fill: {
				// 	// 			color: 'red',
				// 	// 		},
				// 	// 	}
				// 	// );
				// 	// var text = new kendo.drawing.Text(e.text);
				// 	// var bbox = text.bbox();
				// 	// text.position([
				// 	// 	targetPoint.x - 20 + (40 - bbox.width()) / 2,
				// 	// 	targetPoint.y - 50 + (40 - bbox.height()) / 2,
				// 	// ]);
				// 	// return new kendo.drawing.Group().append(line, circle, text);
				// }}
			/>
			<ChartSeriesItem
				color='#55AB1D'
				name='Actual'
				type='line'
				data={[56, 140, 195, 46, 123, 78, 95]}
				markers={{
					background: 'green',
					size: 10,
				}}
			/>
		</ChartSeries>
	</Chart>
);

export default ChartContainer;
