<template>
  <div class="input__container">
    <label v-if="label" class="input__label" :for="id">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :placeholder="placeholder"
      :value="modelValue"
      class="input__textField"
      @input="$emit('update:model-value', $event.target.value)"
    />
    <i v-if="icon" :class="computedIconClasses"></i>
  </div>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({
  id: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  }
})
const computedIconClasses = computed(() =>
  props.icon ? `${props.icon} input__icon` : 'input__icon'
)
</script>
<style lang="scss" scoped>
.input__container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  &:hover {
    .input__textField {
      border: 1px solid rgb(255, 181, 97);
    }
    .input__icon {
      color: rgb(255, 181, 97);
    }
  }
}
.input__textField {
  border: 1px solid gray;
  padding: 5px 30px 5px 10px;
  border-radius: 5px;
  transition: all 0.3s ease;
  flex: 1;
  &:focus {
    border: 1px solid rgb(255, 181, 97);
  }
}
.input__label {
  margin-right: 5px;
}
.input__icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  transition: all 0.3s ease;
}
</style>
