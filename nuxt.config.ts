import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/supabase',
        '@chakra-ui/nuxt',
        '@nuxtjs/emotion'
    ],
    css: ['@/assets/main.css']
})
