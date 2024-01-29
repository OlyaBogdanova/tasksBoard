<template>
  <div class="boards__container">
    <i-board v-for="board in boards" :key="board.id" :board="board" />
    <i-button
      class="add_board"
      width="50px"
      height="50px"
      border-color="purple"
      @click="openAddBoardModal"
      >+ Add</i-button
    >
    <i-modal v-if="openModal" @close="closeModalHandler" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import iBoard from '@/components/iBoard/iBoard.vue'
import { useAppStore } from '@/stores/appStore.js'
import { storeToRefs } from 'pinia'
import iButton from '@/components/iButton.vue'
import iModal from '@/components/iModal.vue'

const { boards } = storeToRefs(useAppStore())
const openModal = ref(false)
function openAddBoardModal() {
  openModal.value = true
}

function closeModalHandler() {
  openModal.value = false
}
</script>
<style lang="scss" scoped>
.boards__container {
  display: flex;
  gap: 20px;
  width: 100%;
  flex-wrap: wrap;
  min-height: 100vh;
}
.add_board {
  position: absolute;
  bottom: 20px;
  right: 20px;
}
</style>
