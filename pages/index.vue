<script setup>
const now = new Date()
const showRSVP = now >= new Date('2025-05-02T00:00:00')
</script>

<template>
  <Head>
    <title>Silver Tea | Florence Crittenton</title>
    <meta name="description" content="Join us in celebrating 125 years of hope, compassion and dignity at Florence Crittenton Family Services. Enjoy an elegant afternoon tea in the grandeur of the Montana State Capitol Rotunda, featuring an assortment of delicate sandwiches, decadent cakes, and fine tea." />
    <link rel="canonical" href="https://fcsilvertea.org/" />
    <meta property="og:title" content="Silver Tea | Florence Crittenton" />
    <meta property="og:description" content="Join us in celebrating 125 years of hope, compassion and dignity at Florence Crittenton Family Services. Enjoy an elegant afternoon tea in the grandeur of the Montana State Capitol Rotunda, featuring an assortment of delicate sandwiches, decadent cakes, and fine tea." />
    <meta property="og:image" content="https://fcsilvertea.org/images/og-image.png" />
  </Head>

  <section class="relative w-full h-screen overflow-hidden bg-brand1 text-brand9">
    <!-- Floral Left (rotated and flipped, full height) -->
    <img
      src="/images/flowers.png"
      alt="Floral decoration left"
      class="absolute left-0 top-0 h-full scale-x-[-1] scale-y-[-1] hidden xl:block"
    />

    <!-- Floral Right (normal, full height) -->
    <img
      src="/images/flowers.png"
      alt="Floral decoration right"
      class="absolute top-0 right-0 hidden h-full xl:block"
    />

    <!-- Scallop Divider as image, not component -->
    <img
      src="/images/scallop-divider.svg"
      alt=""
      class="absolute left-0 w-full -bottom-4"
    />

    <!-- Center Content -->
    <div class="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
      <img src="/images/logo.png" class="pb-20 2xl:max-h-[452px] xl:max-h-96" alt="Silver Tea" />
      <h1 class="font-serif text-4xl italic text-brand8 md:text-5xl lg:text-6xl">
        You are Cordially Invited
      </h1>
      <p class="flex items-center justify-center gap-2 mt-4 mb-2 text-2xl font-bold tracking-[4px] uppercase text-brand6">
        Thursday •
        <img src="/images/fancyDate.svg" alt="12th" class="inline-block pb-10" />
        • June 2025
      </p>
      <div class="text-center justify-start text-neutral-400 font-brand8 font-semibold uppercase leading-relaxed tracking-[4px]">
        from 1:30 – 3:30 PM<br />Montana State Capitol Rotunda
        Helena, MT
      </div>

      <component
        :is="showRSVP ? 'a' : 'div'"
        :href="showRSVP ? 'https://us.givergy.com/SilverTea2025/?controller=tickets' : null"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block px-10 py-2 my-8 font-serif text-lg text-center text-white cursor-pointer bg-brand5 hover:opacity-90"
      >
        {{ showRSVP ? 'RSVP' : 'Tickets go on sale May 2nd' }}
      </component>
    </div>
  </section>

  <section class="px-4 pt-16 text-center text-white pb-60 bg-brand6">
    <div class="md:w-[701px] m-auto text-center justify-start text-white text-base font-normal uppercase leading-relaxed tracking-[4px]">
      Join us in celebrating 125 years of hope, compassion and dignity at Florence Crittenton Family Services. Enjoy an elegant afternoon tea in the grandeur of the Montana State Capitol Rotunda, featuring an assortment of delicate sandwiches, decadent cakes, and fine tea.
    </div>
    <p class="mt-12 font-serif text-2xl italic text-brand1">
      RSVP by <span class="underline">June 2nd 2025</span>
    </p>
  </section>

  <section class="px-4 pt-20 pb-40 bg-white text-brand9">
    <div class="container grid items-center max-w-6xl grid-cols-1 gap-12 mx-auto md:grid-cols-2">
      <!-- Left Text -->
      <div>
        <h2 class="mb-6 font-serif text-5xl italic font-medium text-brand8">
          Style That Gives Back.
        </h2>
        <p class="max-w-md leading-relaxed text-brand8">
          Browse our gently used designer handbag silent auction and enter for a chance to win a luxury spa package in our exclusive raffle. All proceeds benefit the young families participating in Florence Crittenton’s life changing programs.
        </p>
      </div>

      <!-- Right Images -->
      <div class="relative w-full">
        <img
          src="/images/teacup.jpg"
          alt="Tea and scone"
          class="z-0 w-full pl-24 md:-mt-60"
        />
        <img
          src="/images/purse.png"
          alt="Pink purse"
          class="absolute md:top-0 top-10 w-44 md:-left-20 md:w-80"
        />
      </div>
    </div>

    <!-- Floral Divider -->
    <div class="container relative z-50 m-auto -mt-20">
      <img
        src="/images/flowers2.png"
        alt="Floral decoration"
        class="w-full h-auto"
      />
    </div>

    <!-- Ticket Info -->
    <div class="mt-12 text-center">
      <h3 class="mb-2 font-serif text-7xl text-brand8">
        Tickets
      </h3>
      <p class="mb-6 text-brand9">
        Each ticket includes afternoon tea and 1 raffle ticket
      </p>

      <div class="flex flex-wrap justify-center gap-6 mb-4">
        <!-- Individual Ticket -->
        <div>
          <component
            :is="showRSVP ? 'a' : 'div'"
            :href="showRSVP ? 'https://us.givergy.com/SilverTea2025/?controller=tickets' : null"
            target="_blank"
            rel="noopener noreferrer"
            class="px-6 py-2 font-bold tracking-[4px] text-white uppercase bg-brand6 text-center block cursor-pointer"
          >
            Individual Tickets
          </component>
          <p class="mt-4 italic text-brand9">
            $50/each
          </p>
        </div>

        <!-- Table of 8 -->
        <div>
          <component
            :is="showRSVP ? 'a' : 'div'"
            :href="showRSVP ? 'https://us.givergy.com/SilverTea2025/?controller=tickets' : null"
            target="_blank"
            rel="noopener noreferrer"
            class="px-6 py-2 font-bold tracking-[4px] text-white uppercase bg-brand5 text-center block cursor-pointer"
          >
            Table of 8
          </component>
          <p class="mt-4 italic text-brand9">
            $400
          </p>
        </div>
      </div>

      <p class="text-brand8">
        Purchase online or call <a href="tel:4064137014" class="underline">406.413.7014</a> or email
        <a href="mailto:paigen@florencecrittenton.org" class="underline">paigen@florencecrittenton.org</a>
      </p>
    </div>
  </section>

  <!-- Afternoon Tea Menu Section -->
  <section class="relative px-4 pt-20 pb-32 text-center text-white bg-brand6">
    <!-- Top scallop divider -->
    <img src="/images/scallop-divider.svg" alt="" class="absolute left-0 z-50 w-full -translate-y-full top-3" />

    <!-- Background images -->
    <img src="/images/crumpets.png" alt="" class="absolute left-0 hidden h-2/3 xl:block" />
    <img src="/images/crumpets2.png" alt="" class="absolute right-0 hidden h-2/3 xl:block" />

    <h2 class="mb-10 font-serif text-white text-7xl">
      Afternoon Tea Menu
    </h2>

    <div class="space-y-10 leading-relaxed">
      <div>
        <h3 class="mb-2 font-bold tracking-widest text-white">
          Savory Tea Sandwiches
        </h3>
        <ul>
          <li>Traditional Egg Salad on White Bread</li>
          <li>Cucumber with Dill Cream Cheese on Rye</li>
          <li>Roast Beef with Sharp Cheddar and Horseradish Cream</li>
          <li>Montana-Raised Ham with Swiss and Whole-Grain Dijon</li>
          <li>House-Smoked Salmon Mousse on Pumpernickel</li>
        </ul>
      </div>
      <img src="/images/tinyDivider.png" alt="" class="mx-auto my-4" />
      <div>
        <h3 class="mb-2 font-bold tracking-widest text-white">
          Sweet Delights
        </h3>
        <ul>
          <li>Freshly Baked Scones with Clotted Cream and Fruit Preserves</li>
          <li>Assorted Petite Dessert Bar Bites</li>
          <li>Delicate French Macarons in a Variety of Flavors</li>
          <li>Classic Petit Fours</li>
        </ul>
      </div>
      <img src="/images/tinyDivider.png" alt="" class="mx-auto my-4" />
      <div>
        <h3 class="mb-2 font-bold tracking-widest text-white">
          Tea Service
        </h3>
        <p>Selection of Fine Teas at Each Table</p>
      </div>
    </div>
  </section>

  <!-- Raffle Bar -->
  <div class="py-4 bg-brand-gradient">
    <div class="text-center justify-start uppercase leading-relaxed tracking-[4px] text-brand6">
      Raffle information – Win a luxury spa package – details coming soon
    </div>
  </div>

  <!-- Footer -->
  <footer class="px-4 py-12 bg-white">
    <div class="flex flex-col items-center justify-between gap-8 mx-auto max-w-7xl md:flex-row">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <img src="/images/logo.png" alt="Silver Tea 125th Anniversary" class="w-64 h-auto mx-auto md:mx-0" />
      </div>

      <!-- Contact Info -->
      <div class="flex flex-col items-center justify-center gap-4 font-medium text-center md:flex-row text-brand8 md:gap-6 md:text-left">
        <!-- RSVP -->
        <p>
          <span class="font-serif text-2xl italic text-brand6">RSVP by:</span>
          <span class="ml-1">June 2nd 2025</span>
        </p>

        <!-- Divider -->
        <span class="hidden h-4 border-l md:inline border-brand5"></span>

        <!-- Phone -->
        <p>
          <span class="font-serif text-2xl italic text-brand6">call:</span>
          <span class="ml-1 text-lg text-brand8">406.413.7014</span>
        </p>

        <!-- Divider -->
        <span class="hidden h-4 border-l md:inline border-brand5"></span>

        <!-- Email -->
        <p>
          <span class="font-serif text-2xl italic text-brand6">email:</span>
          <span class="ml-1 text-lg text-brand8">paigen@florencecrittenton.org</span>
        </p>
      </div>
    </div>
  </footer>
</template>
