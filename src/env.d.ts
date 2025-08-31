/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, any>
    export default component
}

declare global {
    interface ImportMetaEnv {
        readonly VITE_API_URL: string
    }
    interface ImportMeta {
        readonly env: ImportMetaEnv
    }
}


