export function setToken(token) {
  window.localStorage.setItem('token', token)
}

export function getToken() {
  return window.localStorage.getItem('token')
}

export function setId(id) {
  window.localStorage.setItem('id', id)
}

export function getId() {
  return window.localStorage.getItem('id')
}

export function removeToken() {
  window.localStorage.removeItem('token')
}

export function getPayload() {
  const token = getToken()
  if (!token) return false
  const parts = token.split('.')
  if (parts.length < 3) return false
  return JSON.parse(atob(parts[1])) 
}