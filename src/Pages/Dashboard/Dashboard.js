import React from 'react';
import { ButtonGroup, Button } from '@progress/kendo-react-buttons';
import { DateRangePicker } from '@progress/kendo-react-dateinputs';
import TargetChart from '../../components/Chart';
import BarChart from '../../components/BarChart';
import * as CONST from './const';
import './Dashboard.scss';

const Dashboard = props => {
	// const [data, setData] = React.useState(CONST.employees);
	const [isTrend, setIsTrend] = React.useState(true);
	// const [isMyTeam, setIsMyTeam] = React.useState(true);
	const isChartChangeRef = React.useRef(false);
	const onChartRefresh = React.useCallback(() => null, []);

	React.useEffect(() => {
		isChartChangeRef.current = false;
	});

	// const teamId = null;

	// const gridFilterExpression = isMyTeam
	// 	? {
	// 			logic: 'and',
	// 			filters: [{ field: 'teamId', operator: 'eq', value: teamId }],
	// 	  }
	// 	: null;

	const [range, setRange] = React.useState({
		start: new Date('2020-01-01T21:00:00.000Z'),
		end: new Date('2020-04-29T21:00:00.000Z'),
	});
	const onRangeChange = React.useCallback(
		event => {
			setRange({
				start: event.value.start,
				end: event.value.end,
			});
		},
		[setRange]
	);
	const trendOnClick = React.useCallback(() => {
		isChartChangeRef.current = true;
		setIsTrend(true);
	}, [setIsTrend]);
	const volumeOnClick = React.useCallback(() => {
		isChartChangeRef.current = true;
		setIsTrend(false);
	}, [setIsTrend]);
	// const myTeamOnClick = React.useCallback(
	// 	() => setIsMyTeam(true),
	// 	[setIsMyTeam]
	// );
	// const allTeamOnClick = React.useCallback(
	// 	() => setIsMyTeam(false),
	// 	[setIsMyTeam]
	// );

	return (
		<div className='card-container grid'>
			<h3 className='card-title'>Team Efficiency</h3>
			<div className='card-buttons'>
				<ButtonGroup>
					<Button togglable={true} selected={isTrend} onClick={trendOnClick}>
						Trend
					</Button>
					<Button togglable={true} selected={!isTrend} onClick={volumeOnClick}>
						Volume
					</Button>
				</ButtonGroup>
			</div>
			<div className='card-ranges'>
				<DateRangePicker value={range} onChange={onRangeChange} />
			</div>
			<div className='card-component'>
				<div className='card-component-item'>
					<TargetChart
						data={CONST.orders}
						filterStart={range.start}
						filterEnd={range.end}
						groupByField={'teamID'}
						groupResourceData={CONST.teams}
						groupTextField={'teamName'}
						groupColorField={'teamColor'}
						seriesCategoryField={'orderDate'}
						seriesField={'orderTotal'}
						seriesType={isTrend ? 'line' : 'column'}
						onRefresh={isChartChangeRef.current ? null : onChartRefresh}
					/>
				</div>
			</div>
			<div className='card-component'>
				<div className='card-component-item'>
					<BarChart />
				</div>
				<div className='card-component-item'>
					<BarChart />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
