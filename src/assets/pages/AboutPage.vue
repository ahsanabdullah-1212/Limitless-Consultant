<template>
    <div>
        <NavbarComponent />
        <AboutDetail />
        <AboutSection/>
        <!-- <ImageSlider/> -->
        <FooterContainer />
        <router-view />
    </div>
</template>

<script>
// import ImageSlider from '@/components/ImageSlider.vue'
import AboutSection from '@/components/AboutSection.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
import AboutDetail from '@/components/AboutDetail.vue'
import FooterContainer from '@/components/FooterContainer.vue'
export default {
    name: 'AboutPage',

    components: {
        AboutDetail,
        // ImageSlider,
        AboutSection,
        FooterContainer,
        NavbarComponent,
    }
}
</script>