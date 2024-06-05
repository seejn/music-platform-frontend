import { createStore } from 'vuex'

const store = createStore({
  state: {
    isLoggedIn: Boolean(window.localStorage.getItem('user')),
    user: JSON.parse(window.localStorage.getItem('user')),
  },
  mutations: {
    setUser(state, user) {
      state.user = user
      state.isLoggedIn = true
      window.localStorage.setItem('user', JSON.stringify(user))
    },
    clearUser(state) {
      state.user = null
      state.isLoggedIn = false
      window.localStorage.removeItem('user')
    },
  },
  actions: {
    login({ commit }, response) {
        console.log("actions", response)
        commit('setUser', response.user)
        localStorage.setItem('access_token', response.access)
        localStorage.setItem('refresh_token', response.refresh)
    },
    logout({ commit }) {
      commit('clearUser')
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
    },
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn,
    getUser: state => state.user,
  },
})

export default store
