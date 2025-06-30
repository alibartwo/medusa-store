<script setup lang="ts">
defineProps<{
    modelValue: string
    placeholder?: string
    type?: string
}>()

const emit = defineEmits(['update:modelValue'])
</script>

<template>
    <input :type="type || 'text'" :placeholder="placeholder" :value="modelValue"
        class="w-full bg-gray-100 text-gray-700 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
</template>