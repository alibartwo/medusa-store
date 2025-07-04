<template>
  <div class="bg-primary/10 p-4 rounded-xl transition">
    <button class="flex justify-between items-center w-full text-left" @click="open = !open">
      <h3 class="font-semibold text-primary">{{ question }}</h3>
      <span class="text-2xl text-primary transform transition-transform duration-300" :class="{ 'rotate-45': open }">
        +
      </span>
    </button>
    <Transition name="accordion">
      <div v-show="open" class="overflow-hidden mt-2 text-gray-600 text-sm leading-relaxed">
        <p class="py-2">{{ answer }}</p>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  question: string;
  answer: string;
}>();

const open = ref(false);
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
