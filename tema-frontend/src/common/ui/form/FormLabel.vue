<script setup>
import { useFormField } from './useFormField'
import { cn } from '@utils/ui-shadcn.util'
import { Label } from '@common/ui/label'

const props = defineProps({
  for: { type: String, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: null, required: false }
})

const { formItemId } = useFormField()
</script>

<template>
  <Label :class="cn('text-secondary', props.class)" :for="formItemId">
    <slot />
  </Label>
</template>
