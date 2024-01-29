<template>
  <div class="flex flex-1 flex-col gap-5">
    <i-board-header :board="board" @add-task="addNewTaskForm" />
    <div
      class="p-2.5 min-h-96 bg-blue-50 border-solid border-1 border-gray-100"
      @dragover.prevent="dragOver"
      @dragleave.prevent="dragLeave"
      @drop.prevent="dragDrop(board, $event)"
    >
      <i-new-task v-if="showAddTaskForm" @add-new-task="addTask" @cancel="cancelHandler" />
      <i-task
        v-for="task in board.tasks"
        :key="task.title"
        :task="task"
        @show-task="showTask(task)"
        @dragstart="dragStart(task, $event)"
        @dragend="dragEnd"
      />
      <i-modal v-if="showTaskDetails" @save="saveTaskChanges" @close="cancelHandlerEditForm">
        <template #header>
          <i-input v-model="currentTask.title" :borderless="true" />
        </template>
        <template #default>
          <textarea v-model="currentTask.body" class="w-full border-solid border p-1" />
        </template>
      </i-modal>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useAppStore } from '@/stores/appStore.js'
import { storeToRefs } from 'pinia'
import iBoardHeader from '@/components/iBoard/iBoardHeader.vue'
import iNewTask from '@/components/iBoard/iNewTask.vue'
import iTask from '@/components/iBoard/iTask.vue'
import iModal from '@/components/iModal.vue'
import iInput from '@/components/iInput.vue'

const props = defineProps({
  board: { type: Object, required: true }
})

const showAddTaskForm = ref(false)
const currentTask = ref(null)
const showTaskDetails = ref(false)
const { addNewTaskInStorage, editTask, dropTask } = useAppStore()
const { draggableTask } = storeToRefs(useAppStore())

function addNewTaskForm() {
  showAddTaskForm.value = true
}

function addTask(title) {
  addNewTaskInStorage({ taskName: title, stageId: props.board.id })
  showAddTaskForm.value = false
}

function cancelHandler() {
  showAddTaskForm.value = false
}

function cancelHandlerEditForm() {
  showTaskDetails.value = false
}

function showTask(task) {
  showTaskDetails.value = true
  currentTask.value = { ...task }
}

function saveTaskChanges() {
  if (currentTask.value.title.trim()) {
    editTask(props.board.id, currentTask.value)
    showTaskDetails.value = false
  }
}

function dragStart(task, e) {
  draggableTask.value = task
  setTimeout(() => (e.target.style.display = 'none'), 0)
}
function dragEnd(e) {
  e.target.style.display = 'flex'
}
function dragOver(e) {
  e.target.style.backgroundColor = '#fcf7f7'
}
function dragLeave(e) {
  e.target.style.backgroundColor = '#f5f9fd'
}

function dragDrop(board, e) {
  e.target.style.backgroundColor = '#f5f9fd'
  dropTask(draggableTask.value, board)
}
</script>
<style lang="scss" scoped></style>
