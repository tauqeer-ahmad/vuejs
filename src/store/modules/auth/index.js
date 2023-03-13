import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';

export default {
    state() {
        return {
            userId: null,
            token: null,
            tokenExpiration: null,
            apiKey: process.env.VUE_APP_API_KEY,
            didAutoLogout: false
        }
    },
    actions,
    getters,
    mutations
}