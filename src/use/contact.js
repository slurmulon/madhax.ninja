import { ref } from '@vue/composition-api'
import axios from 'axios'

export const name = ref(null)
export const email = ref(null)
export const reason = ref(null)
export const message = ref(null)

export const loading = ref(false)
export const error = ref(false)
export const sent = ref(false)

export async function send () {
  const url = `${process.env.VUE_APP_API_BASE_URL}/contact`
  const data = {
    name: name.value,
    email: email.value,
    reason: reason.value,
    message: message.value
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
