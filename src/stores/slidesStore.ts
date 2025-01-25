import { defineStore } from 'pinia'
import { ref } from 'vue'
import { SlidesService } from '@/services/slidesService.ts'
import type { FetchSlidesOptions, Slide } from '@/services/model.ts'
import { useNotificationStore } from '@/stores/notificationStore.ts'

export const useSlidesStore = defineStore('slides', () => {
  const notification = useNotificationStore()

  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const slides = ref<Slide[]>([])

  const fetchSlides = async (options?: FetchSlidesOptions) => {
    try {
      if (error.value) error.value = null
      isLoading.value = true
      slides.value = await SlidesService.fetchSlides(options)
    } catch (err) {
      console.error('err', err)
      error.value = err instanceof Error ? err.message : 'Ошибка получения данных'
      notification.error(error.value)
      slides.value = []
    } finally {
      isLoading.value = false
    }
  }

  const updateSlideInStore = (slideId: number, changes: Partial<Slide>) => {
    const index = slides.value.findIndex((s) => s.id === slideId)

    if (index !== -1) {
      slides.value[index] = { ...slides.value[index], ...changes }
    }
  }

  const saveSlides = async () => {
    try {
      isLoading.value = true
      slides.value = await SlidesService.updateSlides(slides.value)
      notification.success('Слайды успешно сохранены')
    } catch (err) {
      console.error('err', err)
      error.value = err instanceof Error ? err.message : 'Failed to update slide'
      notification.error(error.value)
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    error,

    slides,

    fetchSlides,
    updateSlideInStore,
    saveSlides,
  }
})
