<template>
    <!-- filtr tagi -->
    <div class="w-full h-28 bg-white flex justify-center flex-wrap overflow-y-auto items-center">
        <div class="code-tag" 
             v-for="(technology, index) in technologies" 
             :key="index" 
             @click="tagActive(index)" 
             :class="technology.isActive ? 'bg-green-300' : 'bg-white'">
            <p>{{ technology.name }}</p>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    // Inicjujemy technologies jako tablicę obiektów z dodatkową właściwością `isActive`
    const technologies = ref([
      { name: 'HTML', isActive: false },
      { name: 'JavaScript', isActive: false },
      { name: 'React.js', isActive: false },
      { name: 'C#', isActive: false },
      { name: 'CSS', isActive: false }
    ]);

    // Funkcja zmieniająca stan aktywności dla wybranego tagu
    const tagActive = (index) => {
        technologies.value[index].isActive = !technologies.value[index].isActive;
    }
</script>

<style scoped>
  .code-tag {
    @apply border-4 rounded-full h-9 max-w-fit pl-4 pr-4 flex items-center m-2;
  }
</style>
