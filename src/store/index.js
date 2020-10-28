import Vue from 'vue'
import Vuex from 'vuex'
import db from '../components/firebaseInit'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userProfile: false,

    currentUser: ''
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
    },
    setCurrentUser(state, val) {
      state.currentUser = val
    }
  },

  actions: {},
  modules: {}
})

export default store
