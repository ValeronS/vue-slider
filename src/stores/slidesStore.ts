import { defineStore } from 'pinia'
import { ref } from 'vue'
import { SlidesService } from '@/services/slidesService.ts'
import type { Slide } from '@/services/model.ts'

export const useSlidesStore = defineStore('slides', () => {
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const slides = ref<Slide[]>([])

  const fetchSlides = async () => {
    try {
      isLoading.value = true
      slides.value = await SlidesService.fetchSlides()
    } catch (err) {
      console.error('err', err)
      error.value = err instanceof Error ? err.message : 'Failed to load slides'
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
    } catch (err) {
      console.error('err', err)
      error.value = err instanceof Error ? err.message : 'Failed to update slide'
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
