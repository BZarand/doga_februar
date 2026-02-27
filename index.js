import { Manager } from "./manager.js";
import { Table } from "./table.js";
import data from "./data.json" with{type:"json"}
import { tbodyRenderColspan, tbodyRenderRowspan } from "./functions";

const colspanManager = new Manager();
const rowspanManager = new Manager();
const colspanTable = new Table(data.colspanHeaderArray, colspanManager);
const rowspanTable = new Table(data.rowspanHeaderArray, rowspanManager);

colspanTable.setAppendRow(tbodyRenderColspan);
rowspanTable.setAppendRow(tbodyRenderRowspan);

for(const colspanObj of data.colspanDataArr){
    colspanManager.addRow(colspanObj);
}

for(const rowspanObj of data.rowspanDataArr){
    rowspanManager.addRow(rowspanObj);
}