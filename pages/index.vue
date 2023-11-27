<template>
    <div class="h-screen background-gradient">
      <div class="custom-shadow h-full">
        <div class="h-[16%] lg:h-[20%]">
        <filters-mobile v-if="isMobile" />
        <filters v-else />
        <transition name="movein">
          <div class=" bg-green-700 w-full text-center p-1 sticky" style="z-index: 1;" v-if="isAnyFilterChanged" > 
            <button style="color: white;" @click="refreshInitialState()">Zastosuj</button>
          </div>
        </transition>
        
      </div>
    
        <main class="h-[86%] lg:h-[80%]">
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

    //const refreshClick = ref(false);

 

    const {technologies, experienceLevel, remoteworkSwitchState, priceRangeSwitchState, toggleFilterhrefresh} = useFilters();
    let initialState = ref({
      technologies: technologies.value.filter((tech) => { return tech.isActive === true}).length, 
      experienceLevel: experienceLevel.value, 
      remoteworkSwitchState: remoteworkSwitchState.value, 
      priceRangeSwitchState: priceRangeSwitchState.value
    });
    console.log(initialState)


    function refreshInitialState() {

      initialState.value = {
        technologies: technologies.value.filter((tech) => { return tech.isActive === true}).length, 
        experienceLevel: experienceLevel.value, 
        remoteworkSwitchState: remoteworkSwitchState.value, 
        priceRangeSwitchState: priceRangeSwitchState.value
      };
      toggleFilterhrefresh();

    }
    
    const isAnyFilterChanged = computed(() => {
    return initialState.value.technologies !== technologies.value.filter((tech) => { return tech.isActive === true}).length ||
          initialState.value.experienceLevel !== experienceLevel.value ||
          initialState.value.remoteworkSwitchState !== remoteworkSwitchState.value ||
          initialState.value.priceRangeSwitchState !== priceRangeSwitchState.value;
    });







  
    // Referencja reaktywna do przechowywania stanu, czy urządzenie jest mobilne
    const isMobile = ref(null);
  
    onMounted(() => {
      // Dostęp do `window` jest bezpieczny w `onMounted`
      isMobile.value = window.innerWidth < 768;
  
      const updateMobileStatus = () => {
        isMobile.value = window.innerWidth < 768;
      };
  
      window.addEventListener('resize', updateMobileStatus);
  
      // Oczyszczenie nasłuchiwania w `onBeforeUnmount`
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
  .movein-enter-from, .movein-leave-to /* <= 2.1.8: .fade-leave */ {
 
    transform: translateY(-100%);
    
  }
    .background-gradient{
      background-image: linear-gradient(#FF8080, #FFCF96, #F6FDC3, #CDFAD5);
    }
    .custom-shadow{
     
      -webkit-box-shadow: inset 0px -4px 24px -4px rgba(81, 81, 113, 1);
      -moz-box-shadow: inset 0px -4px 24px -4px rgba(81, 81, 113, 1);
      box-shadow: inset 0px -4px 24px -4px rgba(81, 81, 113, 1);
    }
  </style>