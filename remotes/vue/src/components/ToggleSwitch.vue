<template>
  <label class="toggle-switch">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="handleChange"
      class="toggle-input"
    />
    <span class="toggle-slider"></span>
  </label>
</template>

<script setup lang="ts">
interface Props {
  modelValue: boolean;
}

interface Emits {
  (e: "update:modelValue", value: boolean): void;
}

defineProps<Props>();
const emit = defineEmits<Emits>();

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.checked);
};
</script>

<style scoped>
.toggle-switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  cursor: pointer;
}

.toggle-input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 24px;
  transition: 0.3s;
}

.toggle-slider::before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  border-radius: 50%;
  transition: 0.3s;
}

.toggle-input:checked + .toggle-slider {
  background-color: #1976d2;
}

.toggle-input:checked + .toggle-slider::before {
  transform: translateX(24px);
}

.toggle-input:focus + .toggle-slider {
  box-shadow: 0 0 1px #1976d2;
}
</style>
