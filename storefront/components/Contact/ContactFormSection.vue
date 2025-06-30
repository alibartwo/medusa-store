<template>
  <section class="bg-white py-16 px-4">
    <div class="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      <ContactForm />
      <ContactEmbeddedMap />
    </div>
  </section>
</template>

<script setup>
import ContactForm from "@/components/Forms/ContactForm.vue";
</script>
