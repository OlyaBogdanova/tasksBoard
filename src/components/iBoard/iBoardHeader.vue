<template>
  <div class="board__header" :style="borderColorStyle">
    <div class="board__title">
      <div>{{ board.title }}</div>
      <div class="tasks_counter">{{ boardTasksCounter }}</div>
    </div>

    <iButton width="35px" height="35px" :border-color="getRandomPastelColor()">+</iButton>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { getRandomPastelColor } from '@/functions/functions.js'
import iButton from '@/components/iButton.vue'
const props = defineProps({
  board: {
    type: String,
    required: true
  }
})
const borderColorStyle = computed(() => ({
  'border-color': getRandomPastelColor()
}))
const boardTasksCounter = computed(() => props.board.tasks.length)
</script>
<style lang="scss" scoped>
.board__header {
  width: 100%;
  padding: 10px;
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
.board__title {
  font-weight: bold;
  font-size: 24px;
  display: flex;
  align-items: center;
}

.tasks_counter {
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
</style>
