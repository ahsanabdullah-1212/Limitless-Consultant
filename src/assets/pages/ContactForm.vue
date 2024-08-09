<template>
    <div>
        <NavbarComponent />
        <ContactUs />
        <FooterContainer />
        <router-view />
    </div>
</template>

<script>

import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterContainer from '@/components/FooterContainer.vue'
import ContactUs from '@/components/ContactUs.vue'
export default {
    name: 'ContactForm',

    components: {
        ContactUs,
        FooterContainer,
        NavbarComponent,
    }
}
</script>