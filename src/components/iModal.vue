<template>
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">{{ title }}</h3>
          <span class="close" @click="emit('close')">×</span>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <i-button class="bg-green-100 border-green-500 rounded-md" @click="emit('save')"
            >Сохранить</i-button
          >
          <i-button class="bg-red-100 border-red-500 rounded-md" @click="emit('close')"
            >Отмена</i-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import iButton from '@/components/iButton.vue'
const emit = defineEmits(['close', 'save'])
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1050;
  margin: 0;
  padding: 0;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 10px;
}
.modal-footer {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 20px;
  justify-content: center;
  padding: 0px 15px 15px;
}
@media (min-width: 576px) {
  .modal-dialog {
    max-width: 500px;
    margin: 30px auto; /* для отображения модального окна по центру */
  }
}
/* свойства для блока, содержащего контент модального окна */
.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}
@media (min-width: 768px) {
  .modal-content {
    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #eceeef;
}
.modal-title {
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1.5;
  font-size: 1.25rem;
  font-weight: 500;
}

.close {
  font-family: sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
  cursor: pointer;
  text-decoration: none;
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 15px;
  overflow: auto;
}
</style>
