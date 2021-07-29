import Vue from 'vue';
import Vuex from '../vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state, num) {
      num = num || 1;
      state.count += num;
    }
  },
  actions: {
    increment({
      commit
    }) {
      commit('increment', 3)
    },
    asyncIncrement({
      commit
    }) {
      setTimeout(() => {
        commit('increment', 4)
      }, 1000)
    },
    promiseA({
      dispatch
    }) {
      dispatch('asyncIncrement').then(res => {
        console.log(res);
      })
    }
  },
  getters: {
    relateCount(state) {
      return state.count + 3
    }
  },
  modules: {
    foo: {
      // namespaced: true,
      state: {
        // return {
        count: 0
        // }
      },
      mutations: {
        decrement({
          state
        }) {
          state.count--;
        },
        increment({
          state
        }) {
          state.count++;
        },
      },
      actions: {
        decrement({
          commit
        }) {
          commit('decrement')
        }
      }
    }
  }
})

export default store;