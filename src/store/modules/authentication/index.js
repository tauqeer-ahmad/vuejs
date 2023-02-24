import authenticationMutations from './mutations.js';
import authenticationActions from './actions';
import authenticationGetters from './getters';

export default {
    namespaced: true,
    state() {
        return {
            isLoggedIn: false
        }
    },
    mutations: authenticationMutations,
    actions: authenticationActions,
    getters: authenticationGetters
}