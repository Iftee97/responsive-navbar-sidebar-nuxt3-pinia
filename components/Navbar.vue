<template>
  <nav class="flex items-center justify-between px-8 py-4 bg-slate-50 border-b border-[#cccccc4d]">
    <NuxtLink to="/" class="inline-block">
      <span class="font-semibold text-[24px]">
        Nuxt3
      </span>
    </NuxtLink>
    <ul class="md:hidden flex items-center gap-4">
      <li 
        v-for="(link, index) in navLinks" 
        :key="index" 
        @click="appStore.toggleSidebar" 
        class="text-[18px] font-medium"
      >
        <NuxtLink :to="link.path">
          {{ link.name }}
        </NuxtLink>
      </li>
    </ul>
    <button 
      class="hidden md:inline-block cursor-pointer" 
      @click="appStore.toggleSidebar"
    >
      <Hamburger />
    </button>
  </nav>
</template>

<script setup>
import Hamburger from '@/components/icons/Hamburger.vue'
import { useAppStore } from '@/stores/appStore'
const appStore = useAppStore()

const props = defineProps({
  navLinks: {
    type: Array,
    required: true
  }
})
</script>
