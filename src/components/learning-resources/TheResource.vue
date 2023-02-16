<template>
    <div>
        <base-card>
            <base-button @click="setSelectedTab('stored-resources')" :mode="storedResMode">Stored
                Resources</base-button>
            <base-button @click="setSelectedTab('add-resource')" :mode="addResMode">Add Resource</base-button>
        </base-card>
        <keep-alive>
            <component :is="selectedTab"></component>
        </keep-alive>
    </div>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
    components: {
        'stored-resources': StoredResources,
        'add-resource': AddResource
    },
    computed: {
        storedResMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat';
        },
        addResMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat';
        }
    },
    data() {
        return {
            selectedTab: 'stored-resources',
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
    },
    provide() {
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            removeResource: this.removeResource
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addResource(title, description, url) {
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: url
            }
            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources';
        },
        removeResource(resId) {
            const resIndex = this.storedResources.findIndex(res => res.id === resId);
            this.storedResources.splice(resIndex, 1);
        }
    }
}
</script>