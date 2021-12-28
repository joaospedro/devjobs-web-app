export default {
    namespaced: false,
    state: {
        location: '',
        general: '',
        fullTime: false,
    },
    mutations: {
        searchLocation(state, location) {
            state.location = location;
        },
        searchGeneral(state, general) {
            state.general = general;
        },
        searchFullTime(state, full) {
            state.fullTime = full;
        }
    },
}