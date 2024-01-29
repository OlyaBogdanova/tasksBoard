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
  const draggableTask = ref(null)
  function addBoard(title) {
    boards.value.push({ id: generateId(), title, tasks: [] })
  }
  function removeBoard(id) {
    boards.value = boards.value.filter((el) => el.id !== id)
  }
  function addNewTaskInStorage({ taskName, stageId }) {
    boards.value = boards.value.map((el) => {
      if (el.id === stageId) {
        el.tasks.push({ title: taskName, body: '', id: generateId() })
      }
      return el
    })
  }

  function editTask(boardId, task) {
    const currentBoardTasks = boards.value.find((board) => board.id === boardId).tasks
    const currentTask = currentBoardTasks.findIndex((el) => el.id === task.id)
    currentBoardTasks.splice(currentTask, 1, task)
  }

  function removeTaskInStore(taskId) {
    for (let i = 0; i < boards.value.length; i++) {
      let tasks = boards.value[i].tasks
      for (let j = 0; j < tasks.length; j++) {
        if (tasks[j].id === taskId) {
          tasks.splice(j, 1)
        }
      }
    }
  }
  function dropTask(task, finalBoard) {
    removeTaskInStore(task.id)
    const currentBoardTasks = boards.value.find((board) => board.id === finalBoard.id)
    console.log(currentBoardTasks, task)
    currentBoardTasks.tasks.push(task)
  }

  return {
    boards,
    addBoard,
    removeBoard,
    addNewTaskInStorage,
    editTask,
    removeTaskInStore,
    dropTask,
    draggableTask
  }
})
