<script setup lang="ts">
import AppSidebar from '@/components/layout/AppSidebar.vue'
import { SidebarProvider } from '@/components/ui/sidebar'
</script>

<template>
  <SidebarProvider>
    <div class="flex h-screen">
      <AppSidebar />
      <main class="flex-col">
        <router-view />
      </main>
    </div>
  </SidebarProvider>
</template>
