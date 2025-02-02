import type { FetchSlidesOptions, Slide } from '@/services/model.ts'
import { httpService } from '@/services/http.service.ts'

export const SlidesService = {
  async fetchSlides(options?: FetchSlidesOptions): Promise<Slide[]> {
    if (options?.shouldFail) {
      throw new Error('Ошибка сервера')
    } else {
      return await httpService.get('/api/slides')
    }
  },

  async updateSlides(slides: Slide[]): Promise<Slide[]> {
    return await httpService.post('/api/slides/update-slides', slides)
  },
}
