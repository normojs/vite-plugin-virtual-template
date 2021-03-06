import { getXx } from '../utils/db'

export const state = () => {
  return {
    path: '/121',
    info: 'File system based vuex plugin for Vite',
    token: null,
  }
}
export const mutations = {
  setToken(state: any, data: any) {
    state.token = data + getXx()
  },
  test(state: any, data: any) {
    state.token = data + getXx()
  },
}
