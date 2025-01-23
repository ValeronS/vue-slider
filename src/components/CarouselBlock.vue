<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import IconStar from '@/components/icons/IconStar.vue'
import IconChevronRight from '@/components/icons/IconChevronRight.vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const swiperInstance = ref<any>(null)
const onSwiper = (swiper: any) => (swiperInstance.value = swiper)

const breakpoints = ref({
  1217: { slidesPerView: 3 },
})

const slides = ref([
  {
    image: 'src/assets/images/alphabet.png',
    name: 'Yoga276',
    rating: 5,
    description:
      'Самое первое приложение у моего сына. Он запомнил звуки животных и научился играть своими пальчиками, вообще без моей помощи!',
  },
  {
    image: 'src/assets/images/cars.png',
    name: 'Yoga276',
    rating: 4,
    description:
      'Хороший способ выучить с ребенком английский алфавит без зубрежки. Очень милый дизайн и классные мини-игры. Однозначно лайк!',
  },
  {
    image: 'src/assets/images/colors.png',
    name: 'colors',
    rating: 3,
    description:
      'Решили купить сборник со всеми видами транспорта. И не зря! Прикольные игры + можно играть без интернета, спасают нас в долгих поездках.',
  },
  {
    image: 'src/assets/images/farm.png',
    name: 'farm',
    rating: 2,
    description:
      'У нас близнецы, любят разные виды транспорта и задания. Можно играть на нескольких устройствах с одной подпиской, так что больше не деремся за телефон. Один всегда может поиграть на планшете.',
  },
  {
    image: 'src/assets/images/puzzle.png',
    name: 'puzzle',
    rating: 1,
    description:
      'Просто, приятно и полезно! Сын-дошкольник любит пробовать разные режимы в раскрасках и даже в сочетании с математикой, когда нужно решать примеры, чтобы подобрать цвет.',
  },
])

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
          <img :src="slide.image" :alt="slide.name" class="w-[120px] h-[210px] object-contain" />
          <div>
            <div class="flex gap-1 mb-4">
              <icon-star v-for="n in slide.rating" :key="n" />
            </div>
            <p class="description">{{ slide.description }}</p>
            <h3 class="mt-2 font-bold">{{ slide.name }}</h3>
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
  </div>
</template>

<style scoped lang="scss">
.slider-container {
  @media (min-width: 1217px) {
    width: 100%;
  }
  @apply w-[480px] flex items-center justify-center gap-4 mx-auto;
}

.slide-card {
  @apply h-[242px] min-h-0 w-[352px] flex gap-6 mx-0 p-4 bg-background-blue border border-border-gray rounded-3xl;
}

.description {
  display: -webkit-box;
  overflow: hidden;
  line-clamp: 7;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
}

:deep(.swiper) {
  padding-bottom: 40px;
}
</style>
