<template>
    <div class=" min-h-screen background-gradient custom-shadow ">
      <filters-mobile v-if="isMobile" />
      <filters v-else />
  
      <main>
        <searchbar />
        <offert />
      </main>
    </div>
  </template>
  
  <script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue';
    import Offert from '~/components/offert.vue';
    import Searchbar from '~/components/searchbar.vue';
    import Filters from '~/components/filters.vue';
    import FiltersMobile from '~/components/filters-mobile.vue';
  
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
    .background-gradient{
      
      background-image: linear-gradient(#FF8080, #FFCF96, #F6FDC3, #CDFAD5);
    }
    .custom-shadow{
      -webkit-box-shadow: inset 0px -4px 24px -4px rgba(81, 81, 113, 1);
      -moz-box-shadow: inset 0px -4px 24px -4px rgba(81, 81, 113, 1);
      box-shadow: inset 0px -4px 24px -4px rgba(81, 81, 113, 1);
    }
  </style>