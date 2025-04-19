<script>
import { MaskInput } from 'vue-3-mask'

export default {
  inheritAttrs: false,
}
</script>

<script setup>
const props = defineProps({
  errorClass: {
    type: String,
    required: false,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
})
</script>

defineOptions({ inheritAttrs: false })

<template>
  <Field v-slot="{ field }" :name="props.name">
    <MaskInput
      v-if="props.type === 'phone'"
      mask="(###) ###-####"
      type="props.type"
      v-bind="{ ...field, ...$attrs }"
    />
    <input
      v-else
      v-bind="{ ...field, ...$attrs }"
    />
  </Field>
  <ErrorMessage :class="props.errorClass" :name="props.name" />
</template>
