import { createStore } from "vuex";

export default createStore({
  state: { PagePlacement: "home" },
  getters: {},
  mutations: {
    setNewPagePlacement(state, payload) {
      state.PagePlacement = payload.page;
    },
  },
  actions: {},
  modules: {},
});
