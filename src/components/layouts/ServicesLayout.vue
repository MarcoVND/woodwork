<script setup lang="ts"></script>

<template>
  <main class="w-full">
    <section class="flex flex-col items-start w-3/4 mx-auto my-14">
      <h2 class="text-3xl font-bold">Nuestros servicios</h2>
      <article class="flex flex-wrap gap-4 mt-6">
        <slot />
      </article>
    </section>
  </main>
</template>

<style scoped></style>
