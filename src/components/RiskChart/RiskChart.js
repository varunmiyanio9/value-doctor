import * as React from 'react';
import { RadialGauge } from '@progress/kendo-react-gauges';
const radialOptions = {
	value: Math.ceil(40.0),
	shape: 'arrow',
	scale: {
		minorUnit: 5,
		majorUnit: 20,
		max: 100,
		ranges: [
			{
				from: 20,
				to: 50,
				color: '#ffc700',
			},
			{
				from: 50,
				to: 80,
				color: '#ff7a00',
			},
			{
				from: 80,
				to: 100,
				color: '#c20000',
			},
		],
	},
};
const RadialGaugeComponent = () => {
	return <RadialGauge style={{ height: 150 }} {...radialOptions} />;
};

export default RadialGaugeComponent;
