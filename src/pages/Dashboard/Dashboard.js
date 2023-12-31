import React from 'react';
import TargetChart from '../../components/TargetChart';
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
	const isChartChangeRef = React.useRef(false);

	React.useEffect(() => {
		isChartChangeRef.current = false;
	});

	return (
		<div className='card-container grid'>
			<div className='card-component'>
				<div className='card-component-item'>
					<TargetChart />
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
