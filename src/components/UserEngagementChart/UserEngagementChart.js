import * as React from 'react';
import { RadialGauge } from '@progress/kendo-react-gauges';
const value = 30;
const pointer = {
	value: value,
};
const gaugeStyles = {
	display: 'block',
	height: 150,
};
const GaugeContainer = () => (
	<React.Fragment>
		<p
			style={{
				fontSize: 16,
				color: 'black',
			}}>
			User Engagement
		</p>
		<RadialGauge style={gaugeStyles} pointer={pointer} />
	</React.Fragment>
);

export default GaugeContainer;
