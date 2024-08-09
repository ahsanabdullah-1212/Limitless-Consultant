<template>
    <div>
      <NavbarComponent/>
      <VisitingVisa/>
      <FooterContainer/>
      <router-view/>
    </div>
  </template>
  
  <script>

import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterContainer from '@/components/FooterContainer.vue'
import VisitingVisa from '@/components/VisitingVisa.vue'

  export default {
    name: 'VisitVisa',

    components: {
     NavbarComponent,
     FooterContainer,
     VisitingVisa,
    }
  }
  </script>

  