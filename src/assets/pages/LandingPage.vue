<template>
    <div>
      <NavbarComponent2 />
      <HeroSection/>
      <RatingComponent/>
      <RatingBoxes/>
      <ClientWork/>
      <SpotlightDetails/>
      <NewsConsult/>
      <FeaturedInsights/>
      <CareerFti/>
      <LocationFti/>
      <FooterContainer />
      <router-view/>
    </div>
  </template>
  
  <script>
  import FooterContainer from '@/components/FooterContainer.vue'
  import NavbarComponent2 from '@/components/NavbarComponent2.vue'
  import HeroSection from '@/components/HeroSection.vue'
  import RatingComponent from '@/components/RatingComponent.vue'
  import RatingBoxes from '@/components/RatingBoxes.vue'
  import ClientWork from '@/components/ClientWork.vue'
  import SpotlightDetails from '@/components/SpotlightDetails.vue'
  import NewsConsult from '@/components/NewsConsult.vue'
  import FeaturedInsights from '@/components/FeaturedInsights.vue'
  import CareerFti from '@/components/CareerFti.vue'
  import LocationFti from '@/components/LocationFti.vue'
  
  export default {
    name: 'LandingPage',
    components: {
      NavbarComponent2,
      HeroSection,
      RatingComponent,
      RatingBoxes,
      ClientWork,
      SpotlightDetails,
      NewsConsult,
      FeaturedInsights,
      CareerFti,
      LocationFti,
      FooterContainer,
    }
  }
  </script>

  