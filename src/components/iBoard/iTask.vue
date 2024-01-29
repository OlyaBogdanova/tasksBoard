<template>
  <div :class="taskContainerClassList" :draggable="true" @click="emit('showTask')">
    {{ task.title }}
    <div
      class="absolute top-2.5 right-2.5 flex items-center justify-center gap-5 cursor-pointer w-5 h-5"
      @click.stop="removeTaskInStore(task.id)"
    >
      <img src="/trash.svg" alt="trash" />
    </div>
  </div>
</template>
<script setup>
import { useAppStore } from '@/stores/appStore.js'
const { removeTaskInStore } = useAppStore()
defineProps({
  task: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['showTask'])
const taskContainerClassList =
  'flex flex-col bg-white border-1 rounded-md border-solid border-gray-100 p-2.5 min-h-24 gap-2.5 text-2xl cursor-pointer relative truncate'
</script>
<style lang="scss" scoped></style>
