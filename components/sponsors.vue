<script setup>
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { onMounted, ref } from 'vue'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

const displayTiers = [
  { id: 'Tea - 5000', label: 'Hope for Tomorrow' },
  { id: 'Tea - 2500', label: 'Strengthening Families' },
  { id: 'Tea - 1000', label: 'Flourishing Futures' },
  { id: 'Tea - 500', label: 'Transforming Lives' },
]
const logosByTier = ref({
  'Tea - 5000': [],
  'Tea - 2500': [],
  'Tea - 1000': [],
  'Tea - 500': [],
})

const swiperBreakpoints = {
  0: {
    slidesPerView: 1,
  },
  640: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 5,
  },
}

onMounted(async () => {
  try {
    const res = await fetch('/api/logos')
    const logos = await res.json()

    for (const tier of displayTiers) {
      const tierId = tier.id
      const titleMap = new Map()

      logos
        .filter(logo =>
          logo.carousels?.some(c => c === tier.id),
        )
        .forEach((logo) => {
          const key = logo.title?.toLowerCase()
          if (!key)
            return

          const existing = titleMap.get(key)
          if (!existing || (logo.url && !existing.url) || (!logo.image && existing.image)) {
            titleMap.set(key, logo)
          }
        })

      logosByTier.value[tierId] = Array.from(titleMap.values())
    }
  }
  catch (error) {
    console.error('Error fetching sponsor logos:', error)
  }
})
</script>

<template>
  <section class="py-16 text-center bg-gray-100">
    <div class="container px-4 mx-auto">
      <h2 class="mb-6 font-serif text-7xl text-brand8">
        Our Sponsors
      </h2>
      <a class="inline-block px-10 py-2 my-8 mb-12 font-serif text-lg text-center text-white cursor-pointer bg-brand5 hover:opacity-90" href="/2025SponsorLevels.pdf" target="_blank">Sponsor Levels</a>
      <div
        v-for="tier in displayTiers"
        :key="tier.id"
        class="mb-16"
      >
        <h3 class="mb-4 text-2xl font-semibold text-brand7">
          {{ tier.label }}
        </h3>

        <Swiper
          :modules="[Autoplay, Navigation]"
          :slides-per-view="3"
          :breakpoints="swiperBreakpoints"
          :space-between="20"
          :loop="logosByTier[tier.id].length > 3"
          :centered-slides="logosByTier[tier.id].length <= 2"
          :autoplay="{ delay: 2500, disableOnInteraction: false }"
          navigation
          class="sponsor-carousel"
        >
          <SwiperSlide
            v-for="logo in logosByTier[tier.id]"
            :key="logo.title"
          >
            <div class="p-6 bg-white rounded shadow">
              <a :href="logo.url || '#'" :target="logo.url ? '_blank' : '_self'">
                <img
                  :src="logo.image"
                  :alt="logo.title"
                  class="object-contain mx-auto max-h-24"
                />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<style>
.sponsor-carousel .swiper-slide {
  display: flex;
  justify-content: center;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  @apply text-brand5;
}
</style>
