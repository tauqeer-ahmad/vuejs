<template>
    <ul>
        <li v-for="resource in storedResources" :key="resource.id">{{ resource }}</li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The official vue.js documentation',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'Learn how to use googel',
                    link: 'https://google.com'
                }
            ]
        }
    }
}
</script>