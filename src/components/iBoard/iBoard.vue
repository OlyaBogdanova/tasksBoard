<template>
  <div class="board__container flex">
    <i-board-header :board="board" @add-task="addNewTask" />
    <i-new-task v-if="showAddTaskForm" @add-new-task="addTask" @cancel="cancelHandler" />
    <i-task v-for="task in board.tasks" :key="task.title" :title="task.title" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import iBoardHeader from '@/components/iBoard/iBoardHeader.vue'
import iNewTask from '@/components/iBoard/iNewTask.vue'
import iTask from '@/components/iBoard/iTask.vue'
import { useAppStore } from '@/stores/appStore.js'
const props = defineProps({
  board: { type: Object, required: true }
})
const showAddTaskForm = ref(false)
const { addNewTaskInStorage } = useAppStore()
function addNewTask() {
  showAddTaskForm.value = true
}

function addTask(title) {
  addNewTaskInStorage({ taskName: title, stageId: props.board.id })
  showAddTaskForm.value = false
}

function cancelHandler() {
  showAddTaskForm.value = false
}
</script>
<style lang="scss" scoped>
.board__container {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
}
</style>
