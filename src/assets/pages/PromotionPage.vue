<template>
  <div>
    <NavbarComponent />
    <PromoDetails />
    <PromoDescription />
    <ImageSlider/>
    <FooterContainer />
    <router-view />
  </div>
</template>

<script>

import ImageSlider from '@/components/ImageSlider.vue'
import PromoDetails from '@/components/PromoDetails.vue'
import PromoDescription from '@/components/PromoDescription.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterContainer from '@/components/FooterContainer.vue'

export default {
  name: 'PromotionPage',

  components: {
    PromoDetails,
    ImageSlider,
    PromoDescription,
    NavbarComponent,
    FooterContainer,
  }
}
</script>