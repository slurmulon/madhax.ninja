import { ref, shallowRef } from 'vue'
// import { refDebounced } from '@vueuse/core'
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

// export const rawLoading = shallowRef(false)
// export const rawError = shallowRef(false)
// export const rawSent = shallowRef(false)

// export const loading = refDebounced(rawLoading, 200)
// export const error = refDebounced(rawError, 200)
// export const sent = refDebounced(rawSent, 200)

export const loading = shallowRef(false)
export const error = shallowRef(false)
export const sent = shallowRef(false)

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

    console.error('Failed to send email', e)
  } finally {
    loading.value = false

    if (!error.value) {
      sent.value = true

      console.log('Email sent successfully!')

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
