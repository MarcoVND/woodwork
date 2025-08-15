<script setup lang="ts">
import Image from "../ui/Image.vue";
import resin4Image from "../../assets/img/resina_4.jpg";
</script>

<template>
  <div class="flex flex-col gap-2 items-center justify-center px-10 py-5">
    <h1 class="text-4xl font-bold mb-4">¡Bienvenidos!</h1>
    <p class="text-lg text-gray-600 text-center">
      Somos un negocio creativo y especializado en diseño y fabricación de
      muebles y pisos de resina epóxica y carpintería a medida. Combinamos la
      resistencia de la resina con la calidez de la madera para transformar
      espacios en ambientes únicos, funcionales y llenos de estilo.
    </p>

    <a href="https://wa.link/qx0dko" class="btn btn-primary" target="_blank">Contáctanos</a href="https://wa.link/qx0dko">

    <Image :src="resin4Image" alt="servicio de muebles" />
  </div>
</template>

<style scoped></style>
