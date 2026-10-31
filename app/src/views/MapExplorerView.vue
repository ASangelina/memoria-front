<script setup lang="ts">
import { ref } from 'vue';
import InteractiveMap from '@/components/map/InteractiveMap.vue';
import { HISTORICAL_ENTITIES } from '@/services/memoria.service';
import type { HistoricalEntity } from '@/types/heritage';

const emit = defineEmits<{
  (e: 'selectEntity', entity: HistoricalEntity): void;
  (e: 'askAi', entity: HistoricalEntity): void;
}>();

const filterCategory = ref<'all' | 'personality' | 'sculpture'>('all');
const searchQuery = ref('');

const filteredEntities = computed(() => {
  return HISTORICAL_ENTITIES.filter(item => {
    const matchesCat = filterCategory.value === 'all' || item.category === filterCategory.value;
    const matchesQuery = item.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         item.type.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchesCat && matchesQuery;
  });
});
</script>

<template>
  <div class="h-[calc(100vh-80px)] flex flex-col bg-[#F9F6F0]">
    <div class="flex-1 flex overflow-hidden">
      <!-- Sidebar -->
      <aside class="w-80 border-r border-[#E5DDCF] bg-white flex flex-col hidden md:flex">
        <div class="p-4 border-b border-[#E5DDCF] space-y-3">
          <label class="text-xs font-semibold text-[#7A5E2B] uppercase tracking-wider">Filter Heritage</label>
          <div class="flex gap-2">
            <button 
              @click="filterCategory = 'all'"
              :class="['px-3 py-1.5 rounded-md text-xs font-medium transition', filterCategory === 'all' ? 'bg-[#1B3B2B] text-white' : 'bg-[#F9F6F0] text-[#1A1D1E] border border-[#E5DDCF]']"
            >
              All
            </button>
            <button 
              @click="filterCategory = 'personality'"
              :class="['px-3 py-1.5 rounded-md text-xs font-medium transition', filterCategory === 'personality' ? 'bg-[#1B3B2B] text-white' : 'bg-[#F9F6F0] text-[#1A1D1E] border border-[#E5DDCF]']"
            >
              People
            </button>
            <button 
              @click="filterCategory = 'sculpture'"
              :class="['px-3 py-1.5 rounded-md text-xs font-medium transition', filterCategory === 'sculpture' ? 'bg-[#1B3B2B] text-white' : 'bg-[#F9F6F0] text-[#1A1D1E] border border-[#E5DDCF]']"
            >
              Art
            </button>
          </div>
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Search map markers..."
            class="w-full px-3 py-2 bg-[#F9F6F0] border border-[#E5DDCF] rounded-lg text-xs outline-none focus:ring-1 focus:ring-[#1B3B2B]"
          />
        </div>

        <div class="flex-1 overflow-y-auto p-4 space-y-3">
          <div 
            v-for="item in filteredEntities" 
            :key="item.id"
            @click="emit('selectEntity', item)"
            class="p-3 rounded-xl border border-[#E5DDCF] hover:border-[#1B3B2B] cursor-pointer transition bg-[#F9F6F0] space-y-1"
          >
            <span class="text-[10px] font-bold uppercase tracking-wider text-[#C5A059]">{{ item.type }}</span>
            <h4 class="font-serif font-bold text-sm text-[#1B3B2B]">{{ item.name }}</h4>
            <p class="text-xs text-[#6B6B6B] truncate">{{ item.shortBio }}</p>
          </div>
        </div>
      </aside>

      <!-- Map -->
      <main class="flex-1 relative">
        <InteractiveMap 
          :center="[-23.5489, -46.6542]" 
          :zoom="17" 
          :entities="filteredEntities"
          @selectEntity="emit('selectEntity', $event)"
          @askAi="emit('askAi', $event)"
        />
      </main>
    </div>
  </div>
</template>