<script setup lang="ts">
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup
} from '@/components/ui/sidebar'
</script>

<template>
  <Sidebar>
    <SidebarHeader>
      <h2 class="text-lg font-bold px-4 py-2">My App</h2>
    </SidebarHeader>

    <SidebarContent>
      <SidebarGroup>
        <router-link to="/" class="block px-4 py-2 hover:bg-gray-100">Home</router-link>
        <router-link to="/register" class="block px-4 py-2 hover:bg-gray-100">Register</router-link>
      </SidebarGroup>
    </SidebarContent>

    <SidebarFooter>
      <div class="px-4 py-2 text-sm text-gray-500">© 2025</div>
    </SidebarFooter>
  </Sidebar>
</template>
