import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
    state() {
        return {
            counter: 0,
        }
    },
    mutations: {
        increment(state) {
            state.counter++;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        },
    },
    actions: {
        increment(context) {
            setTimeout(function () {
                context.commit('increment');
            }, 2000);
        },
        increase(context, payload) {
            context.commit('increase', payload);
        },
    },
    getters: {
        finalCounter(state) {
            return state.counter * 2;
        },
    }
};

const authModule = {
    state() {
        return {
            isLoggedIn: false
        }
    },
    mutations: {
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth;
        }
    },
    actions: {
        login(context) {
            context.commit('setAuth', { isAuth: true });
        },
        logout(context) {
            context.commit('setAuth', { isAuth: false });
        }
    },
    getters: {
        userIsLoggedIn(state) {
            return state.isLoggedIn;
        }
    }
}

const store = createStore({
    modules: {
        numbers: counterModule,
        authentication: authModule
    },

});

const app = createApp(App);

app.use(store);

app.mount('#app');
