<script setup lang="ts">
    interface Props {
        src: string;
        alt?: string;
    }

    const props = defineProps<Props>()
</script>

<template>
  <figure>
    <img :src="props.src" :alt="props.alt">
  </figure>
</template>

<style scoped>
    
</style>