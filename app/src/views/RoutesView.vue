<script setup lang="ts">
import { GUIDED_ROUTES } from '@/services/memoria.service';
</script>

<template>
  <div class="max-w-6xl mx-auto space-y-8 pb-12">
    <header class="border-b border-[#E5DDCF] pb-6">
      <span class="text-xs font-semibold text-[#7A5E2B] uppercase tracking-wider">Curated Exploration</span>
      <h1 class="text-4xl font-serif font-bold text-[#1B3B2B]">Guided Historical Itineraries</h1>
      <p class="text-sm text-[#6B6B6B]">Follow thematic walks through Consolação Cemetery.</p>
    </header>

    <div class="space-y-6">
      <div 
        v-for="r in GUIDED_ROUTES" 
        :key="r.id"
        class="bg-white border border-[#E5DDCF] rounded-2xl p-6 shadow-sm space-y-6"
      >
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div class="space-y-2">
            <div class="flex items-center gap-3 text-xs font-semibold text-[#C5A059] uppercase">
              <span>⏱️ {{ r.duration }}</span>
              <span>•</span>
              <span>📍 {{ r.distance }}</span>
              <span>•</span>
              <span>{{ r.category }}</span>
            </div>
            <h3 class="text-2xl font-serif font-bold text-[#1B3B2B]">{{ r.title }}</h3>
            <p class="text-sm text-[#4A4A4A] max-w-2xl leading-relaxed">{{ r.description }}</p>
          </div>
        </div>

        <div class="pt-4 border-t border-[#E5DDCF]">
          <h4 class="text-xs font-bold text-[#7A5E2B] uppercase tracking-wider mb-3">Itinerary Stops</h4>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div v-for="(stop, idx) in r.stops" :key="idx" class="p-3 rounded-xl bg-[#F9F6F0] border border-[#E5DDCF]">
              <span class="text-[10px] font-bold text-[#C5A059] uppercase">Stop {{ idx + 1 }} — {{ stop.type }}</span>
              <h5 class="font-serif font-bold text-sm text-[#1B3B2B] mt-0.5">{{ stop.title }}</h5>
              <p class="text-xs text-[#7A5E2B] mt-1">📍 Sector: {{ stop.sector }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>