import { createStore } from 'vuex'

const storedUser = window.localStorage.getItem('user');
const user = storedUser ? JSON.parse(storedUser) : null;
const role = user ? user.role : null;

console.log(role)

const store = createStore({
  state: {
    playlists: [],
    isLoggedIn: Boolean(user),
    user: user,
    role: role
  },
  mutations: {
    setUser(state, user) {
      state.user = user
      state.isLoggedIn = true
      state.role = user.role
      window.localStorage.setItem('user', JSON.stringify(user))
    },
    clearUser(state) {
      state.user = null
      state.isLoggedIn = false
      state.role = false
      window.localStorage.removeItem('user')
    },


    SET_PLAYLISTS(state, playlists){
      state.playlists = playlists
    },
    UPDATE_PLAYLIST(state, playlist){
      const updatedPlaylists = state.playlists.map(data => {
        if(data.id === playlist.id){
          return playlist
        }else{
          return data
        }
      })
      state.playlists = updatedPlaylists
    }
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

    setPlaylists({commit}, playlists){
      commit("SET_PLAYLISTS", playlists)
    },
    updatePlaylist({commit}, playlist){
      commit("UPDATE_PLAYLIST", playlist)
    }
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn,
    getUser: state => state.user,
    getRole: state => state.role,
    getPlaylists: state => state.playlists
  },
})

export default store
