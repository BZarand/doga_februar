/**
 * @callback addCallback
 * @param {import("./functions").RowspanType | import("./functions").ColspanType} callback
 * @returns {void}
 */
class Manager{
    /**
     * @type {addCallback}
     */
    #addCallback;

    /**
     * @type {import("./functions").RowspanType[] | import("./functions").ColspanType[]}
     */
    #dataArray;

    constructor(){
        this.#dataArray = [];
    }

    /**
     * @param {addCallback} callback
     */
    set addCallback(callback){
        this.#addCallback = callback;
    }

    /**
     * 
     * @param {import("./functions").RowspanType | import("./functions").ColspanType} rowObj 
     */
    addRow(rowObj){
        this.#dataArray.push(rowObj);
        if(this.#addCallback)
            this.#addCallback(rowObj);
    }
}

export {Manager}