<script setup lang="ts">
import { useNotificationStore } from '@/stores/notificationStore'
import { storeToRefs } from 'pinia'

const notificationStore = useNotificationStore()

const { notifications } = storeToRefs(notificationStore)
</script>

<template>
  <div class="notification-container">
    <div
      v-for="notification in notifications"
      :key="notification.id"
      :class="['notification', notification.type]"
    >
      {{ notification.text }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.notification-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.notification {
  padding: 15px 25px;
  margin-bottom: 10px;
  border-radius: 8px;
  color: white;
  opacity: 0.9;
  animation: slideIn 0.3s ease-out;
}

.success {
  background: var(--color-success);
}
.error {
  background: var(--color-error);
}
.warning {
  background: var(--color-warning);
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
