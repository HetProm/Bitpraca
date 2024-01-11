<template>
    <!-- filter levelu -->
    <div class="filter-card">

    <div class="mt-1 w-full flex flex-col items-center">
        <div class="w-full flex justify-center">
                <input
            type="range"
            id="experience-range"
            name="experience"
            min="0"
            max="3"
            step="1"
            v-model="input_value"
            class="slider w-56 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"

            />

        </div>

        <div class="flex text-base mt-2 w-full justify-center">
            <span class="text-gray-700 ml-[0.7rem]">All</span>
            <span class="text-gray-700 ml-6">Junior</span>
            <span class="text-gray-700 ml-[1.85rem]">Mid</span>
            <span class="text-gray-700 ml-6">Senior</span>



        </div>
    </div>
</div>
</template>

<script setup>

const input_value = ref(0)

const { setExperienceLevel} = useFilters()

watch(input_value, (newValue) => {
    setExperienceLevel(input_value.value);
})



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