<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAssistantStore } from '@/stores/useAssistantStore';

const router = useRouter();
const assistantStore = useAssistantStore();

const monuments = ref([
  {
    id: 'o-sepultamento',
    title: 'O Sepultamento',
    artist: 'Victor Brecheret',
    creationYear: 1923,
    artMovement: 'Modernism',
    description: 'Iconic modernist bronze sculpture symbolizing grief and solemnity.'
  }
]);

function askAi(title: string) {
  assistantStore.toggleDrawer(true);
  assistantStore.sendPrompt(`Tell me about the artistic value of the sculpture "${title}".`);
}
</script>

<template>
  <div class="min-h-screen bg-[#F9F6F0] text-[#1A1D1E] p-6 max-w-6xl mx-auto">
    <header class="mb-10 border-b border-[#E5DDCF] pb-6">
      <router-link to="/" class="text-xs font-semibold text-[#1B3B2B] uppercase tracking-wider mb-1 block">← Back to Home</router-link>
      <h1 class="text-4xl font-serif font-bold text-[#1B3B2B]">Monuments & Sculptures</h1>
      <p class="text-sm text-[#7A5E2B]">Explore open-air museum artworks crafted by master sculptors.</p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div 
        v-for="m in monuments" 
        :key="m.id"
        class="bg-white border border-[#E5DDCF] rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all"
      >
        <div>
          <span class="text-xs text-[#7A5E2B] font-semibold uppercase">{{ m.creationYear }} — {{ m.artMovement }}</span>
          <h3 class="text-2xl font-serif font-bold text-[#1B3B2B] mt-1">{{ m.title }}</h3>
          <p class="text-xs font-medium text-[#C5A059] uppercase tracking-wider mb-3">Artist: {{ m.artist }}</p>
          <p class="text-sm text-[#4A4A4A] leading-relaxed mb-4">{{ m.description }}</p>
        </div>

        <div class="pt-4 border-t border-[#E5DDCF] flex gap-2">
          <button 
            @click="router.push(`/monuments/${m.id}`)"
            class="flex-1 bg-[#1B3B2B] text-white py-2 rounded-lg text-xs font-medium hover:bg-[#10261B] transition-colors"
          >
            Artwork Details
          </button>
          <button 
            @click="askAi(m.title)"
            class="px-3 py-2 border border-[#E5DDCF] rounded-lg text-xs font-medium hover:bg-[#F9F6F0] transition-colors"
          >
            🤖 Ask AI
          </button>
        </div>
      </div>
    </div>
  </div>
</template>