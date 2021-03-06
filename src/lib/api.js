import axios from 'axios'
import { getToken } from './auth'
import { baseUrl } from '../config'

function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

export function getAllStores() {
  return axios.get(`${baseUrl}/stores/`)
}

export function getSingleStore(storeId) {
  return axios.get(`${baseUrl}/stores/${storeId}/`)
}

export function editSingleStore(storeId, formData) {
  return axios.get(`${baseUrl}/stores/${storeId}/`, formData, headers())
}

export function deleteStore(storeId) {
  return axios.delete(`${baseUrl}/stores/${storeId}/`, headers())
}

export function newStore(formData) {
  return axios.post(`${baseUrl}/stores/`, formData, headers())
}

export function getAllCategories() {
  return axios.get(`${baseUrl}/stores/category/`)
}

export function register(formData) {
  return axios.post(`${baseUrl}/auth/register/`, formData)
}

export function login(formData) {
  return axios.post(`${baseUrl}/auth/login/`, formData)
}

export function profilePage(profileId) {
  return axios.get(`${baseUrl}/auth/profile/${profileId}/`, headers())
}

export function addComment(storeId, comment) {
  return axios.post(`${baseUrl}/stores/${storeId}/comments/`, comment, headers())
}

export function deleteComment(storeId, commentId) {
  return axios.delete(`${baseUrl}/stores/${storeId}/comments/${commentId}/`, headers())
}

export function favourite(storeId, userId) {
  return axios.post(`${baseUrl}/stores/${storeId}/favourite/`, userId, headers())
}