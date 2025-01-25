<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import IconStar from '@/components/icons/IconStar.vue'
import IconChevronRight from '@/components/icons/IconChevronRight.vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { useSlidesStore } from '@/stores/slidesStore.ts'
import { storeToRefs } from 'pinia'

const slidesStore = useSlidesStore()

const swiperInstance = ref<any>(null)
const onSwiper = (swiper: any) => (swiperInstance.value = swiper)

const breakpoints = ref({
  1217: { slidesPerView: 3 },
})

const { slides } = storeToRefs(slidesStore)

const currentImageIdx = ref<number>(0)
const onSwipe = (e: any) => {
  if (e?.realIndex !== undefined) currentImageIdx.value = e.realIndex
}

const isBeginning = ref<boolean>(true)
const isEnd = ref<boolean>(false)
const reachBeginning = () => {
  isBeginning.value = true
}
const reachEnd = () => {
  isEnd.value = true
}

const handlePrevious = () => {
  if (!isBeginning.value) {
    swiperInstance.value.slidePrev()
    isEnd.value = false
  }
}
const handleNext = () => {
  if (!isEnd.value) {
    swiperInstance.value.slideNext()
    isBeginning.value = false
  }
}
</script>

<template>
  <div class="slider-container">
    <div v-if="slidesStore.isLoading">Загрузка...</div>
    <div v-else-if="slidesStore.error">{{ slidesStore.error }}</div>

    <template v-else-if="slides?.length">
      <div>
        <icon-chevron-right
          :fill-color="isBeginning ? '#C7CADF' : '#FE9539'"
          class="rotate-180 cursor-pointer"
          @click="handlePrevious"
        />
      </div>

      <swiper
        :slides-per-view="1"
        :space-between="16"
        :breakpoints="breakpoints"
        :loop="false"
        :pagination="true"
        :modules="[Pagination]"
        @slide-change="onSwipe"
        @swiper="onSwiper"
        @reach-beginning="reachBeginning"
        @reach-end="reachEnd"
      >
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <div class="slide-card">
            <img :src="slide.image" :alt="slide.user" class="w-[120px] h-[210px] object-contain" />
            <div class="overflow-hidden">
              <div class="flex gap-1 mb-4">
                <icon-star v-for="n in slide.rating" :key="n" />
              </div>
              <p class="description">{{ slide.description }}</p>
              <h3 class="mt-2 font-bold text-ellipsis">
                {{ slide.user }}
              </h3>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"></div>
      </swiper>

      <div>
        <icon-chevron-right
          :fill-color="isEnd ? '#C7CADF' : '#FE9539'"
          class="cursor-pointer"
          @click="handleNext"
        />
      </div>
    </template>

    <h3 v-else class="font-medium">Отзывов пока нет...</h3>
  </div>
</template>

<style scoped lang="scss">
.slider-container {
  @media (min-width: 1217px) {
    max-width: 100%;
  }
  @apply max-w-[480px] flex items-center justify-center gap-4 mx-auto;
}

.slide-card {
  @apply h-[242px] min-h-0 max-w-[352px] flex gap-6 mx-0 p-4 bg-background-blue border border-border-gray rounded-3xl;
}

.description {
  display: -webkit-box;
  overflow: hidden;
  line-clamp: 7;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
}

:deep(.swiper) {
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
