<script setup lang="ts">
import CarouselBlock from '@/components/CarouselBlock.vue'
import { useSlidesStore } from '@/stores/slidesStore.ts'
import { onMounted, ref, watch } from 'vue'
import { useIframeMessaging } from '@/composables/useIframeMessaging.ts'
import { EMessageType } from '@/utils/constants.ts'

const slidesStore = useSlidesStore()

// запросы совершаем в корневом родительском компоненте для лучшего контроля
onMounted(async () => await slidesStore.fetchSlides())

// после получения слайдов от бэка отправляем их в дочерний экземпляр приложения
const iframeRef = ref<HTMLIFrameElement>()
watch(
  () => slidesStore.slides,
  (slides) => {
    const rawSlides = JSON.parse(JSON.stringify(slides))

    iframeRef.value?.contentWindow?.postMessage(
      { type: EMessageType.SLIDES_UPDATED, payload: rawSlides },
      window.location.origin,
    )
  },
  { deep: true },
)

// Обработка сообщений от дочернего экземпляра приложения
useIframeMessaging()
</script>

<template>
  <main>
    <carousel-block class="min-h-[302px]" />

    <iframe ref="iframeRef" src="/control-panel" class="w-full h-[calc(100vh-302px)]" />
  </main>
</template>
