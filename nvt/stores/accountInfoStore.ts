// stores/accountInfoStore.ts
import { defineStore } from 'pinia'

export const useAccountInfoStore = defineStore('accountInfo', {
    state: () => ({
        id: '',
        name: '',
        email: '',
        role: '',
        phone: '',
        address: ''
    }),
    actions: {
        // Thiết lập thông tin tài khoản và lưu vào localStorage
        setAccountInfo(info: { id: string, name: string, email: string, role: string, phone: string, address: string }) {
            this.id = info.id
            this.name = info.name
            this.email = info.email
            this.role = info.role
            this.phone = info.phone
            this.address = info.address

            // Lưu thông tin vào localStorage
            localStorage.setItem('accountInfo', JSON.stringify(info))
        },

        // Xóa thông tin tài khoản khỏi store và localStorage
        clearAccountInfo() {
            this.id = ''
            this.name = ''
            this.email = ''
            this.role = ''
            this.phone = ''
            this.address = ''

            // Xóa khỏi localStorage
            localStorage.removeItem('accountInfo')
        },

        // Tải lại thông tin tài khoản từ localStorage vào store
        loadAccountInfoFromLocalStorage() {
            const savedInfo = localStorage.getItem('accountInfo')
            if (savedInfo) {
                const info = JSON.parse(savedInfo)
                this.setAccountInfo(info)
            }
        }
    }
})
