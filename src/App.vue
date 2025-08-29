<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
</script>

<template>
  <SidebarProvider>
    <div class="flex h-screen">
      <AppSidebar />
      <main class="flex-1 overflow-auto p-4">
        <SidebarTrigger />
        <router-view />
      </main>
    </div>
  </SidebarProvider>
</template>
