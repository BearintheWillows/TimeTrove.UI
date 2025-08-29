<script setup lang="ts">
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarMenuItem,
  SidebarMenuButton, SidebarTrigger
} from '@/components/ui/sidebar'
import { useSidebar } from '@/components/ui/sidebar'
import { Home, Settings, UserPlus } from 'lucide-vue-next'

const { state } = useSidebar()

const items = [
  { title: 'Dashboard', icon: Home, route: '/' },
  { title: 'Register', icon: UserPlus, route: '/register' },
  { title: 'Settings', icon: Settings, route: '/settings' }
]
</script>

<template>
  <Sidebar collapsible="icon">
    <SidebarHeader
        :class="['flex justify-center h-16 transition-all']">
      <SidebarTrigger class="hover:bg-muted transition" />
      <h2 v-if="state === 'expanded'" class="text-lg font-bold text-center">TimeTrove</h2>
    </SidebarHeader>

    <SidebarContent>
      <SidebarGroup>
        <SidebarMenuItem v-for="item in items" :key="item.title">
          <SidebarMenuButton :tooltip="item.title" as-child>
            <router-link :to="item.route" class="flex items-center justify-center px-4 py-2 hover:bg-muted">
              <component :is="item.icon" class="w-5 h-5" />
              <span v-if="state === 'expanded'" class="ml-2">{{ item.title }}</span>
            </router-link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarGroup>
    </SidebarContent>


    <SidebarFooter>
      <div class="px-4 py-2 text-sm text-muted-foreground">© 2025</div>
    </SidebarFooter>
  </Sidebar>
</template>
