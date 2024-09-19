import ElementPlus from 'element-plus'
import { ID_INJECTION_KEY } from 'element-plus'
import localeEs from 'element-plus/es/locale/lang/es'
import {vi} from "element-plus/es/locale/index";

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.provide(ID_INJECTION_KEY, {
        prefix: Math.floor(Math.random() * 1000),
        current: 0
    })

    nuxtApp.vueApp.use(ElementPlus, {
        size: 'small',
        zIndex: 3000,
        locale: vi,
    })
})