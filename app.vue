<script setup>
useHead({
  script: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-T0ZR9QKW84',
      async: true,
    },
    {
      children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-T0ZR9QKW84');
      `,
    },
  ],
})
</script>

<template>
  <NuxtPage />
</template>