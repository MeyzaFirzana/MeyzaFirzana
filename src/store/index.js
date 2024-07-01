import { createStore } from 'vuex';

const store = createStore({
  state: {
    message: 'Hello Vuex',
  },
  mutations: {
    setMessage(state, newMessage) {
      state.message = newMessage;
    },
  },
  actions: {
    updateMessage({ commit }, newMessage) {
      commit('setMessage', newMessage);
    },
  },
  getters: {
    message: (state) => state.message,
  },
});

export default store;
