<script setup>
import { computed } from 'vue'
import { PaginationPrev } from 'radix-vue'
import { ChevronLeft } from 'lucide-vue-next'
import { Button } from '@common/ui/button'
import { cn } from '@utils/ui-shadcn.util'

const props = defineProps({
  asChild: { type: Boolean, required: false, default: true },
  as: { type: null, required: false },
  class: { type: null, required: false }
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <PaginationPrev v-bind="delegatedProps">
    <Button :class="cn('w-[28px] h-[28px] p-0  border-grey-100', props.class)" variant="secondary">
      <slot>
        <ChevronLeft class="h-4 w-4" />
      </slot>
    </Button>
  </PaginationPrev>
</template>
