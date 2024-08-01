<template>
    <div>
      <NavbarComponent/>
      <ServingPage/>
      <FooterContainer/>
      <router-view/>
    </div>
  </template>
  
  <script>

import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterContainer from '@/components/FooterContainer.vue'
import ServingPage from '@/components/ServingPage.vue'

  export default {
    name: 'ServicesPage',

    components: {
     NavbarComponent,
     FooterContainer,
     ServingPage,
    }
  }
  </script>

  