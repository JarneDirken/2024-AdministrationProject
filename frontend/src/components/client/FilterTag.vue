<template>
    <div v-if="value" class="bg-gray-300 p-1 rounded flex items-center gap-1">
      <font-awesome-icon 
        :icon="['fas', 'times']" 
        class="text-gray-600 font-semibold text-sm cursor-pointer" 
        @click="clearFilter"
        style="line-height: 1; vertical-align: middle;" />
      <span class="text-gray-600 text-sm">{{ label }}:</span>
      <span class="text-gray-600 font-semibold text-sm">{{ value }}</span>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    label: String,
    value: String
  });
  
  const emits = defineEmits(['clear']);
  
  function clearFilter() {
    emits('clear', props.label);
  }
  </script>
  