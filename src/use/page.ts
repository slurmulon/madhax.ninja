import type { Ref } from 'vue'
import { ref, computed, onActivated } from 'vue'
import type { MaybeRef } from '@vueuse/core'
import { get } from '@vueuse/core'

export const loading = ref(false)

export function usePageTitle (title: MaybeRef<string>): Ref<string> {
  const base = ref('Erik Vavro | Software Architect')
  const content = computed(() => get(title) ? `${title} | ${get(base)}` : get(base))

  onActivated(() => {
    document.title = content.value
  })

  return content
}