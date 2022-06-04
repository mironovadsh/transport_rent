import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
    
}

export const fetchTypes = async () => {
    const {data} = await $authHost.get('api/type')
    return data
    
}


export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
    
}

export const fetchBrands = async () => {
    const {data} = await $authHost.get('api/brand')
    return data
    
}


export const createTS = async (TS) => {
    const {data} = await $authHost.post('api/ts', TS)
    return data
    
}

export const fetchTS= async (typeId, brandId) => {
    const {data} = await $authHost.get('api/ts')
   
    return data
    
}
export const fetchOneTS= async (id) => {
    const {data} = await $authHost.get('api/ts/' +id)
    return data
    
}

