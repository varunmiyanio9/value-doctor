import React from 'react';

import {
	Chart as KendoChart,
	ChartSeries,
	ChartSeriesItem,
	ChartCategoryAxis,
	ChartCategoryAxisItem,
	ChartValueAxis,
	ChartValueAxisItem,
	ChartLegend,
	ChartTooltip,
} from '@progress/kendo-react-charts';
import { groupBy, filterBy } from '@progress/kendo-data-query';
import { useInternationalization } from '@progress/kendo-react-intl';
const locales = [
	{
		locale: 'English',
		localeId: 'en-US',
	},
	{
		locale: 'French',
		localeId: 'fr',
	},
	{
		locale: 'Spanish',
		localeId: 'es',
	},
];

const MONTH_FORMAT = 'MMMM yyyy';
const COMPACT_FORMAT = 'MM yyyy';

const Chart = props => {
	const {
		data,
		groupByField,
		seriesCategoryField,
		seriesField,
		filterStart,
		filterEnd,
		seriesType,
		groupResourceData,
		groupTextField,
		groupColorField,
		onRefresh,
	} = props;

	const intlService = useInternationalization();
	const filteredData = filterBy(data, {
		logic: 'and',
		filters: [
			{ field: 'orderDate', operator: 'gt', value: filterStart },
			{ field: 'orderDate', operator: 'lt', value: filterEnd },
		],
	});
	const groupedData = groupBy(filteredData, [{ field: groupByField }]);

	const ChartTooltipRender = ({ point }) => {
		return (
			<div>
				<div style={{ textTransform: 'uppercase' }}>
					{intlService.formatDate(point.category, MONTH_FORMAT)}
				</div>
				<div style={{ textAlign: 'center' }}>
					{intlService.formatNumber(point.value, { locale: locales.locale })}
				</div>
			</div>
		);
	};

	return (
		<KendoChart style={{ height: 500 }} onRefresh={onRefresh}>
			<ChartLegend
				position='bottom'
				orientation='horizontal'
				background={'#f4f5f8'}
				padding={{ left: 80 }}
				labels={{ padding: { right: 80 } }}
			/>
			<ChartTooltip render={ChartTooltipRender} />
			<ChartSeries>
				{groupedData.map(group => {
					const groupResource = groupResourceData.find(
						item => item[groupByField] === group.value
					);

					return (
						<ChartSeriesItem
							key={group.value}
							name={groupResource[groupTextField]}
							type={seriesType}
							field={seriesField}
							categoryField={seriesCategoryField}
							data={group.items}
							color={groupResource[groupColorField]}></ChartSeriesItem>
					);
				})}
			</ChartSeries>
			<ChartCategoryAxis>
				<ChartCategoryAxisItem
					baseUnit={'months'}
					labels={{
						dateFormats: {
							months: window.innerWidth >= 480 ? MONTH_FORMAT : COMPACT_FORMAT,
						},
					}}></ChartCategoryAxisItem>
			</ChartCategoryAxis>
			<ChartValueAxis>
				<ChartValueAxisItem
					labels={{ format: { locale: locales.locale } }}></ChartValueAxisItem>
			</ChartValueAxis>
		</KendoChart>
	);
};

export default Chart;
