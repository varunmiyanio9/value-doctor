import React from 'react';
import { ButtonGroup, Button } from '@progress/kendo-react-buttons';
import { DateRangePicker } from '@progress/kendo-react-dateinputs';
import TargetChart from '../../components/Chart';
import BarChart from '../../components/BarChart';
import KPIChart from '../../components/KPIChart';
import UserEngagementChart from '../../components/UserEngagementChart';
import TrustChart from '../../components/TrustChart';
import PromiseDelivery from '../../components/PromiseDelivery';
import GapChart from '../../components/GapChart';
import HealthChart from '../../components/HealthChart';
import RiskChart from '../../components/RiskChart';

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
					<BarChart data={CONST.improvedMargin} chartName='Improved Margin' />
				</div>
				<div className='card-component-item'>
					<BarChart
						data={CONST.improvedEfficiency}
						chartName='Improved Efficiency'
					/>
				</div>
				<div className='card-component-item'>
					<BarChart
						data={CONST.improvedAutomation}
						chartName='Improved Automation'
					/>
				</div>
				<div className='card-component-item'>
					<BarChart
						data={CONST.improvedDesisionSupport}
						chartName='Improved Decision Support'
					/>
				</div>
			</div>
			<div className='card-component'>
				<div className='card-component-item'>
					<KPIChart
						data={{ demand: CONST.kpiDemandAccuracy, stock: CONST.kpiStockOut }}
					/>
				</div>
				<div className='card-component-item'>
					<UserEngagementChart />
					<div style={{ paddingTop: 45, borderBottom: '1px solid grey' }} />
					<p
						style={{
							fontSize: 16,
							color: 'black',
						}}>
						Trust/Advocacy
					</p>
					<TrustChart />
				</div>
				<div className='card-component-item'>
					<PromiseDelivery />
					<div style={{ paddingTop: 0, borderBottom: '1px solid grey' }} />
					<GapChart />
				</div>
				<div className='card-component-item'>
					<HealthChart />
					<div style={{ paddingTop: 20, borderBottom: '1px solid grey' }} />
					<p
						style={{
							fontSize: 16,
							color: 'black',
						}}>
						Risk
					</p>
					<RiskChart />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
