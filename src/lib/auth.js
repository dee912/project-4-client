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

console.log('toke', getPayload().sub)


export function isAuthenticated() {
  const payload = getPayload()
  if (!payload) return false
  const now = Math.round(Date.now() / 1000)
  return now < payload.exp
}

export function isOwner(store) {
  const payload = getPayload()
  if (!payload || !isAuthenticated) return false
  return payload.sub === store
}

