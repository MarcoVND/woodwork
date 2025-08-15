<script setup lang="ts"></script>

<template>
  <div class="parent w-1/2">
    <div class="div1 about-us-first w-full h-[300px]"></div>
    <div class="div2 about-us-second w-[300px] h-[300px]"></div>
    <div class="div3 about-us-third w-[300px] h-[300px]"></div>
  </div>
</template>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 8px;
}

.div1 {
  grid-column: span 2 / span 2;
}

.div2 {
  grid-row-start: 2;
}

.div3 {
  grid-row-start: 2;
}
</style>
