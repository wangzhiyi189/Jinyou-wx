import { createPinia } from 'pinia'
import useUserStore from './modules/user'
import useLocationStore from './modules/location'
const pinia = createPinia()
export { useUserStore, useLocationStore }

export default pinia