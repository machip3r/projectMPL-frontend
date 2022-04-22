import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
  },
  getters: {},
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
  },
  actions: {
    async login({commit}, user) {
      try {
        const result = await fetch(
          "https://projectmpl-backend.herokuapp.com/api/user/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          }
        );

        const userDB = await result.json();
        commit("setToken", userDB.data.token);
        localStorage.setItem("tokenLocal", userDB.data.token);
      } catch (error) {
        console.log("Error on login():" + error);
      }
    },
    getToken({commit}) {
      if (localStorage.getItem("tokenLocal"))
        commit("setToken", localStorage.getItem("tokenLocal"));
      else commit("setToken", null);
    },
    logOut({commit}) {
      commit("setToken", null);
      localStorage.removeItem("tokenLocal");
    },
  },
  modules: {},
});
