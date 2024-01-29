<template>
  <div class="stage__header" :style="borderColorStyle">
    <div class="stage__title">
      <div>{{ board.title }}</div>
      <div class="stage__actions">
        <div class="stage__tasks_counter">{{ boardTasksCounter }}</div>
        <div class="stage__remove" @click="removeStage">
          <img src="../../../public/trash.svg" alt="trash" />
        </div>
      </div>
    </div>

    <i-button width="35px" height="35px" :border-color="getRandomPastelColor()" @click="addNewTask"
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
    type: String,
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
</script>
<style lang="scss" scoped>
.stage__header {
  width: 100%;
  padding: 15px 10px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
  display: flex;
  max-height: 100px;
  border-top-width: 10px;
  border-top-style: solid;
  justify-content: space-between;
  align-items: center;
}
.stage__title {
  font-weight: bold;
  font-size: 24px;
  display: flex;
  align-items: center;
}

.stage__tasks_counter {
  width: 20px;
  height: 20px;
  align-items: center;
  transform: translateY(-50%);
  border: 1px solid rgb(226, 223, 223);
  font-size: 16px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
.stage__actions {
  display: flex;
  flex-direction: column;
}
.stage__remove {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>
