<template>

    <div class="filter-card">
      <div class="border-4 h-9 w-16 rounded-full flex" @click="setPriceRangeSwitchState" :class="priceRangeSwitchState ? 'justify-end' : 'justify-start'">
        <div class="w-7 h-7 bg-black rounded-full"></div>
      </div>
      <h2 class="ml-4 text-lg">Oferta z widełkami</h2>
    </div>
  
    
</template>

<script setup>
  const {priceRangeSwitchState , setPriceRangeSwitchState} = useFilters();




</script>