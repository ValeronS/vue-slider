<script setup lang="ts">
import { RouterView } from 'vue-router'
import MessageNotifications from '@/components/shared/MessageNotifications.vue'
</script>

<template>
  <message-notifications />

  <router-view />
</template>
