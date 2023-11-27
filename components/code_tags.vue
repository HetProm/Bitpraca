<template>
  <!-- filtr tagi -->
  <div class="w-full h-28 bg-white flex justify-center flex-wrap overflow-y-auto items-center">
      <div class="code-tag" 
           v-for="(technology, index) in technologies" 
           :key="index" 
           @click="toggleTechnology(index)" 
           :class="technology.isActive ? 'bg-green-300' : 'bg-white'">
          <p>{{ technology.name }}</p>
      </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';


  const {technologies, toggleTechnology} = useFilters();


</script>

<style scoped>
.code-tag {
  @apply border-4 rounded-full h-9 max-w-fit pl-4 pr-4 flex items-center m-2;
  user-select: none;
}
</style>
