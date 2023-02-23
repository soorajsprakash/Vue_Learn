<template>
    <base-card>
        <base-button
            @click="setSelectedTab('stored-resources')">
            Stored Resources
        </base-button>
        <base-button
            @click="setSelectedTab('add-resources')">
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
            selectedTab: 'stored-resources'
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab
        }
    }
}
</script>