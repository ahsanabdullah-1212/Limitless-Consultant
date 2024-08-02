<template>
  <div>
    <NavbarComponent />
    <PromoDetails />
    <PromoDescription />
    <FooterContainer />
    <router-view />
  </div>
</template>

<script>

import PromoDetails from '@/components/PromoDetails.vue'
import PromoDescription from '@/components/PromoDescription.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterContainer from '@/components/FooterContainer.vue'

export default {
  name: 'PromotionPage',

  components: {
    PromoDetails,
    PromoDescription,
    NavbarComponent,
    FooterContainer,
  }
}
</script>