<template>
  <div class="w-full flex justify-end items-center relative hover:border-orange-400">
    <label v-if="label" class="mr-1" :for="id">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :placeholder="placeholder"
      :value="modelValue"
      class="w-full transition-all border border-solid border-gray-300 rounded-md focus:border-orange-400 p-2"
      :style="computedStyle"
      @input="$emit('update:model-value', $event.target.value)"
    />
  </div>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({
  id: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    required: true
  },

  borderless: {
    type: Boolean,
    default: false
  }
})

const computedStyle = computed(() =>
  props.borderless ? 'border:none; border-bottom:1px solid black; border-radius:0px' : ''
)
</script>
<style lang="scss" scoped></style>
