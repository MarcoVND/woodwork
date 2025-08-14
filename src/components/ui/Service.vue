<script setup lang="ts">
interface Props {
  title: string;
  class?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div :class="`flex flex-col items-start justify-end pl-2 pb-2 w-full h-[200px] md:w-[250px] md:h-[350px] rounded-2xl ${props.class || ''}`">
    <p class="text-2xl font-black text-white">{{ props.title }}</p>
  </div>
</template>

<style scoped></style>
