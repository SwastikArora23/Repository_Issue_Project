import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const GridDisplay = (props) => {
    const { columnHeaders, rowData } = props;
    return (
        <div
            id='myGrid'
            style={{
                height: '80%',
                width: '90vw',
                color: 'white',
            }}
            className='ag-theme-alpine'
        >
            <AgGridReact
                columnDefs={columnHeaders}
                rowData={rowData}
                pagination={true}
                paginationAutoPageSize={true}
            />
        </div>
    );
};

export default GridDisplay;
