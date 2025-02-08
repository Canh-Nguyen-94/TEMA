<script setup>
import { cn } from '@utils/ui-shadcn.util'

const props = defineProps({
  class: { type: null, required: false }
})
</script>

<template>
  <div :class="cn('rounded-lg bg-background text-primary shadow-card', props.class)">
    <slot />
  </div>
</template>
