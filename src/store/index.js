import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0
  },
  mutations: {
    incCounter(state, ranNo) {
      state.counter += ranNo
    },
    decCounter(state, ranNo) {
      state.counter -= ranNo

    }
  },
  actions: {
    incCounter({ commit }) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        commit('incCounter', response.data)
      })
    },
    decCounter({ commit }) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        commit('decCounter', response.data)
      })
    }
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter
    }
  },
  modules: {
  }
})
