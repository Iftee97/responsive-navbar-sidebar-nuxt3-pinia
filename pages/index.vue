<template>
  <div>
    <HomePageContent 
      headingText="Hello Nuxt3" 
      subHeadingText="Lorem ipsum dolor sit amet consectetur adipisicing elit!"
    />
    <div class="flex items-center justify-center gap-4 mb-4">
      <button 
        class="px-3 py-2 bg-[#ccc] rounded-md text-[#000]"
        @click="appStore.increaseCount"
      >
        increase count
      </button>
      <button 
        class="px-3 py-2 bg-[#ccc] rounded-md text-[#000]" 
        @click="appStore.decreaseCount"
      >
        decrease count
      </button>
    </div>
    <div class="flex items-center justify-center">
      <span class="border border-[#555] inline-block p-3 mx-auto mb-4">
        <p class="text-[#000] text-lg">
          <span class="font-medium">
            Count:
          </span> 
          <span class="font-medium">
            {{ appStore.count }}
          </span>
        </p>
      </span>
    </div>
    <!-- <div class="text-center mx-auto flex items-center justify-between">
      <span class="text-xl select-none">
        showSidebar: {{ appStore.showSidebar }}
      </span>
      <span class="inline-block mb-4 cursor-pointer mt-4" @click="appStore.toggleSidebar">
        <Hamburger v-if="appStore.showSidebar" />
        <Cross v-else />
      </span>
    </div> -->
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores/appStore'
import Hamburger from '@/components/icons/Hamburger.vue'
import Cross from '@/components/icons/Cross.vue'

const appStore = useAppStore()
</script>
