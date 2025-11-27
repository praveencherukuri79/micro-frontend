<template>
  <div class="setting-item">
    <div class="setting-info">
      <label>{{ label }}</label>
      <span class="setting-description">{{ description }}</span>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  description: string;
}

defineProps<Props>();
</script>

<style scoped>
.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.setting-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.setting-info label {
  font-weight: 500;
  font-size: 1rem;
}

.setting-description {
  font-size: 0.875rem;
  color: #757575;
}

.dark .setting-description {
  color: #b0b0b0;
}
</style>

