<script setup>
import WhatsApp from "../components/WhatsApp.vue";
</script>

<template>
  <!-- Hero Section Start -->
  <div id="hero" class="container mx-auto px-5 overflow-x-hidden lg:overflow-x-visible">
    <section class="grid grid-cols-none lg:grid-cols-2 pb-16 items-center">
      <div class="lg:w-5/6 order-2 lg:order-none">
        <h1 class="xl:text-3xl font-bold font-theme-heading text-center lg:text-left">Dr. Renan Soares Ferreira Araujo OAB/RJ 223.502</h1>
        <p class="lg:text-xl mt-10 font-theme-content text-center lg:text-left">
          Advogado pós-graduado e com atuação na defesa do consumidor há mais de 5 anos.
        </p>
        <p class="lg:text-xl mt-5 font-theme-content text-center lg:text-left">E-mail: renansoares.adv@gmail.com</p>
        <!-- <p class="lg:text-xl font-theme-content text-center lg:text-left">Contato: (21) 96972-5049</p> -->
        <div class="mt-7 flex justify-center">
          <WhatsApp text="Entre em contato" />
        </div>
        <div class="flex justify-center lg:justify-start mt-10"></div>
      </div>
      <div class="relative order-1 lg:order-none mb-20 lg:mt-0 lg:mb-0 lg:-mr-10">
        <img class="z-10 ml-20 w-2/4" src="/images/profile.png" alt="Soares profile picture" />
        <div class="-z-10 bg-theme-primary h-52 w-full sm:h-80 sm:w-full rounded-l-full absolute -right-28 md:-right-48 -bottom-8"></div>
      </div>
    </section>

    <section class="grid grid-cols-none lg:grid-cols-2 mt-8 pb-16 items-center">
      <div class="lg:w-5/6 order-2 lg:order-none">
        <h1 class="xl:text-3xl font-bold font-theme-heading text-center lg:text-left">Dra. Nathally Lorraynne Frones OAB/SP 399.856</h1>
        <p class="lg:text-xl mt-10 font-theme-content text-center lg:text-left">
          Advogada especializada e com atuação na defesa do consumidor a mais de 6 anos.
        </p>
        <p class="lg:text-xl mt-5 font-theme-content text-center lg:text-left">E-mail: nfrones@gmail.com</p>
        <!-- <p class="lg:text-xl font-theme-content text-center lg:text-left">Contato: (21) XXXXX-XXXX</p> -->
        <div class="mt-7 flex justify-center">
          <WhatsApp text="Entre em contato" />
        </div>
        <div class="flex justify-center lg:justify-start mt-10"></div>
      </div>
      <div class="relative order-1 lg:order-none mb-20 lg:mt-0 lg:mb-0 lg:-mr-10">
        <img class="z-10 ml-20 w-2/4" src="/images/profile2.png" alt="Frones profile picture" />
        <div class="-z-10 bg-theme-primary h-52 w-full sm:h-80 sm:w-full rounded-l-full absolute -right-28 md:-right-48 -bottom-8"></div>
      </div>
    </section>
  </div>
  <!-- Hero Section End -->
</template>
