<script setup>
import features from "../data/features.js";
import WhatsApp from "../components/WhatsApp.vue";
</script>

<template>
  <!-- Features Section Start -->
  <div id="features" class="container mx-auto px-5">
    <section class="py-16">
      <div v-for="feature in features" :key="feature.id" class="grid w-4/5 md:w-3/5 mx-auto mb-10 pb-10 items-center justify-center">
        <div class="flex items-center justify-center gap-5">
          <i :class="feature.details.icon" class="lg:text-xl"></i>
          <h6 class="text-3xl md:text-4xl font-semibold font-theme-heading text-center">{{ feature.name }}</h6>
        </div>
        <p class="mt-7 mb-7 font-theme-content lg:text-xl text-center lg:text-left">{{ feature.details.description }}</p>
        <WhatsApp :text="feature.details.whatsAppText" />
      </div>
    </section>
  </div>
  <!-- Features Section End -->
</template>
