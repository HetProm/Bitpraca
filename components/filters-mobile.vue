  <template>
    <div class="bg-white w-full lg:flex sticky" style="z-index: 2;">
        <swiper :slidesPerView="1" :spaceBetween="50" :pagination="{ clickable: true }" :navigation="false" :loop="true">
        <swiper-slide>
            <lvl_slider />

        </swiper-slide>
        <swiper-slide>
            <code_tags />
        </swiper-slide>
        <swiper-slide>
            <!-- Praca zdalna guzik -->
            <btn_switch_remotejob />
                
        </swiper-slide>
        <swiper-slide>
            <!-- Widełki guzik -->
            <btn_switch_pricepool />
    
        </swiper-slide>

        </swiper>

    </div>
</template>
<script setup>
import btn_switch_remotejob from './btn_switch_remotejob.vue';
import btn_switch_pricepool from './btn_switch_pricepool.vue';
import lvl_slider from './lvl_slider.vue';
import code_tags from './code_tags.vue';

</script>
<script>
import { Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {

    const modules = [Navigation, Pagination];
    
    return {
      modules
    };
  },
};
</script>
<style scoped>
  .stick {
  @apply border-2 w-1 h-12 ;

  }



  .filter-card{
    @apply w-full h-28 bg-white flex justify-center items-center ;
  }




</style>