
<template>
  <div class="offert_list h-[85%]" v-bind="containerProps">
    <div v-bind="wrapperProps" >
      <div v-for="(offert, index) in list" :key="index" class="mx-auto max-w-7xl py-[24px] px-4 sm:px-8 lg:px-16 font-mono elementOffert h-[256px]">
        <div class="bg-white rounded-lg lg:flex items-center border border-black h-full shadow-lg">
          <div class="rounded-l-lg border-r border-black p-4 h-full hidden justify-center   md:flex">
            <img :src="'images/logo/'+offert.data.logo" :alt="offert.data.logo" class=" max-h-full max-w-full">
          </div>
          <div class=" flex-grow h-full ">
            <div class=" h-2/3 p-4">
              <div class="flex md:block items-center">
                <img :src="'images/logo/'+offert.data.logo"  :alt="offert.data.logo" class="block md:hidden h-14 mr-5">
                <h1 class=" text-2xl md:text-4xl">{{ offert.data.expectedTitle }}</h1>
              </div>
              
              <ul class="flex  md:mt-8 text-gray-700">
                <li class=" mr-5 flex">
                  <BriefcaseIcon class="h-6 w-6" />
                  example</li>
                <li class=" mr-5 flex">
                  <BriefcaseIcon class="h-6 w-6" />
                  {{ offert.data.expectedSchedules }}</li>
                <li class="flex">
                  <MapIcon class="h-6 w-6" />
                  Aktualizuj</li>
              </ul>
            </div>
            <div class=" border-t border-black  h-1/3 flex items-center p-4">
              <ul class="flex justify-evenly md:justify-between w-full flex-wrap ">
                <li class="mr-5" v-for="(level, tag) in offert.data.expectedQualifications" :key="tag">
                  {{ tag }}
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script setup>
import { BriefcaseIcon, MapIcon } from '@heroicons/vue/24/outline';
import {ref , onMounted, onUnmounted, watch} from 'vue';
import { useVirtualList, useInfiniteScroll } from '@vueuse/core'
const {refreshClick} = useFilters();
let typeRefresh = ref('filters');




const currentPage = ref(2);
const limit = 10;
const offerts = ref([]);
let isLoading = ref(false);
let total = ref(0);
const {data, error} = await useFetch(`/api/offerts?page=1&limit=10`);
offerts.value = await data.value.offerts;
total = data.value.total;


const { list, containerProps, wrapperProps} = useVirtualList(offerts, {
  itemHeight: 256,
  overscan: 2
})

useInfiniteScroll(
  containerProps.ref,
  async () =>{
    if (offerts.value.length < total ) {
      const {data, error} = await useFetch(offertsReqAPI(currentPage,limit, typeRefresh));
    
      await offerts.value.push(...data.value.offerts);
      currentPage.value++;
    }


  },
  {distance: 10}
)


function offertsReqAPI(currentPage,limit, type) {
  const {technologies, experienceLevel, remoteworkSwitchState, priceRangeSwitchState, searchTermFilter} = useFilters();
  let stableqpirequest = `/api/offerts?page=${currentPage.value}&limit=${limit}`
  if (type === 'filters') {
    let activeTechs = technologies.value
    .filter(tech => tech.isActive)
    .map(tech => tech.name);
    let techadd = activeTechs.length > 0 
    ? '&technologies='.concat(activeTechs.join(','))
    : '';
    let lvl = `&experienceLevel=${experienceLevel.value}`;
    let remotework = `&remotework=${remoteworkSwitchState.value}`
    let pricepool = `&pricepool=${priceRangeSwitchState.value}`
    return stableqpirequest.concat(`${lvl}${remotework}${pricepool}${techadd}`)
  }
  if (type === 'search') {
    return stableqpirequest.concat(`&searchOfferts=${searchTermFilter.value}`)


  }


}



const refreshOfferts = async (type) => {
  offerts.value = [];
  const {data, error} = await useFetch(offertsReqAPI(1,limit, type));
  total = data.value.total;
  offerts.value = (data.value.offerts);


  nextTick(() => {
    const element = document.querySelector('.offert_list');
    if (element) {
      element.scrollTop = 0;
    }
  });

}

watch(() => refreshClick.value[1].filters, (newValue) => {
  if (newValue) {
    refreshOfferts('filters');
    typeRefresh.value = 'filters'
    
  }
  
});
watch(() => refreshClick.value[0].search, (newValue) => {
  if (newValue) {
    refreshOfferts('search');
    typeRefresh.value = 'search';
    
  }
  
});






</script>

<style scoped>




 .elementOffert {
  transition: 2s;
 }

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  .offert_list {
    scrollbar-width: auto;
    scrollbar-color: rgba(153, 52, 52, 0.397);
  }

  /* Chrome, Edge, and Safari */
  .offert_list::-webkit-scrollbar {
    width: 8px;
  }



  .offert_list::-webkit-scrollbar-thumb {
    background-color: rgba(153, 52, 52, 0.397);
  }

</style>
