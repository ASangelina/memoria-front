<script setup lang="ts">
import { ref } from 'vue';
import { HISTORICAL_ENTITIES } from '@/services/memoria.service';

const emit = defineEmits<{
  (e: 'navigate', tab: string): void;
  (e: 'askAi', prompt: string): void;
  (e: 'selectEntity', entity: any): void;
}>();

const heroInput = ref('');
</script>

<template>
  <div class="space-y-12 pb-12">
    <!-- HERO BANNER -->
    <section class="relative rounded-2xl overflow-hidden border border-[#C5A059]/30 bg-[#10261B] text-[#F9F6F0] p-8 md:p-14 shadow-2xl">
      <div class="absolute inset-0 opacity-15 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div class="relative z-10 max-w-3xl space-y-6">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] text-xs font-bold uppercase tracking-widest">
          São Paulo • Founded 1858
        </div>

        <h2 class="font-serif text-4xl md:text-6xl font-bold tracking-tight text-[#FDFBF7] leading-tight">
          Every place has a story.<br/>
          <span class="italic font-normal text-[#C5A059]">Every story deserves to live.</span>
        </h2>

        <p class="text-[#E5DDCF] text-base md:text-lg font-light leading-relaxed">
          "We are not building a map of the dead. We are building a way for the living to remember." Discover 160+ years of Brazilian literature, sculpture, and living history at Consolação Cemetery.
        </p>

        <!-- HERO AI INPUT BAR -->
        <div class="pt-4 space-y-3">
          <div class="bg-[#F9F6F0] text-[#1A1D1E] rounded-xl p-2 shadow-2xl border-2 border-[#C5A059] flex items-center gap-2">
            <input
              v-model="heroInput"
              type="text"
              placeholder="Ask MEMORIA AI (e.g. Where is Mário de Andrade buried?)"
              class="flex-1 bg-transparent px-3 py-2 text-sm md:text-base outline-none placeholder:text-[#2C3032]/50"
              @keydown.enter="emit('askAi', heroInput)"
            />
            <button
              @click="emit('askAi', heroInput)"
              class="bg-[#1B3B2B] hover:bg-[#2D4A3E] text-[#F9F6F0] px-5 py-2.5 rounded-lg text-sm font-semibold transition flex items-center gap-2 shrink-0"
            >
              <span>Ask AI</span>
            </button>
          </div>

          <!-- Prompts -->
          <div class="flex flex-wrap gap-2 text-xs">
            <span class="text-[#E5DDCF] font-medium">Try asking:</span>
            <button 
              v-for="(prompt, i) in ['Who was Victor Brecheret?', 'Suggest a 45 min tour', 'Where is Tarsila do Amaral buried?']"
              :key="i"
              @click="emit('askAi', prompt)"
              class="text-[#E5DDCF] hover:text-[#C5A059] bg-[#1B3B2B]/80 hover:bg-[#1B3B2B] px-3 py-1 rounded-md border border-[#C5A059]/20 transition text-left"
            >
              "{{ prompt }}"
            </button>
          </div>
        </div>

        <div class="pt-2 flex items-center gap-4 text-xs text-[#E5DDCF] font-medium">
          <button @click="emit('navigate', 'map')" class="underline hover:text-[#C5A059]">Explore Interactive Cemetery Map →</button>
        </div>
      </div>
    </section>

    <!-- FEATURED HIGHLIGHTS -->
    <section class="space-y-6">
      <div class="flex justify-between items-end">
        <div>
          <span class="text-xs font-bold text-[#7A5E2B] uppercase tracking-wider">Curated Discovery</span>
          <h3 class="font-serif text-3xl font-bold text-[#1B3B2B]">Featured Personalities & Art</h3>
        </div>
        <button @click="emit('navigate', 'personalities')" class="text-xs font-bold text-[#1B3B2B] hover:text-[#7A5E2B] uppercase tracking-wider">
          View All Collection →
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          v-for="item in HISTORICAL_ENTITIES.slice(0, 3)" 
          :key="item.id"
          @click="emit('selectEntity', item)"
          class="bg-white rounded-2xl overflow-hidden border border-[#E5DDCF] shadow-sm hover:shadow-md transition cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div class="h-48 overflow-hidden relative">
              <img :src="item.image" :alt="item.name" class="w-full h-full object-cover hover:scale-105 transition duration-500" />
              <span class="absolute top-3 left-3 bg-[#1B3B2B] text-[#C5A059] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow">
                {{ item.category }}
              </span>
            </div>
            <div class="p-5 space-y-2">
              <span class="text-xs text-[#7A5E2B] font-semibold">{{ item.years }}</span>
              <h4 class="font-serif font-bold text-xl text-[#1B3B2B]">{{ item.name }}</h4>
              <p class="text-xs text-[#4A4A4A] line-clamp-2 leading-relaxed">{{ item.shortBio }}</p>
            </div>
          </div>
          <div class="p-5 pt-0 flex justify-between items-center text-xs font-bold text-[#7A5E2B]">
            <span>📍 {{ item.sector }}</span>
            <span class="text-[#1B3B2B] underline">Explore Profile</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>