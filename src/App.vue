<script setup lang="ts">
import ArticleLayout from "./components/layouts/ArticleLayout.vue";
import HeroLayout from "./components/layouts/HeroLayout.vue";
import MainLayout from "./components/layouts/MainLayout.vue";
import ServicesLayout from "./components/layouts/ServicesLayout.vue";
import Service from "./components/ui/Service.vue";
import DesktopHeroContent from "./components/widgets/DesktopHeroContent.vue";
import MobileHeroContent from "./components/widgets/MobileHeroContent.vue";
import { useViewport } from "./composables/useViewportSize";

const { isMobile, isTablet, isDesktop } = useViewport();
</script>

<template>
  <MainLayout>
    <HeroLayout>
      <MobileHeroContent v-if="isMobile() || isTablet()" />
      <DesktopHeroContent v-else />
    </HeroLayout>

    <ServicesLayout id="services">
      <Service title="Mesas Encapsuladas" class="service-one" />

      <Service title="Paredes Encapsuladas" class="service-two" />

      <Service title="Puertas Encapsuladas" class="service-three" />

      <Service title="Carpintería" class="service-four" />

      <Service title="Pisos Encapsulados" class="service-five" />

      <Service title="Cubiertas de Cocina" class="service-six" />

      <Service title="Reparación de mesas" class="service-seven" />
    </ServicesLayout>

    <ArticleLayout>
      <article class="md:w-1/2">
        <div class="flex flex-col items-center gap-4 md:w-2/4 mx-auto">
          <p class="font-black text-2xl">
            Creamos más que muebles: creamos experiencias visuales.
          </p>
          <p>
            ¡Dale vida a tus espacios con estilo! Fabricamos Mesas Encapsuladas,
            Pisos de Porcelanato Liquido 3D y Carpintería creativa brindando
            acabados modernos para hogares, negocios o donde quieras destacar.
            Contáctanos cuanto antes”
          </p>
        </div>
      </article>
      <article v-if="isDesktop()" class="w-1/2 h-full article-bg"></article>
    </ArticleLayout>
  </MainLayout>
</template>

<style scoped></style>
