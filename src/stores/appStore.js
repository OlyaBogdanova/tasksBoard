import { ref } from 'vue'
import { defineStore } from 'pinia'
import { generateId } from '@/functions/functions'
export const useAppStore = defineStore('appStore', () => {
  const boards = ref([
    { id: generateId(), title: 'To do', tasks: [] },
    { id: generateId(), title: 'In Progress', tasks: [] },
    { id: generateId(), title: 'Test', tasks: [] },
    { id: generateId(), title: 'Done', tasks: [] }
  ])

  function addBoard(title) {
    boards.value.push({ id: generateId(), title, tasks: [] })
  }
  function removeBoard(id) {
    boards.value = boards.value.filter((el) => el.id !== id)
  }
  function addNewTaskInStorage({ taskName, stageId }) {
    boards.value = boards.value.map((el) => {
      if (el.id === stageId) {
        el.tasks.push({ title: taskName })
      }
      return el
    })
  }

  return { boards, addBoard, removeBoard, addNewTaskInStorage }
})
