<script setup>
import { cn } from '@utils/ui-shadcn.util'

const props = defineProps({
  class: { type: null, required: false }
})
</script>

<template>
  <tbody :class="cn('[&_tr:last-child]:border-0', props.class)">
    <slot />
  </tbody>
</template>
