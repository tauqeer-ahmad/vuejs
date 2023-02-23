<template>
    <button @click="inc">Add 1</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        // addOne() {
        //     this.$store.dispatch('increment');
        // }
        ...mapActions({
            inc: 'increment'
        })
    }
};
</script>