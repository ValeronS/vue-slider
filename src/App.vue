<script setup lang="ts">
import { RouterView } from 'vue-router'
import MessageNotifications from '@/components/shared/MessageNotifications.vue'

import { useAuthStore } from '@/stores/authStore.ts'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()
const { token } = storeToRefs(authStore)

// Имитация авторизации
const login = async () => {
  authStore.setToken(token.value || 'token')
}

login()
</script>

<template>
  <message-notifications />

  <router-view />
</template>
