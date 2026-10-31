<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useAssistantStore } from '@/stores/useAssistantStore';

const route = useRoute();
const assistantStore = useAssistantStore();
const monumentId = route.params.id as string;

const data = {
  id: monumentId,
  title: 'O Sepultamento',
  artist: 'Victor Brecheret',
  creationYear: 1923,
  artMovement: 'Modernism',
  description: 'A masterpiece in dark bronze depicting the burial of Jesus with dramatic modernist lines.',
  artisticSignificance: 'Awarded in Paris and consolidated Brecheret as a pivotal sculptor in South America.',
  locationSector: 'Rua 4, Quadra 18',
  sources: ['Sacred & Modern Art Registry of São Paulo, p. 88', 'Catálogo Victor Brecheret']
};

function askAi() {
  assistantStore.setContext({ monumentId: data.id });
  assistantStore.toggleDrawer(true);
  assistantStore.sendPrompt(`Explain the artistic style of ${data.title} by ${data.artist}.`);
}
</script>

<template>
  <div class="min-h-screen bg-[#F9F6F0] text-[#1A1D1E] p-6 max-w-4xl mx-auto">
    <router-link to="/monuments" class="text-xs font-semibold text-[#1B3B2B] uppercase tracking-wider mb-6 block">← Back to Monuments</router-link>

    <article class="bg-white border border-[#E5DDCF] rounded-2xl p-8 shadow-sm space-y-6">
      <header class="border-b border-[#E5DDCF] pb-6 flex justify-between items-start flex-wrap gap-4">
        <div>
          <span class="text-xs font-semibold text-[#7A5E2B] uppercase">{{ data.creationYear }} • {{ data.artMovement }}</span>
          <h1 class="text-4xl font-serif font-bold text-[#1B3B2B] mt-1">{{ data.title }}</h1>
          <p class="text-sm font-medium text-[#C5A059] uppercase tracking-wider mt-1">Sculptor: {{ data.artist }}</p>
        </div>
        <button 
          @click="askAi"
          class="bg-[#1B3B2B] text-white px-5 py-2.5 rounded-xl text-xs font-medium hover:bg-[#10261B] transition-colors"
        >
          Ask MEMORIA AI about artwork
        </button>
      </header>

      <section class="space-y-3">
        <h3 class="font-serif font-bold text-lg text-[#1B3B2B]">Description</h3>
        <p class="text-sm text-[#4A4A4A] leading-relaxed">{{ data.description }}</p>
      </section>

      <section class="space-y-3">
        <h3 class="font-serif font-bold text-lg text-[#1B3B2B]">Artistic Significance</h3>
        <p class="text-sm text-[#4A4A4A] leading-relaxed">{{ data.artisticSignificance }}</p>
      </section>

      <footer class="pt-6 border-t border-[#E5DDCF] space-y-3 text-xs text-[#7A5E2B]">
        <p>📍 Location Sector: <strong>{{ data.locationSector }}</strong></p>
        <div>
          <p class="font-semibold uppercase tracking-wider mb-1">Archival Sources:</p>
          <ul class="list-disc list-inside space-y-1">
            <li v-for="(src, i) in data.sources" :key="i">{{ src }}</li>
          </ul>
        </div>
      </footer>
    </article>
  </div>
</template>