<script setup lang="ts">
import { ref, computed } from 'vue';
import { HISTORICAL_ENTITIES } from '@/services/memoria.service';
import type { HistoricalEntity } from '@/types/heritage';

const emit = defineEmits<{
  (e: 'selectEntity', entity: HistoricalEntity): void;
  (e: 'askAi', entity: HistoricalEntity): void;
}>();

const query = ref('');

const personalities = computed(() => 
  HISTORICAL_ENTITIES.filter(e => e.category === 'personality' && (e.name.toLowerCase().includes(query.value.toLowerCase()) || e.type.toLowerCase().includes(query.value.toLowerCase())))
);
</script>

<template>
  <div class="max-w-6xl mx-auto space-y-8 pb-12">
    <header class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#E5DDCF] pb-6">
      <div>
        <span class="text-xs font-semibold text-[#7A5E2B] uppercase tracking-wider">Consolação Cemetery Records</span>
        <h1 class="text-4xl font-serif font-bold text-[#1B3B2B]">Historical Personalities</h1>
        <p class="text-sm text-[#6B6B6B]">Discover writers, artists, leaders, and pioneers.</p>
      </div>
      <input 
        v-model="query" 
        type="text" 
        placeholder="Search personality..."
        class="px-4 py-2.5 bg-white border border-[#E5DDCF] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3B2B] w-full md:w-64 shadow-sm"
      />
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="p in personalities" 
        :key="p.id"
        class="bg-white border border-[#E5DDCF] rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition"
      >
        <div>
          <div class="h-48 overflow-hidden">
            <img :src="p.image" :alt="p.name" class="w-full h-full object-cover" />
          </div>
          <div class="p-6 space-y-2">
            <span class="text-xs text-[#7A5E2B] font-semibold uppercase">{{ p.years }}</span>
            <h3 class="text-xl font-serif font-bold text-[#1B3B2B]">{{ p.name }}</h3>
            <p class="text-xs font-medium text-[#C5A059] uppercase tracking-wider">{{ p.type }}</p>
            <p class="text-sm text-[#4A4A4A] leading-relaxed pt-2">{{ p.shortBio }}</p>
          </div>
        </div>

        <div class="p-6 pt-0 flex gap-2">
          <button 
            @click="emit('selectEntity', p)"
            class="flex-1 bg-[#1B3B2B] text-white py-2 rounded-lg text-xs font-medium hover:bg-[#10261B] transition"
          >
            View Details
          </button>
          <button 
            @click="emit('askAi', p)"
            class="px-3.5 py-2 border border-[#E5DDCF] rounded-lg text-xs font-medium hover:bg-[#F9F6F0] transition"
          >
            🤖 Ask AI
          </button>
        </div>
      </div>
    </div>
  </div>
</template>