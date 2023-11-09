<template>
  <div class="mx-auto max-w-7xl py-6 px-4 sm:px-8 lg:px-16 font-mono">
      <div class="bg-white rounded-lg lg:flex items-center border border-black h-52 shadow-lg">
        <div class="rounded-l-lg border-r border-black p-4 h-full hidden justify-center   md:flex">
          <img src="@/assets/images/test.png" alt="" class=" max-h-full max-w-full">
        </div>
        <!-- Dodano klasę "flex-grow" poniżej -->
        <div class=" flex-grow h-full ">
          <div class=" h-2/3 p-4">
            <div class="flex md:block items-center">
              <img src="@/assets/images/test.png" alt="" class="block md:hidden h-14 mr-5">
              <h1 class=" text-2xl md:text-4xl">Developer do spraw bezpieczeństwa</h1>
            </div>
            
            <ul class="flex  md:mt-8 text-gray-700">
              <li class=" mr-5 flex">
                <BriefcaseIcon class="h-6 w-6" />
                Santander</li>
              <li class="flex">
                <MapIcon class="h-6 w-6" />
                Warszawa</li>
            </ul>
          </div>
          <div class=" border-t border-black  h-1/3 flex items-center p-4">
            <ul class="flex justify-evenly md:justify-between w-full flex-wrap ">
              <li class="mr-5">Vue.js</li>
              <li class="mr-5">JavaScript</li>
              <li class="mr-5">HTML</li>
              <li class="mr-5">React.js</li>
              <li class="mr-5">AWS</li>
            </ul>
          </div>

        </div>
      </div>
  </div>
</template>

<script>
  import { BriefcaseIcon } from '@heroicons/vue/24/outline';
  import { MapIcon } from '@heroicons/vue/24/outline'

  export default {
  components: {
    BriefcaseIcon,
    MapIcon
  }
}

</script>

<style scoped>

</style>
