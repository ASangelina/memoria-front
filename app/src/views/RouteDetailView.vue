<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useAssistantStore } from '@/stores/useAssistantStore';

const route = useRoute();
const assistantStore = useAssistantStore();
const routeId = route.params.id as string;

const data = {
  id: routeId,
  title: 'Modernist Masters Circuit',
  estimatedTimeMinutes: 45,
  distanceMeters: 850,
  description: 'Walk through the footsteps of Brazilian modernism pioneers.',
  stops: [
    { order: 1, title: 'Mário de Andrade Tomb', type: 'Personality', location: 'Rua 1, Quadra 12' },
    { order: 2, title: 'O Sepultamento Sculpture', type: 'Monument', location: 'Rua 4, Quadra 18' },
    { order: 3, title: 'Tarsila do Amaral Tomb', type: 'Personality', location: 'Rua 3, Quadra 22' }
  ]
};

function askAi() {
  assistantStore.toggleDrawer(true);
  assistantStore.sendPrompt(`Guide me through the ${data.title} itinerary step by step.`);
}
</script>

<template>
  <div class="min-h-screen bg-[#F9F6F0] text-[#1A1D1E] p-6 max-w-4xl mx-auto">
    <router-link to="/routes" class="text-xs font-semibold text-[#1B3B2B] uppercase tracking-wider mb-6 block">← Back to Routes</router-link>

    <div class="bg-white border border-[#E5DDCF] rounded-2xl p-8 shadow-sm space-y-8">
      <header class="border-b border-[#E5DDCF] pb-6 flex justify-between items-start flex-wrap gap-4">
        <div>
          <span class="text-xs font-semibold text-[#C5A059] uppercase">⏱️ {{ data.estimatedTimeMinutes }} mins • {{ data.distanceMeters }} meters</span>
          <h1 class="text-3xl font-serif font-bold text-[#1B3B2B] mt-1">{{ data.title }}</h1>
          <p class="text-sm text-[#7A5E2B] mt-1">{{ data.description }}</p>
        </div>
        <button 
          @click="askAi"
          class="bg-[#1B3B2B] text-white px-5 py-2.5 rounded-xl text-xs font-medium hover:bg-[#10261B] transition-colors"
        >
          Ask AI for Tour Highlights
        </button>
      </header>

      <section class="space-y-4">
        <h3 class="font-serif font-bold text-lg text-[#1B3B2B]">Itinerary Stops</h3>
        <div class="relative border-l-2 border-[#1B3B2B] ml-4 pl-6 space-y-6">
          <div v-for="stop in data.stops" :key="stop.order" class="relative">
            <div class="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#1B3B2B] border-2 border-white"></div>
            <span class="text-[10px] font-bold text-[#C5A059] uppercase tracking-wider">Stop #{{ stop.order }} — {{ stop.type }}</span>
            <h4 class="font-serif font-bold text-base text-[#1B3B2B]">{{ stop.title }}</h4>
            <p class="text-xs text-[#7A5E2B]">📍 {{ stop.location }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>