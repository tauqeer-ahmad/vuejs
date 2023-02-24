import { createStore } from 'vuex';
import counterModule from './modules/counter/index.js';
import authModule from './modules/authentication/index.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import rootMutations from './mutations.js';

const store = createStore({
    modules: {
        numbers: counterModule,
        authentication: authModule
    },
    actions: rootActions,
    getters: rootGetters,
    mutations: rootMutations
});

export default store;