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

const sowValues = {
	duration: '6 Months',
	customerSegmentation: 'Elephant',
	companyRevenue: '$ 1 Billion',
	reference: 'NA',
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
								<div className='bold promise-text'> Promise</div>
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
						<div className='deviation-blocks'>
							<div className='deviation-text'>% deviation from core blocks</div>
						</div>
					</div>
				</div>
			</div>

			{/* <div className='segment'>
				<div className='segment-left'>This is sales cycle under segment 2</div>
				<div className='segment-right'>
					This is key stake holder under segment 2
				</div>
			</div> */}
		</div>
	);
};

export default Sow;
