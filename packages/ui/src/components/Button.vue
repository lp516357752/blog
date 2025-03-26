<template>
  <button class="ui-button" :class="type" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  type?: 'primary' | 'secondary' | 'danger'
}>()

defineEmits<{
  (e: 'click'): void
}>()
</script>

<style scoped>
.ui-button {
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
</style> 