<script setup>
import WhatsApp from "../components/WhatsApp.vue";
</script>

<template>
  <!-- Hero Section Start -->
  <div id="top" class="flex items-center justify-center w-full overflow-x-hidden lg:overflow-x-visible">
    <section class="grid grid-cols-none lg:grid-cols-2 p-16 items-center relative">
      <div
        class="absolute inset-0 bg-cover bg-center opacity-50"
        style="background-image: url('/images/plane.png'); background-position: top 70% left 25px"
      ></div>
      <div class="lg:w-5/6 lg:order-none">
        <h1 class="text-4xl xl:text-5xl font-bold font-theme-heading text-center lg:text-left">Problemas com o seu voo? Fique atento!</h1>
        <p class="lg:text-xl mt-10 text-center lg:text-left">
          Você pode ter direito a uma indenização por danos morais e materiais, mesmo que tenha recebido alguma espécie de voucher!
        </p>
        <div class="flex justify-center lg:justify-start mt-10"></div>
      </div>
      <WhatsApp text="Quero defender meus direitos!" />
    </section>
  </div>
  <!-- Hero Section End -->
</template>
