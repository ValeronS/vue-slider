<script setup lang="ts">
import { useSlidesStore } from '@/stores/slidesStore.ts'
import { storeToRefs } from 'pinia'
import { useIframeMessaging } from '@/composables/useIframeMessaging.ts'
import { EMessageType } from '@/utils/constants.ts'
import type { FetchSlidesOptions } from '@/services/model.ts'

const slidesStore = useSlidesStore()
const { slides } = storeToRefs(slidesStore)

const origin = window.location.origin

// Отправка изменений в родительский экземпляр приложения
const onInput = (slideId: number, field: string, event: Event) => {
  window.parent.postMessage({
    type: EMessageType.UPDATE_SLIDE,
    payload: { slideId, changes: { [field]: (event.target as HTMLInputElement).value } },
  })
}

// Сброс изменений
const handleSave = () => {
  window.parent.postMessage({
    type: EMessageType.SAVE_SLIDES,
  })
}

// Сброс изменений
const handleReset = (options?: FetchSlidesOptions) => {
  window.parent.postMessage({
    type: options?.shouldFail ? EMessageType.FAIL_SLIDES : EMessageType.RESET_SLIDES,
  })
}

// Получение данных из родительского экземпляра приложения и сохранение их в стор
useIframeMessaging()
</script>

<template>
  <div class="w-full flex flex-col border border-slate-200">
    <h1 class="p-2 text-center bg-slate-200">{{ `Панель управления(${origin})` }}</h1>

    <div class="flex justify-end gap-2 p-2">
      <button v-if="slides?.length" @click="handleSave">Сохранить изменения на сервер</button>
      <button @click="handleReset()">Получить данные от сервера</button>
      <button @click="handleReset({ shouldFail: true })">Получить ошибку от сервера</button>
    </div>

    <div v-if="slides?.length" class="grid grid-cols-[auto_1fr] gap-2 p-2">
      <template v-for="(slide, index) in slides" :key="index">
        <span class="">Отзыв # {{ index + 1 }}</span>

        <div class="flex flex-col gap-1">
          <input
            v-model="slide.user"
            @input="onInput(slide.id, 'user', $event)"
            class="input-field"
          />

          <textarea
            v-model="slide.description"
            :rows="4"
            class="input-field"
            @input="onInput(slide.id, 'description', $event)"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.input-field {
  @apply p-1 border border-slate-200;
}
</style>
