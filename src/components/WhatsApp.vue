<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "Frones & Soares, advocacia especializada",
  },
  number: {
    type: String,
    default: "5521969725049",
  },
});

function openWhatsApp() {
  let message = "Olá, tive um problema com meu voo e preciso de ajuda";

  // URL for WhatsApp Web and Mobile
  let whatsappUrl = `https://wa.me/${props.number}?text=${encodeURIComponent(message)}`;

  window.location.href = whatsappUrl;
}
</script>

<template>
  <button class="flex relative bg-theme-whats-app w-fit flex items-center max-h-[40px] pr-10 rounded-full justify-self-center" @click="openWhatsApp">
    <p class="w-full lg:text-l flex-grow text-white p-3 pl-5 m-0 font-semibold">{{ text }}</p>
    <img class="absolute -right-5 h-[110%]" src="/images/logo-WhatsApp.png" alt="WhatsApp logo" />
  </button>
</template>
