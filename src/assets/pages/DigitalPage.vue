<template>
  <div>
    <NavbarComponent2 />
    <DigitalHero />
    <ExpertiseDeliver />
    <ExpertiseBoxes />
    <CustomizeSolution />
    <CapabilityBoxes />
    <CanvaElemt />
    <DigitalFuture />
    <BeFirst />
    <FooterContainer />
    <router-view />
  </div>
</template>

<script>

import BeFirst from '@/components/BeFirst.vue'
import CanvaElemt from '@/components/CanvaElemt.vue'
import ExpertiseDeliver from '@/components/ExpertiseDeliver.vue'
import DigitalFuture from '@/components/DigitalFuture.vue'
import CapabilityBoxes from '@/components/CapabilityBoxes.vue'
import NavbarComponent2 from '@/components/NavbarComponent2.vue'
import CustomizeSolution from '@/components/CustomizeSolution.vue'
import FooterContainer from '@/components/FooterContainer.vue'
import ExpertiseBoxes from '@/components/ExpertiseBoxes.vue'
import DigitalHero from '@/components/DigitalHero.vue'

export default {
  name: 'ServicesPage',

  components: {
    BeFirst,
    CanvaElemt,
    NavbarComponent2,
    DigitalFuture,
    ExpertiseDeliver,
    CapabilityBoxes,
    ExpertiseBoxes,
    FooterContainer,
    CustomizeSolution,
    DigitalHero,
  }
}
</script>