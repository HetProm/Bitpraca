<template>
  <div class="mx-auto max-w-7xl py-6 px-4 sm:px-8 lg:px-16 h-[15%] mt-[2em]">
      <div class="bg-white  rounded-lg flex border border-gray-700 flex-col relative z-[2]">
        <div class="flex ">
          <input v-model="searchTermFilter" type="text" @keyup="searchideaDelay()" @keyup.enter="handleEnter()" placeholder="Znajdź swoją wymarzoną prace." name="" id="" class="border-none focus:ring-0 focus:outline-none m-4 searchbar">
          <div class="w-[25%] lg:w-[10%] relative overflow-hidden ">
            <transition name="searchbuttonAnimation">
              <button
             class="bg-green-400 rounded-br-lg rounded-tr-lg w-full h-full"
             ref="searchbutton" @click="handleClick_buttonsearch()"
             v-if="isButtonVisible">Szukaj</button>
            </transition>
            
          </div>
          
        </div>
        

        <div class="w-full bg-white flex border rounded-b-lg hidden" ref="suggestion">
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
const searchbutton = ref(null);
const searchprompts = ref([]);
let delay;
let search_loading = ref(false);

const handleEnter = () => {
toggleSearchrefresh();
searchprompts.value = [];
suggestion.value.classList.add('hidden');

}
const handleClick = (event) => {
searchprompts.value = [];
suggestion.value.classList.add('hidden');
isButtonVisible.value = false;
searchTermFilter.value = event.target.textContent;
toggleSearchrefresh();

}

const handleClick_buttonsearch = () => {

searchprompts.value = [];
suggestion.value.classList.add('hidden');
isButtonVisible.value = false;
toggleSearchrefresh();

}

const searchidea = async () => {

const {data , error} = await useFetch(`/api/search?searchTerm=${searchTermFilter.value}`)
searchprompts.value = data.value;

}
let isButtonVisible = ref(false);
const searchideaDelay = () => {
if (suggestion.value.classList.contains('hidden')) {
  suggestion.value.classList.remove('hidden');
}
else{
  if (searchTermFilter.value === '') {
    suggestion.value.classList.add('hidden');
    isButtonVisible.value = false;
  }
}

if (searchTermFilter.value.length > 0) {
  isButtonVisible.value = true
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


.searchbuttonAnimation-enter-active, .searchbuttonAnimation-leave-active {
  transition: transform 0.5s;
  position: sticky;
  
}
.searchbuttonAnimation-enter-from, .searchbuttonAnimation-leave-to /* <= 2.1.8: .fade-leave */ {

transform: translateX(100%);

}

.searchbar{
width: calc(90% - 2rem);
}
.searchprompt-li{
transition: background-color 0.5s;
}
.searchprompt-li:hover{
@apply bg-gray-300;

}

</style>
