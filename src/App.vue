<template>
    <section>
        <active-user :username="user.name" :userage="user.age"></active-user>
        <user-data @user-data="updateUserData"></user-data>
    </section>
</template>

<script>
export default{
    data() {
        return {
            user: {
                name: 'Yasir',
                age: 24
            }
        }
    },
    methods: {
        updateUserData(name, age) {
            this.user.name = name;
            this.user.age = age;
        }
    }
};
</script>