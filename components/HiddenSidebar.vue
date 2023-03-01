<template>
  <div class="fixed top-0 left-0 z-[999] block w-screen h-screen" :class="[appStore.showSidebar ? 'w-full translate-x-0 transition-all ease-in-out duration-500' : 'translate-x-[-300%] transition-all ease-in-out duration-500']">
    <div class="block overflow-auto bg-[#fff] h-full">
      <div class="flex items-center justify-between px-8 py-4 bg-slate-50 border-b border-[#cccccc4d]">
        <NuxtLink to="/" @click="appStore.toggleSidebar">
          <span class="font-semibold text-[24px]">
            LogoLink
          </span>
        </NuxtLink>
        <button 
          class="inline-block cursor-pointer" 
          @click="appStore.toggleSidebar"
        >
          <Cross />
        </button>
      </div>
      <ul class="flex flex-col items-center justify-center gap-4 py-8">
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
    </div>
  </div>
</template>

<script setup>
import Cross from '@/components/icons/Cross.vue'
import { useAppStore } from '@/stores/appStore'
const appStore = useAppStore()

const props = defineProps({
  navLinks: {
    type: Array,
    required: true
  }
})
</script>
