<template>
    <div>
      <NavbarComponent/>
      <ImageSlider2/>
      <FooterContainer/>
      <router-view/>
    </div>
  </template>
  
  <script>

import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterContainer from '@/components/FooterContainer.vue'
import ImageSlider2 from '@/components/ImageSlider2.vue'

  export default {
    name: 'InsightPage',

    components: {
     NavbarComponent,
     FooterContainer,
     ImageSlider2,
    }
  }
  </script>

  