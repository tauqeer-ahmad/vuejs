<template>
    <section>
        <div>
            <label>Username</label>
            <input type="text" v-model="username">
        </div>
        <div>
            <label>Age</label>
            <input type="number" v-model="age">
        </div>
        <button @click="setUserData">Set User Data</button>
    </section>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            age: ''
        }
    },
    methods: {
        setUserData() {
            this.$emit('user-data', this.username, this.age);
        }
    }
};
</script>