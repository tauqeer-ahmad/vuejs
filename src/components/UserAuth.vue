<template>
    <button @click="login" v-if="!isAuth">Login</button>
    <button @click="logout" v-if="isAuth">Logout</button>
</template>

<script>
export default {
    methods: {
        login() {
            this.$store.dispatch('authentication/login');
        },
        logout() {
            this.$store.dispatch('authentication/logout');
        }
    },
    computed: {
        isAuth() {
            return this.$store.getters['authentication/userIsLoggedIn'];
        }
    }
};
</script>