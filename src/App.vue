<script setup lang="ts">
import HeroLayout from "./components/layouts/HeroLayout.vue";
import MainLayout from "./components/layouts/MainLayout.vue";
import ServicesLayout from "./components/layouts/ServicesLayout.vue";
import Service from "./components/ui/Service.vue";
import DesktopHeroContent from "./components/widgets/DesktopHeroContent.vue";
import MobileHeroContent from "./components/widgets/MobileHeroContent.vue";
import {useViewport} from './composables/useViewportSize'

const {isMobile, isTablet} = useViewport()
</script>

<template>
  <MainLayout>
    <HeroLayout>
      <MobileHeroContent v-if="isMobile() || isTablet()"/>
      <DesktopHeroContent v-else />
    </HeroLayout>

    <ServicesLayout id="services">
      <Service title="Mesas Encapsuladas" class="service-one"/>
      
      <Service title="Paredes Encapsuladas" class="service-two"/>
      
      <Service title="Puertas Encapsuladas" class="service-three"/>
      
      <Service title="Carpintería" class="service-four"/>
      
      <Service title="Pisos Encapsulados" class="service-five"/>
      
      <Service title="Cubiertas de Cocina" class="service-six"/>
      
      <Service title="Reparación de mesas" class="service-seven"/>

    </ServicesLayout>
  </MainLayout>
</template>

<style scoped></style>
