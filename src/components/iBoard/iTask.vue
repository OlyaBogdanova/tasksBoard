<template>
  <div class="task__container truncate" :draggable="true">
    {{ title }}
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
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
  font-size: 24px;
}
.task__actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
</style>
