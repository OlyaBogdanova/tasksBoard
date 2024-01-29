<template>
  <div
    class="flex flex-col bg-white border-1 rounded-md border-solid border-gray-100 p-2.5 min-h-24 gap-2.5"
  >
    <div class="task__info">
      <i-input v-model="taskTitle" placeholder="Введите название новой задачи" />
    </div>
    <div class="flex gap-5 items-center justify-center">
      <i-button class="bg-green-100 border-green-500" @click="addNewTask">Сохранить</i-button>
      <i-button class="bg-red-100 border-red-500" @click="emit('cancel')">Отмена</i-button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import iButton from '@/components/iButton.vue'
import iInput from '@/components/iInput.vue'
const taskTitle = ref('')
const emit = defineEmits(['addNewTask', 'cancel'])
function addNewTask() {
  const title = taskTitle.value.trim()
  if (title) {
    emit('addNewTask', title)
  }
}
</script>
<style lang="scss" scoped></style>
