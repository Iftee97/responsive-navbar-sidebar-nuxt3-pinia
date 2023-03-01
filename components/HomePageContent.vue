<template>
  <div class="mb-8">
    <h1 class="text-5xl text-blue-700 text-center font-bold mb-4">
      {{ headingText }}
    </h1>
    <p class="text-slate-700 text-lg text-center font-medium">
      {{ subHeadingText }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  headingText: {
    type: String,
    default: 'Hello Nuxt3'
  },
  subHeadingText: {
    type: String,
  }
})
</script>
