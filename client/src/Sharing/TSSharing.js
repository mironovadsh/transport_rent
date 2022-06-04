import {makeAutoObservable} from "mobx";

export default class TSSharing {
    constructor() {
        this._types = []
        this._brands = []
        this._TS = []
        this._selectedType = {}
        this._selectedBrand = {}


        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setTS(TS) {
        this._TS = TS
    }

    setSelectedType(type) {
        //this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        //this.setPage(1)
        this._selectedBrand = brand
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get TS() {
        return this._TS
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }

   
}