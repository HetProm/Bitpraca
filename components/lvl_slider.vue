<template>
    <!-- filter levelu -->
    <div class="filter-card">

    <div class="mt-1 w-full ">
        <div class="w-full flex justify-center">
                <input
            type="range"
            id="experience-range"
            name="experience"
            min="0"
            max="2"
            step="1"
            v-model="experienceLevel"
            class="slider w-56 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"

            />
        </div>

        <div class="flex justify-evenly text-base mt-2">
            <span class="text-gray-700 ">Junior</span>
            <span class="text-gray-700">Mid</span>
            <span class="text-gray-700">Senior</span>
        </div>
    </div>
</div>
</template>

<script setup>
 import {ref} from 'vue';

 const experienceLevel = ref(0); // 0 for Junior, 1 for Mid, 2 for Senior


</script>

<style scoped>
    
  .slider::-webkit-slider-thumb {
  
  -webkit-appearance: none;
  appearance: none;
  width: 1em;
  height: 1em;
  background: #4CAF50;
  cursor: pointer;
  border-radius: 50%;
  border: 0;
}

</style>