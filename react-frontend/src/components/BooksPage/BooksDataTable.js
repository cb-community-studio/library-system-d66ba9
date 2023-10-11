
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const BooksDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.bookName}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.year}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.publisher}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.author}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.edition}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.genre}</p>
    const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.language}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="bookName" header="BookName" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="year" header="Year" body={pTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="publisher" header="Publisher" body={pTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="author" header="Author" body={pTemplate3} sortable style={{ minWidth: "8rem" }} />
            <Column field="edition" header="Edition" body={pTemplate4} sortable style={{ minWidth: "8rem" }} />
            <Column field="genre" header="Genre" body={pTemplate5} sortable style={{ minWidth: "8rem" }} />
            <Column field="language" header="Language" body={pTemplate6} sortable style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default BooksDataTable;