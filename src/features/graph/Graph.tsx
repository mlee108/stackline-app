import { LineChart } from '@mui/x-charts/LineChart';
import data from '../../data/stackline_frontend_assessment_data_2021.json';
import './Graph.css'

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
});

export default function Graph() {
    return (
        <div className='graphContainer'>
            <h2>Retail Sales</h2>
            <LineChart
                xAxis={[{
                    scaleType: 'point',
                    dataKey: 'weekEnding',
                    tickInterval: (date) => (new Date(date)).getDate() <= 7,
                    valueFormatter: (date, context) =>
                        context.location === 'tick'
                            ? (new Date(date)).toLocaleString('default', {month: 'short'})
                            : date
                }]}
                series={[{
                    dataKey: 'retailSales',
                    color: '#42a6f6',
                    valueFormatter: (value) => value == null ? '' : `${currencyFormatter.format(value)}`
                }]}
                dataset={data[0].sales}
                leftAxis={null}
                margin={{
                    left: 30,
                    right: 30,
                    top: 30,
                    bottom: 120
                }}
            />
        </div>
    );
}