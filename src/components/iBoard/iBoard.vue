<template>
  <div class="board__container flex">
    <i-board-header :board="board" />
  </div>
</template>
<script setup>
import iBoardHeader from '@/components/iBoard/iBoardHeader.vue'
defineProps({
  board: { type: Object, required: true }
})
</script>
<style lang="scss" scoped>
.board__container {
  display: flex;
  flex: 1;
}
</style>
