<script setup lang="ts">
import { NuxtLink } from '#components'
defineProps<{
  label?: string;
  icon?: string;
  iconSize?: string; // Örn: "w-6 h-6"
  to?: string;
  type?: "primary" | "secondary" | "white";
}>();
</script>

<template>
  <component :is="to ? NuxtLink : 'button'" :to="to || undefined"
    class="flex items-center gap-2 px-5 py-2 text-sm transition-all rounded-lg w-fit" :class="{
      'bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:scale-[1.02]': type === 'primary',
      'bg-transparent text-white border border-white hover:bg-white hover:text-primary': type === 'white',
      'text-primary border border-primary hover:bg-primary hover:text-white': type === 'secondary',
    }">
    <span v-if="label">{{ label }}</span>
    <Icon v-if="icon" :name="icon" :size="iconSize || 'w-8 h-8'" />
  </component>
</template>
