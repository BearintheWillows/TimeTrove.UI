<script setup lang="ts">
import AppSidebar from '@/components/layout/AppSidebar.vue'
import { SidebarProvider } from '@/components/ui/sidebar'
</script>

<template>
  <SidebarProvider>
    <div class="flex h-screen w-screen">
      <AppSidebar />
      <main class="flex flex-1 min-w-0 items-center justify-center overflow-y-auto">
        <router-view />
      </main>
    </div>
  </SidebarProvider>
</template>

