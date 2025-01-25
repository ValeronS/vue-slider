import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

type MessageType = 'success' | 'error' | 'warning'

interface Notification {
  id: number
  text: string
  type: MessageType
  timeout?: number
}

export const useNotificationStore = defineStore('notifications', () => {
  const notifications: Ref<Notification[]> = ref([])
  const nextId = ref(0)

  const remove = (id: number) => {
    notifications.value = notifications.value.filter((n) => n.id !== id)
  }

  const show = (text: string, type: MessageType, timeout = 3000) => {
    const id = nextId.value++

    notifications.value.push({
      id,
      text,
      type,
      timeout,
    })

    setTimeout(() => remove(id), timeout)
  }

  const success = (text: string, timeout?: number) => show(text, 'success', timeout)

  const error = (text: string, timeout?: number) => show(text, 'error', timeout)

  const warning = (text: string, timeout?: number) => show(text, 'warning', timeout)

  return {
    notifications,
    success,
    error,
    warning,
    remove,
  }
})
