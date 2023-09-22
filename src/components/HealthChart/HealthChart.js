import * as React from 'react';
import {
	Chart,
	ChartSeries,
	ChartSeriesItem,
	ChartTitle,
} from '@progress/kendo-react-charts';
// import { DropDownList } from '@progress/kendo-react-dropdowns';
import 'hammerjs';
const ChartContainer = () => {
	const [series] = React.useState([
		20, 1, 18, 3, 15, 5, 10, 6, 9, 6, 10, 5, 13, 3, 16, 1, 19, 1, 20, 2, 18, 5,
		12, 7, 10, 8,
	]);
	// const [lineStyle, setLineStyle] = React.useState('normal');
	// const [lineStyles] = React.useState(['normal', 'step', 'smooth']);
	return (
		<div>
			{/* <DropDownList
				data={lineStyles}
				value={lineStyle}
				onChange={event => {
					setLineStyle(event.target.value);
				}}
			/> */}
			<Chart style={{ height: 230 }}>
				<ChartTitle text='Health' />
				<ChartSeries>
					<ChartSeriesItem
						type='area'
						data={series}
						markers={{
							visible: false,
						}}
						line={{
							style: 'normal',
						}}
					/>
				</ChartSeries>
			</Chart>
		</div>
	);
};

export default ChartContainer;
