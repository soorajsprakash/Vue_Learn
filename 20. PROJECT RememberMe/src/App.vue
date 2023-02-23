<template>
    <ul>
        <LearningResource 
            v-for="resource in storedResources"
            :key="resource.id"
            :title="resource.title"
            :description="resource.description"
            :link="resource.link"
        ></LearningResource>
    </ul>
</template>


<script>
import LearningResource from './components/learning-resources/LearningResource.vue'


export default {
    components: {
        LearningResource,
    },
    data() {
        return {
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
    }
}
</script>

