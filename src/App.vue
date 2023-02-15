<template>
    <ul>
        <learning-resource 
        v-for="res in storedResources" 
        :key="res.id"
        :title="res.title"
        :description="res.description"
        :link="res.link"
        ></learning-resource>
    </ul>
</template>

<script>
import LearningResoure from './components/learning-resources/LearningResoure.vue';

export default {
    components: {
        'learning-resource': LearningResoure
    },
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