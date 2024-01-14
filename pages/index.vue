<template>
  <div class="h-screen background-gradient w-full overflow-hidden">
    <div class="h-full">
      <div class="h-[16%] lg:h-[20%]">
        <filters-mobile v-if="isMobile" />
        <filters v-else />
        <transition name="movein">
          <div class=" bg-green-700 w-full text-center p-1 sticky z-[1]"  v-if="isAnyFilterChanged" > 
            <button style="color: white;" @click="refreshInitialState()">Zastosuj</button>
          </div>
        </transition>
      
      </div>
  
      <main class="h-[86%] lg:h-[80%] mt-[2em]">
         <searchbar /> 
         <offert />  
        
      </main>

    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import Offert from '~/components/offert.vue';
  import Searchbar from '~/components/searchbar.vue';
  import Filters from '~/components/filters.vue';
  import FiltersMobile from '~/components/filters-mobile.vue';



  const config = useRuntimeConfig();
    try {
        const DB_OPTIONS = {
            dbName: config.dbName,
            user: config.user,
            pass: config.pass,
            authSource: config.authSource
        };
        await mongoose.connect(config.dburl, DB_OPTIONS);
        console.log("Connected Succesfully");
    } catch (error) {
        console.log(error);
        
    }



  const { technologies, experienceLevel, remoteworkSwitchState, priceRangeSwitchState, toggleFilterhrefresh } = useFilters();

  let initialState = ref({
    technologies: technologies.value.map(tech => ({ ...tech })), 
    experienceLevel: experienceLevel.value,
    remoteworkSwitchState: remoteworkSwitchState.value,
    priceRangeSwitchState: priceRangeSwitchState.value
  });

  function refreshInitialState() {
    initialState.value = {
      technologies: technologies.value.map(tech => ({ ...tech })), 
      experienceLevel: experienceLevel.value,
      remoteworkSwitchState: remoteworkSwitchState.value,
      priceRangeSwitchState: priceRangeSwitchState.value
    };
    
    toggleFilterhrefresh();
  }

  const isAnyFilterChanged = computed(() => {
    return !isEqual(initialState.value.technologies, technologies.value) ||
          initialState.value.experienceLevel !== experienceLevel.value ||
          initialState.value.remoteworkSwitchState !== remoteworkSwitchState.value ||
          initialState.value.priceRangeSwitchState !== priceRangeSwitchState.value;
  });


  function isEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i].isActive !== arr2[i].isActive) {
        return false;
      }
    }

    return true;
  }







  const isMobile = ref(null);

  onMounted(() => {
    
    isMobile.value = window.innerWidth < 768;

    const updateMobileStatus = () => {
      isMobile.value = window.innerWidth < 768;
    };

    window.addEventListener('resize', updateMobileStatus);

 
    onBeforeUnmount(() => {
      window.removeEventListener('resize', updateMobileStatus);
    });
  });
</script>

<style scoped>
.movein-enter-active, .movein-leave-active {
  transition: transform 0.5s;
  position: sticky;
  
}
.movein-enter-from, .movein-leave-to {

  transform: translateY(-100%);
  
}
  .background-gradient{
    background-image: linear-gradient(#FF8080, #FFCF96, #F6FDC3, #CDFAD5);
  }
</style>