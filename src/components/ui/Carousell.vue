<script setup lang="ts">
import first from '../../assets/img/resina_1.jpg';
import second from '../../assets/img/resina_2.jpg';
import third from '../../assets/img/resina_3.jpg';
import four from '../../assets/img/resina_4.jpg';

</script>

<template>
  <div class="carousel w-full">
    <div id="item1" class="carousel-item w-full">
      <img
        :src="first"
        class="w-full"
      />
    </div>
    <div id="item2" class="carousel-item w-full">
      <img
        :src="second"
        class="w-full"
      />
    </div>
    <div id="item3" class="carousel-item w-full">
      <img
        :src="third"
        class="w-full"
      />
    </div>
    <div id="item4" class="carousel-item w-full">
      <img
        :src="four"
        class="w-full"
      />
    </div>
  </div>
  <div class="flex w-full justify-center gap-2 py-2">
    <a href="#item1" class="btn btn-xs">1</a>
    <a href="#item2" class="btn btn-xs">2</a>
    <a href="#item3" class="btn btn-xs">3</a>
    <a href="#item4" class="btn btn-xs">4</a>
  </div>
</template>

<style scoped></style>
