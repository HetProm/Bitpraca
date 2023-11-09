<template>

   <div class="filter-card">
      <div class="border-4 h-9 w-16 rounded-full flex" @click="remotework_switch" :class="remotework_switch_state ? 'justify-end' : 'justify-start'">
        <div class="w-7 h-7 bg-black rounded-full"></div>
      </div>
      <h2 class="ml-4 text-lg">Praca zdalna</h2>
    </div>
    
</template>

<script setup>
  import { ref } from 'vue';
  const remotework_switch_state = ref(false);

  const remotework_switch = () => {
    remotework_switch_state.value = !remotework_switch_state.value; // Przełączanie wartości
  };


</script>