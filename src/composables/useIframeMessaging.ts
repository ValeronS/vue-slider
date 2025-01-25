import { useSlidesStore } from '@/stores/slidesStore'
import { onMounted, onUnmounted } from 'vue'
import { EMessageType } from '@/utils/constants.ts'

export const useIframeMessaging = () => {
  const slidesStore = useSlidesStore()

  const handleMessage = async (event: MessageEvent) => {
    if (event.origin !== window.location.origin) return

    switch (event.data.type) {
      // обработка сообщений от дочернего экземпляра приложения
      case EMessageType.UPDATE_SLIDE: {
        const { slideId, changes } = event.data.payload
        slidesStore.updateSlideInStore(slideId, changes)
        break
      }

      // Получение данных из родительского экземпляра приложения и сохранение их в стор дочернего
      case EMessageType.SLIDES_UPDATED: {
        slidesStore.slides = event.data.payload
        break
      }

      // Имитация сохранения измененных слайдов на сервере
      case EMessageType.SAVE_SLIDES: {
        await slidesStore.saveSlides()
        break
      }

      // Сброс изменений
      case EMessageType.RESET_SLIDES: {
        await slidesStore.fetchSlides()
        break
      }

      // Получение ошибки сервера
      case EMessageType.FAIL_SLIDES: {
        await slidesStore.fetchSlides({ shouldFail: true })
        break
      }

      default:
        break
    }
  }

  onMounted(() => window.addEventListener('message', handleMessage))
  onUnmounted(() => window.removeEventListener('message', handleMessage))
}
