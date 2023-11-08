
<template>
    <q-page>
        <heroSection />
        <bodySection />
        <footerLayout />
    </q-page>
</template>

<script>
import heroSection from './components/heroSection.vue'
import bodySection from './components/bodySection.vue'
import footerLayout from '../../layouts/footer.vue'
    export default {
        name: 'home-page',
        components: {
            heroSection,
            bodySection,
            footerLayout
        }
    }
</script>