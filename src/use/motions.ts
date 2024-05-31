import type { Ref } from 'vue'
import type { MaybeRef } from '@vueuse/core'
import type { MotionInstance, MotionVariants } from '@vueuse/motion'

import { tryOnScopeDispose } from '@vueuse/core'
import { useMotion } from '@vueuse/motion'
import { whenever } from '@vueuse/core'
import { useRoute } from 'vue-router'

export function useRouteMotion<T extends string, V extends MotionVariants<T>>(
  target: Ref<HTMLElement>,
  variants: MaybeRef<V> = {} as MaybeRef<V>
) {
  const route = useRoute()

  const motion = useMotion(target, variants)

  const play = async () => {
    motion.stop()

    await motion.set('initial')
    await motion.apply('enter')
  }

  const clear = whenever(() => !!route.meta.reveal, play)

  tryOnScopeDispose(clear)

  return { motion, play, clear }
}
