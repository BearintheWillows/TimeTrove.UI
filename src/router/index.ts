import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Register from '@/views/Register.vue'
import Settings from '@/views/Settings.vue'

const routes = [
    { path: '/', component: Dashboard },
    { path: '/register', component: Register },
    { path: '/settings', component: Settings }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
