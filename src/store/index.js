import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import axios from 'axios'
import theme from './modules/theme'
import search from './modules/search'

export default createStore({
  state: {
    jobs: [],
  },
  mutations: {
    setJobs(state, jobs) {
      state.jobs = jobs;
    }
  },
  actions: {
    async fetchJobs( {commit} ) {
      await axios
      .get(process.env.VUE_APP_API)
      .then((res) => {
        commit('setJobs', res.data)
      });
    }
  },
  getters: {
    getJobById: (state) => (id) => {
      return state.jobs.find(job => job._id === id)
    }
  },
  modules: {
    theme,
    search
  },
  plugins: [
    createPersistedState({
      paths: ['jobs', 'search'],
    }),
  ],
});