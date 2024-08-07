<template>
    <div>
        <NavbarComponent />
        <AboutDetail />
        <FooterContainer />
        <router-view />
    </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import AboutDetail from '@/components/AboutDetail.vue'
import FooterContainer from '@/components/FooterContainer.vue'
export default {
    name: 'AboutPage',

    components: {
        AboutDetail,
        FooterContainer,
        NavbarComponent,
    }
}
</script>