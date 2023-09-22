import React from 'react';
import './sow.scss';
import salesCycleImg from './img/sales-cycle.png';
import marketingLead from './img/marketing-lead.svg';
import keyImage from './img/key.svg';
import deviationImage from './img/deviation.png';
import promiseImage from './img/Promise.png';
import partnerImage from './img/implementation-partner.png';
import dollarImage from './img/dollar.png';
import machineNetworkImage from './img/machine-network.png';
import machineImage from './img/machine.png';
import tabletImage from './img/tablet.png';
import dollarSaveImage from './img/dollar-save.png';
import gaImage from './img/ga.png';
import emImg from './img/ep.svg';
import resImg from './img/resources.svg';
import arAaImg1 from './img/ar-aa-2.png';
import arAaImg2 from './img/ar-aa-3.png';

const sowValues = {
	duration: '6 Months',
	customerSegmentation: 'Elephant',
	companyRevenue: '$ 1 Billion',
	reference: 'NA',
	promise: '12 Months',
	deviation: '30',
};

const Sow = props => {
	return (
		<div>
			<div className='segment'>
				<div className='segment-left'>
					<div className='sales-seg'>
						<div className='sales-pic-section'>
							<img
								className='sales-pic-section-img'
								src={salesCycleImg}
								alt='sale cycle'
							/>
						</div>
						<div className='sales-desc-section'>
							<div>
								<span className='sc-text'>Sales Cycles </span>
							</div>
							<div>
								<span>Duration : </span>
								<span className='scd-values'>{sowValues.duration}</span>
							</div>
							<div>
								<span>Company Revenue : </span>
								<span className='scd-values'>{sowValues.companyRevenue}</span>
							</div>
							<div>
								<span>Reference : </span>
								<span className='scd-values'>{sowValues.reference}</span>
							</div>
							<div>
								<span>Contract : </span>
								<span className='scd-values'>{sowValues.reference}</span>
							</div>
						</div>
					</div>

					<div className='marketing-seg'>
						<div className='marketing-pic-section'>
							<img
								className='marketing-pic-section-img'
								src={marketingLead}
								alt='marketing lead'
							/>
						</div>
						<div className='marketing-desc-section'>
							<div>
								<span>Marketing Lead </span>
							</div>
							<div>
								<span>Customer Segmentation: </span>
								<span>{sowValues.customerSegmentation}</span>
							</div>
						</div>
					</div>

					<div className='sow-seg'>
						<div className='sow'>
							<span>SOW</span>
						</div>
						<div className='sow-seg'>
							<div className='light-green'>
								<span>Tag-Supply planning Foundation </span>
							</div>
							<div className='light-green'>
								<span>Tag-Production planning </span>
							</div>
							<div className='light-green'>
								<span>Tag-Procurment planning </span>
							</div>
							<div className='light-yellow'>
								<span>Tag- Custom - Order Promissing</span>
							</div>
							<div className='light-yellow'>
								<span>Tag- Truck Load </span>
							</div>
						</div>
					</div>
				</div>

				<div className='segment-right'>
					<div className='key-seg'>
						<div className='key-pic-seg'>
							<img className='key-pic-seg-img' src={keyImage} alt='Key' />
						</div>
						<div className='key-desc-seg'>
							<div className='sh'>
								<span>Stake Holders </span>
							</div>
							<div>
								<span>Users</span>
							</div>
							<div>
								<span>Interests</span>
							</div>
							<div>
								<span>Traction</span>
							</div>
						</div>
					</div>

					<div className='projections-seg'>
						<div className='promise-seg'>
							<div className='promise-image-seg'>
								<img
									className='promise-seg-img'
									src={promiseImage}
									alt='Promise'
								/>
								<div className='bold promise-text'>
									<span>{sowValues.promise}</span>
								</div>
								<div className='bold promise-text'>
									<span>Promise</span>
								</div>
							</div>
						</div>
						<div className='propositions-seg'>
							<img
								className='proposition-images'
								src={dollarImage}
								alt='Dollars/ Monetary'
							/>
							<img
								className='proposition-images'
								src={machineNetworkImage}
								alt='Machine Network'
							/>
							<img
								className='proposition-images'
								src={machineImage}
								alt='Machine'
							/>
							<img
								className='proposition-images'
								src={tabletImage}
								alt='tablet'
							/>
							<img
								className='proposition-images'
								src={dollarSaveImage}
								alt='Approximate Value'
							/>
							<span>Approximate Value Proposition</span>
						</div>
						<div className='implemention-partner-seg'>
							<div>
								<img className='ips-img' src={partnerImage} alt='partners' />
							</div>
							<div> Implementation Partners</div>
						</div>
					</div>

					<div className='deviation-seg'>
						<div className='deviation-blocks'>
							<img src={deviationImage} alt='deviation' />
						</div>
						<div className='deviation-blocks-text'>
							<div className='deviation-percentage'>{sowValues.deviation}%</div>
							<div className='deviation-text'>deviation from core blocks</div>
						</div>
					</div>
				</div>
			</div>

			<div className='segment next-seg'>
				<div className='segment-left'>
					<div className='idb-seg'>
						<div className='left-tag light-green'>
							Tag- Platform/Single Data model
						</div>
						<div className='right-tag light-green'>
							Tag-Storage constraint , Inbound resource constarint{' '}
						</div>
						<div className='left-tag light-green'>
							Tag- Replinshment planning
						</div>
						<div className='left-tag light-green'>Tag-Forecasting</div>
						<div className='heading'>IDB- Core Builing Blocks </div>
					</div>

					<div className='road-map-seg'>
						<div className='tag light-yellow'>
							Tag- Custom - Allocation Module
						</div>
						<div className='heading'> Roadmap IDB Core Building Block </div>
					</div>

					<div className='outside-seg'>
						<div className='tag light-red'>
							Tag- Custom -Open to ship process
						</div>
						<div className='heading'> Outside IDB Core Building Block </div>
					</div>
				</div>

				<div className='segment-right'>
					<div className='ga-ep-seg'>
						<div className='ga-seg'>
							<div className='ga-text'> Government and Alliance</div>
							<div>
								<img className='ga-img' src={gaImage} alt='GA Imag' />
							</div>
						</div>
						<div className='ep-seg'>
							<div className='ep-text'> Estimation & Pricing </div>
							<img className='ep-img' src={emImg} alt='ep img' />
						</div>
					</div>

					<div className='resource-seg'>
						<div className='res-text'> Resource</div>
						<img className='res-img' src={resImg} alt='res img' />
					</div>

					<div className='ar-aa-seg'>
						<div className='ar-aa-text'>Agreed Responsibility</div>
						<div className='ar-aa-text'> Agreed Accountability </div>
						<div className='ar-aa-imgs'>
							<img src={arAaImg1} alt='' />
							<img src={arAaImg2} alt='' />
						</div>
					</div>

					<div className='at-seg'>
						<div className='headline'>Agreed Timeline</div>
						<div className='table'>
							<div className='row'>
								<div className='column-left'> Services Deliverable</div>
								<div className='column-right'> Date</div>
							</div>
							<div className='row'>
								<div className='column-left'> Blueprinitng</div>
								<div className='column-right'> Months 1-2</div>
							</div>
							<div className='row'>
								<div className='column-left'>
									Supply Planning/ Production Plan
								</div>
								<div className='column-right'> Months 2-10</div>
							</div>
							<div className='row'>
								<div className='column-left'>Order Promising & Truck Load</div>
								<div className='column-right'> Months 13-15</div>
							</div>
							<div className='row'>
								<div className='column-left'>SIT</div>
								<div className='column-right'> Months 11</div>
							</div>
							<div className='row'>
								<div className='column-left'>UAT</div>
								<div className='column-right'> Months 12</div>
							</div>
							<div className='row'>
								<div className='column-left'>Data Integration</div>
								<div className='column-right'> Months 1-12</div>
							</div>
						</div>
					</div>

					<div className='hss-seg'>
						<div className='hss-text'> Hardware & Sizing Security</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sow;
