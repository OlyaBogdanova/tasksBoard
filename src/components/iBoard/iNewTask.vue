<template>
  <div class="task__container">
    <div class="task__info">
      <i-input v-model="taskTitle" placeholder="Введите название новой задачи" />
    </div>
    <div class="task__actions">
      <i-button background-color="#8CCB5E" @click="addNewTask">Сохранить</i-button>
      <i-button background-color="#F34723" @click="emit('cancel')">Отмена</i-button>
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
<style lang="scss" scoped>
.task__container {
  min-height: 100px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 5px;
}
.task__actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
</style>
