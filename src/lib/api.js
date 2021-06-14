import axios from 'axios'

const baseUrl = '/api'

export function getAllStores() {
  return axios.get(`${baseUrl}/stores/`)
}

export function getSingleStore(storeId) {
  return axios.get(`${baseUrl}/stores/${storeId}/`)
}

export function register(formData) {
  return axios.post(`${baseUrl}/auth/register/`, formData)
}

export function login(formData) {
  return axios.post(`${baseUrl}/auth/login/`, formData)
}