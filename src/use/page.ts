import type { Ref } from 'vue'
import type { MaybeRef } from '@vueuse/core'
import { useTitle } from '@vueuse/core'

export function usePageTitle (title: MaybeRef<string>): Ref<string> {
  const base = 'Erik Vavro | Software Architect'

  if (title) {
    return useTitle(title, { titleTemplate: `%s | ${base}` })
  }

  return useTitle(base)
}
