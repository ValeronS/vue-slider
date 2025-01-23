<script setup lang="ts">
const { fillColor = '#FE9539' } = defineProps<{
  fillColor?: string | boolean
}>()
</script>

<template>
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    :fill="fillColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.3705 4.94526C19.0805 3.66884 16.9999 3.67988 15.7235 4.96991L12.9501 7.77288C11.6737 9.06291 11.6848 11.1434 12.9748 12.4199L24.6238 23.9459L12.9625 35.6072C11.6793 36.8904 11.6793 38.971 12.9625 40.2542L15.7507 43.0425C17.034 44.3257 19.1145 44.3257 20.3977 43.0424L36.5891 26.8511C37.9779 25.4623 38.0499 22.4381 36.6475 21.0505L20.3705 4.94526Z"
    />
  </svg>
</template>
