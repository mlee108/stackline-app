import { DataGrid, GridColDef } from '@mui/x-data-grid';
import data from '../../data/stackline_frontend_assessment_data_2021.json';
import './Table.css'

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
});

const columns: GridColDef[] = [
    {
        field: 'weekEnding',
        headerName: 'WEEK ENDING',
        flex: 1,
        valueGetter: (value: string) => {
            return new Date(value.replaceAll('-', '\/'))
        },
        valueFormatter: (value: Date) => {
            return `${value.toLocaleDateString('en-US').replaceAll('\/', '-')}`
        }
    },
    {
        field: 'retailSales',
        headerName: 'RETAIL SALES',
        flex: 1,
        valueFormatter: (value) => {
            return `${currencyFormatter.format(value)}`
        }
    },
    {
        field: 'wholesaleSales',
        headerName: 'WHOLESALE SALES',
        flex: 1,
        valueFormatter: (value) => {
            return `${currencyFormatter.format(value)}`
        }
    },
    {
        field: 'unitsSold',
        headerName: 'UNITS SOLD',
        flex: 1
    },
    {
        field: 'retailerMargin',
        headerName: 'RETAILER MARGIN',
        flex: 1,
        valueFormatter: (value) => {
            return `${currencyFormatter.format(value)}`
        }
    },
];

export default function Table() {
    return (
        <div className='tableContainer'>
            <DataGrid
                rows={data[0].sales}
                columns={columns}
                getRowId={(row) => row.weekEnding}
                initialState={{
                    pagination: {
                        paginationModel: { pageSize: 25 }
                    },
                    sorting: {
                        sortModel: [{ field: 'weekEnding', sort: 'asc' }],
                    },
                }}
            />
        </div>
    );
}