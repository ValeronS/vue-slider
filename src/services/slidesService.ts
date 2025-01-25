import type { Slide } from '@/services/model.ts'
import { mockSlides } from '@/utils/constants.ts'

const API_DELAY = 300 // Имитация задержки сети

export const SlidesService = {
  // Имитация получения данных от сервера
  async fetchSlides(): Promise<Slide[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve([...mockSlides]), API_DELAY)
    })
  },

  // Имитация сохранения данных на сервер
  async updateSlides(slides: Slide[]): Promise<Slide[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        Object.assign(mockSlides, [...slides])
        resolve([...mockSlides])
      }, API_DELAY)
    })
  },
}
