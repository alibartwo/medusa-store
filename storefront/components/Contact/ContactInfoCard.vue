<template>
  <div class="bg-[#f9f9fb] rounded-2xl p-6 flex flex-col items-start gap-3">
    <div class="bg-primary text-white rounded-xl p-2">
      <Icon :name="icon" :size="32" />
    </div>
    <h3 class="text-base font-semibold text-gray-800">{{ title }}</h3>
    <p class="text-sm text-gray-500 leading-snug mt-2">
      <slot />
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  icon: String,
});
</script>
