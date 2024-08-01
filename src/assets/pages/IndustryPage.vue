<template>
    <div>
      <NavbarComponent/>
      <IndustrialPage/>
      <FooterContainer/>
      <router-view/>
    </div>
  </template>
  
  <script>

import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterContainer from '@/components/FooterContainer.vue'
import IndustrialPage from '@/components/IndustrialPage.vue'

  export default {
    name: 'IndustryPage',

    components: {
     NavbarComponent,
     FooterContainer,
     IndustrialPage,
    }
  }
  </script>

  