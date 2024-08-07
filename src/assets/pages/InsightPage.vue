<template>
  <div>
    <NavbarComponent />
    <ImageSlider2 />
    <InsightCards />
    <FooterContainer />
    <router-view />
  </div>
</template>

<script>

import InsightCards from '@/components/InsightCards.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterContainer from '@/components/FooterContainer.vue'
import ImageSlider2 from '@/components/ImageSlider2.vue'

export default {
  name: 'InsightPage',

  components: {
    InsightCards,
    NavbarComponent,
    FooterContainer,
    ImageSlider2,
  }
}
</script>