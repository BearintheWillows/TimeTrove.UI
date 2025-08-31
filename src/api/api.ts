import axios from 'axios'
import { Client } from '@/api/apiClient'

const instance = axios.create()
instance.interceptors.request.use(cfg => {
    const token = localStorage.getItem('token')
    if (token) cfg.headers = { ...cfg.headers, Authorization: `Bearer ${token}` }
    return cfg
})

const rawBase = import.meta.env.VITE_API_URL as string
if (!rawBase) throw new Error('VITE_API_URL is not set')

const baseUrl = rawBase.replace(/\/+$/, '')

export const api = new Client(baseUrl, instance)