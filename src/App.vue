<script setup lang="ts">
import AppSidebar from '@/components/layout/AppSidebar.vue'
import { SidebarProvider } from '@/components/ui/sidebar'
</script>

<template>
  <SidebarProvider>
    <div class="flex h-screen">
      <AppSidebar />
      <main class="flex-1 overflow-auto p-4">
        <router-view />
      </main>
    </div>
  </SidebarProvider>
</template>
