<template>
  <div class="flex flex-wrap w-full gap-5">
    <i-board v-for="board in boards" :key="board.id" :board="board" />
    <i-button class="absolute bottom-3 right-3 rounded-md bg-purple-400" @click="openAddBoardModal"
      >Add</i-button
    >
    <i-modal
      v-if="openModal"
      title="Добавление новой стадии"
      @close="closeModalHandler"
      @save="saveHandler"
    >
      <i-input v-model="inputValue" />
    </i-modal>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import iBoard from '@/components/iBoard/iBoard.vue'
import { useAppStore } from '@/stores/appStore.js'
import { storeToRefs } from 'pinia'
import iButton from '@/components/iButton.vue'
import iInput from '@/components/iInput.vue'
import iModal from '@/components/iModal.vue'

const { boards } = storeToRefs(useAppStore())
const { addBoard } = useAppStore()
const inputValue = ref('')
const openModal = ref(false)

function openAddBoardModal() {
  openModal.value = true
}

function closeModalHandler() {
  openModal.value = false
  inputValue.value = ''
}

function saveHandler() {
  if (inputValue.value.trim()) {
    addBoard(inputValue.value)
    openModal.value = false
    inputValue.value = ''
  }
}
</script>
<style lang="scss" scoped></style>
