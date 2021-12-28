export default {
    state: {
      theme: {}
    },
    mutations: {
      setTheme(state, theme) {
        state.theme = theme;
      }
    },
    getters: {
      getTheme: (state) => {
        return state.theme;
      }
    },
    actions: {
      toggleTheme( { state, commit } ) {
  
        switch (state.theme) {
          case 'light':
            commit('setTheme', 'dark')
            break;
  
          default:
            commit('setTheme', 'light')
            break;
        }
      },
      initTheme( { commit } ) {
        
        const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (userPrefersDark)
          commit('setTheme', 'dark')
        else
          commit('setTheme', 'light')
  
      },
    }
  }