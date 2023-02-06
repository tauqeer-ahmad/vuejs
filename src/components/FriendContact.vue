<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible? 'Hide': 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ friend.phone }}</li>
            <li><strong>Email:</strong>{{ friend.email }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'yasir',
                name: 'yasir mughal',
                phone: '1234 5678 90',
                email: 'yasir@gmail.com'
            }
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
};
</script>