import axios from 'axios'
import Noty from 'noty'
export default {
  state: {
    user: {},
    auth: false
  },
  getters: {
    user: (state) => {
      return state.user
    },
    first_name: (state) => {
      return state.user.first_name
    },
    last_name: (state) => {
      return state.user.last_name
    },
    auth: (state) => {
      return state.auth
    }
  },
  mutations: {
    mutLogin: (state, payload) => {
      state.user = payload
      state.auth = true
    },
    mutLogout: (state) => {
      state.user = {}
      state.auth = false
    }
  },
  actions: {
    nuxtServerInit ({ commit }, { req }) {
      if (req.session && req.session.authUser) {
        commit('mutLogin', req.session.authUser)
      }
    },
    actLogin (state, data) {
      axios.post('/api/auth/login', data).then((data) => {
        console.log(data.data)
        state.commit('mutLogin', data.data)
        window.location.replace('/admincp')
      }).catch((e) => {
        console.log(e)
        const err = e.response.data[0]
        new Noty({
          type: 'error',
          text: err.message
        }).show()
      })
    },
    actLogout (state) {
      axios.post('/api/auth/logout').then((data) => {
        state.commit('mutLogout')
      }).catch((e) => {
        console.log(e)
      })
    }
  }
}
