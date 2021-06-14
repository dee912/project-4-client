import axios from 'axios'

const baseUrl = '/api'

export function getAllStores() {
  return axios.get(`${baseUrl}/stores`)
}

export function getSingleStore(storeId) {
  return axios.get(`${baseUrl}/stores/${storeId}`)
}