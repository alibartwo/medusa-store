<template>
  <div class="py-6 border-b border-gray-200 last:border-none">
    <button
      class="flex justify-between items-start w-full text-left"
      @click="open = !open"
    >
      <div class="flex gap-4">
        <span class="text-primary font-semibold">{{ indexText }}</span>
        <h3 class="font-semibold text-gray-900 leading-snug">
          {{ question }}
        </h3>
      </div>
      <Icon
        :name="open ? 'mdi:close' : 'mdi:plus'"
        class="w-5 h-5 text-primary shrink-0 mt-1 transition-transform duration-200"
      />
    </button>

    <Transition name="fade">
      <div
        v-show="open"
        class="pl-10 pr-2 mt-3 text-sm text-gray-600 leading-relaxed"
      >
        {{ answer }}
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  question: string;
  answer: string;
  index?: number;
}>();

const open = ref(false);

const indexText = computed(() =>
  typeof props.index === "number"
    ? String(props.index + 1).padStart(2, "0")
    : "--",
);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
