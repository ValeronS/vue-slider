import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSlidesStore = defineStore('slides', () => {
  const slides = ref<any[]>([])

  const updateSlide = (id: number, data: Partial<any>) => {
    slides.value[id] = { ...slides.value[id], ...data }
  }

  return { slides, updateSlide }
})
