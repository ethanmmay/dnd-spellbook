
// @ts-ignore
export const api = axios.create({
    baseURL: 'https://www.dnd5eapi.co/api/',
    timeout: 5000
})

// @ts-ignore
export const sandboxAPI = axios.create({
    baseURL: 'http://bcw-sandbox.herokuapp.com/api/',
    timeout: 5000
})