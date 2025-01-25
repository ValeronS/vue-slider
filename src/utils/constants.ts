import type { Slide } from '@/services/model.ts'

export enum EMessageType {
  UPDATE_SLIDE = 'UPDATE_SLIDE',
  SLIDES_UPDATED = 'SLIDES_UPDATED',
  SAVE_SLIDES = 'SAVE_SLIDES',
  RESET_SLIDES = 'RESET_SLIDES',
}

export const mockSlides: Slide[] = [
  {
    id: 1,
    image: 'src/assets/images/alphabet.png',
    user: 'Yoga276',
    rating: 5,
    description:
      'Самое первое приложение у моего сына. Он запомнил звуки животных и научился играть своими пальчиками, вообще без моей помощи!',
  },
  {
    id: 2,
    image: 'src/assets/images/cars.png',
    user: 'Саша К.',
    rating: 4,
    description:
      'Хороший способ выучить с ребенком английский алфавит без зубрежки. Очень милый дизайн и классные мини-игры. Однозначно лайк!',
  },
  {
    id: 3,
    image: 'src/assets/images/colors.png',
    user: 'Виктор',
    rating: 3,
    description:
      'Решили купить сборник со всеми видами транспорта. И не зря! Прикольные игры + можно играть без интернета, спасают нас в долгих поездках.',
  },
  {
    id: 4,
    image: 'src/assets/images/farm.png',
    user: 'LoveYourLife',
    rating: 2,
    description:
      'У нас близнецы, любят разные виды транспорта и задания. Можно играть на нескольких устройствах с одной подпиской, так что больше не деремся за телефон. Один всегда может поиграть на планшете.',
  },
  {
    id: 5,
    image: 'src/assets/images/puzzle.png',
    user: 'Liza M',
    rating: 1,
    description:
      'Просто, приятно и полезно! Сын-дошкольник любит пробовать разные режимы в раскрасках и даже в сочетании с математикой, когда нужно решать примеры, чтобы подобрать цвет.',
  },
  {
    id: 6,
    image: 'src/assets/images/alphabet.png',
    user: 'Yoga276',
    rating: 5,
    description:
      'Самое первое приложение у моего сына. Он запомнил звуки животных и научился играть своими пальчиками, вообще без моей помощи!',
  },
  {
    id: 7,
    image: 'src/assets/images/cars.png',
    user: 'Саша К.',
    rating: 4,
    description:
      'Хороший способ выучить с ребенком английский алфавит без зубрежки. Очень милый дизайн и классные мини-игры. Однозначно лайк!',
  },
  {
    id: 8,
    image: 'src/assets/images/colors.png',
    user: 'Виктор',
    rating: 3,
    description:
      'Решили купить сборник со всеми видами транспорта. И не зря! Прикольные игры + можно играть без интернета, спасают нас в долгих поездках.',
  },
  {
    id: 9,
    image: 'src/assets/images/farm.png',
    user: 'LoveYourLife',
    rating: 2,
    description:
      'У нас близнецы, любят разные виды транспорта и задания. Можно играть на нескольких устройствах с одной подпиской, так что больше не деремся за телефон. Один всегда может поиграть на планшете.',
  },
  {
    id: 10,
    image: 'src/assets/images/puzzle.png',
    user: 'Liza M',
    rating: 1,
    description:
      'Просто, приятно и полезно! Сын-дошкольник любит пробовать разные режимы в раскрасках и даже в сочетании с математикой, когда нужно решать примеры, чтобы подобрать цвет.',
  },
]
