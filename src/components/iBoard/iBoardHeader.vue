<template>
  <div :class="boardHeaderClassList" :style="borderColorStyle">
    <div class="flex items-center font-bold text-2xl gap-1 truncate">
      <div>{{ board.title }}</div>
      <div class="flex flex-col gap-1">
        <div :class="boardTaskCounterClassList">
          {{ boardTasksCounter }}
        </div>
        <div class="cursor-pointer w-5 h-5" @click="removeStage">
          <img src="../../../public/trash.svg" alt="trash" />
        </div>
      </div>
    </div>

    <i-button :border-color="getRandomPastelColor()" class="w-9 h-9 rounded-md" @click="addNewTask"
      >+</i-button
    >
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { getRandomPastelColor } from '@/functions/functions.js'
import { useAppStore } from '@/stores/appStore.js'
import iButton from '@/components/iButton.vue'
const props = defineProps({
  board: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['addTask'])
const { removeBoard } = useAppStore()
const borderColorStyle = computed(() => ({
  'border-color': getRandomPastelColor()
}))
const boardTasksCounter = computed(() => props.board.tasks.length)

function removeStage() {
  removeBoard(props.board.id)
}

function addNewTask() {
  emit('addTask')
}
const boardHeaderClassList =
  'w-full px-2.5 py-3.5 border-1 rounded-md border-solid border-gray-100 bg-white text-black flex max-h-24 border-t-8 justify-between items-center gap-3'
const boardTaskCounterClassList =
  'cursor-auto w-5 h-5 flex justify-center items-center text-base rounded-sm border border-gray-100 border-solid'
</script>
<style lang="scss" scoped></style>
