<script setup lang="ts">
import HeroLayout from "./components/layouts/HeroLayout.vue";
import MainLayout from "./components/layouts/MainLayout.vue";
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
  </MainLayout>
</template>

<style scoped></style>
