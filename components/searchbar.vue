<template>
    <div class="mx-auto max-w-7xl py-6 px-4 sm:px-8 lg:px-16 h-[15%]">
        <div class="bg-white  rounded-lg flex border border-gray-700 flex-col relative z-[2]">
          <input v-model="searchTermFilter" type="text" @keyup="searchideaDelay()" placeholder="Znajdź swoją wymarzoną prace." name="" id="" class="border-none focus:ring-0 focus:outline-none m-4 searchbar">
          <div class="w-full bg-white flex border rounded-b-lg hidden  " ref="suggestion">
            <transition name="searchprompt">
              <ul class=" w-full">
                <li v-for="(searchprompt, index) in searchprompts" :key="index" class="p-4 searchprompt-li" @click="handleClick">

                  {{ searchprompt }}
                </li>
              </ul>
              
            </transition>
            
          </div>
          
        </div>
        
      </div>
</template>

<script setup>

const {toggleSearchrefresh, searchTermFilter} = useFilters();
const suggestion = ref(null);
const searchprompts = ref([]);
let delay;
let search_loading = ref(false);

const handleClick = () => {
  searchprompts.value = [];
  suggestion.value.classList.add('hidden');
  
  toggleSearchrefresh();
  
}

const searchidea = async () => {

  const {data , error} = await useFetch(`/api/search?searchTerm=${searchTermFilter.value}`)
  searchprompts.value = data.value;
  console.log(searchprompts)
}
const searchideaDelay = () => {
  if (suggestion.value.classList.contains('hidden')) {
    suggestion.value.classList.remove('hidden');
  }
  
  if (delay) {
    clearTimeout(delay)
  }
  search_loading.value = true
  delay = setTimeout(() => {
    search_loading.value = false
    searchidea();
    delay = null;
  }, 500);
}



</script>

<style scoped>
.searchbar{
  width: calc(100% - 2rem);
}
.searchprompt-li{
  transition: background-color 0.5s;
}
.searchprompt-li:hover{
  @apply bg-gray-300;

}
.searchprompt-enter-active, .searchprompt-leave-active {
    transition: transform 0.5s;
 
    
  }
.searchprompt-enter-from, .searchprompt-leave-to {
 
    transform: translateY(-100%);
    
  }
</style>
