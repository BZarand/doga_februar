/**
 * @callback addRowCallback
 * @param {HTMLTableSectionElement} tbody
 * @param {import("./functions.js").RowspanType | import("./functions.js").ColspanType} rowObj
 * @returns {HTMLTableSectionElement}
 */
import { createTable, createTableCell } from "./functions.js";
import { Manager } from "./manager.js";

class Table{
    /**
     * @type {Manager}
     */
    #manager;
    /**
     * @type {HTMLTableSectionElement}
     */
    #tbody

    /**
     * 
     * @param {import("./functions.js").RowspanType[] | import("./functions.js").ColspanType[]} headerArray 
     * @param {Manager} manager 
     */
    constructor(headerArray, manager){
        this.#manager = manager;
        for(const headerObj of headerArray){
            createHeader = (tr) => {
                createTableCell("th", headerObj.name, tr);
            }
        }
        createTable(document.body, createHeader);
    }

    /**
     * 
     * @param {addRowCallback} addRowCallback 
     */
    setAppendRow(addRowCallback){
        this.#manager.addRow = (rowObj) => {
            addRowCallback(this.#tbody, rowObj);
        }
    }
}

export {Table}