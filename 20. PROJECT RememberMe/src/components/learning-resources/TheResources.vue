<template>
    <base-card>
        <base-button
            @click="setSelectedTab('stored-resource')"
            :mode="StoredResourceButtonMode">
            Stored Resources
        </base-button>
        <base-button
            @click="setSelectedTab('add-resource')"
            :mode="AddResourceButtonMode">
            Add Resources
        </base-button>
    </base-card>
    <component :is="selectedTab"></component>
</template>

<script>
import StoredResource from './StoredResource.vue'
import AddResource from './AddResource.vue'


export default {
    components: {
        StoredResource,
        AddResource,
    },
    data() {
        return {
            selectedTab: 'stored-resource',
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'Official vuejs documentation',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'googl',
                    title: 'Google',
                    description: 'Google search engine',
                    link: 'https://google.com'
                },
            ]
        }
    },
    provide() {
        return {
            resources: this.storedResources
        }
    },
    computed: {
        StoredResourceButtonMode() {
            return this.selectedTab === 'stored-resource' ? null : 'flat'
        },
        AddResourceButtonMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat'
        },
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab
        }
    }
}
</script>