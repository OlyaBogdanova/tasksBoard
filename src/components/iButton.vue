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
    default: 'gary'
  },
  width: {
    type: String,
    default: '20px'
  },
  height: {
    type: String,
    default: '20px'
  }
})
const computedBtnStyled = computed(() => ({
  'border-radius': props.borderRadius,
  'border-color': props.borderColor,
  width: props.width,
  height: props.height
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
  &:hover {
    filter: contrast(200%);
  }
}
</style>
