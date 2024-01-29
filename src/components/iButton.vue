<template>
  <button :style="computedBtnStyled" class="myBtn"><slot /></button>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({
  borderRadius: {
    type: String,
    default: '5px'
  },
  borderColor: {
    type: String,
    default: 'gray'
  },
  backgroundColor: {
    type: String,
    default: 'transparent'
  },
  width: {
    type: String,
    default: 'fit-content'
  },
  height: {
    type: String,
    default: 'fit-content'
  }
})
const computedBtnStyled = computed(() => ({
  'border-radius': props.borderRadius,
  'border-color': props.borderColor,
  width: props.width,
  height: props.height,
  'background-color': props.backgroundColor
}))
</script>
<style lang="scss" scoped>
.myBtn {
  border-style: solid;
  border-width: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 5px;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    filter: contrast(200%);
  }
}
</style>
