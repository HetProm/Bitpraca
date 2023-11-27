<template>
  <div class="bg-black w-full lg:flex sticky" style="z-index: 2;">
    <lvl_slider />

    <code_tags />
    
    <btn_switch_remotejob />
 

    <btn_switch_pricepool />

    

</div>


</template>

<script setup>
  import btn_switch_remotejob from './btn_switch_remotejob.vue';
  import btn_switch_pricepool from './btn_switch_pricepool.vue';
  import lvl_slider from './lvl_slider.vue';
  import code_tags from './code_tags.vue';

  

</script>

<style scoped>
  .stick {
  @apply border-2 w-1 h-12 ;

  }


  .filter-card{
    @apply w-full h-28 bg-white flex justify-center items-center ;
  }


 




</style>

