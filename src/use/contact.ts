import { ref } from 'vue'
import { refDebounced } from '@vueuse/core'
import axios from 'axios'

export type Message = {
  name: string
  email: string
  reason: string
  message: string
}

export const name = ref<Maybe<string>>(null)
export const email = ref<Maybe<string>>(null)
export const reason = ref<Maybe<string>>(null)
export const message = ref<Maybe<string>>(null)

export const loading = refDebounced(ref(false), 200)
export const error = refDebounced(ref(false), 200)
export const sent = refDebounced(ref(false), 200)

export async function send () {
  const url = `${import.meta.env.VITE_API_BASE_URL}/contact`
  const data: Message = {
    name: name.value ?? '',
    email: email.value ?? '',
    reason: reason.value ?? '',
    message: message.value ?? ''
  }

  loading.value = true

  try {
    await axios.post(url, data)
  } catch (e) {
    error.value = true
  } finally {
    loading.value = false

    if (!error.value) {
      sent.value = true

      clear()
    }
  }
}

export function clear () {
  name.value = null
  email.value = null
  reason.value = null
  message.value = null

  loading.value = false
  error.value = false
}
