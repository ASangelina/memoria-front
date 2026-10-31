<script setup lang="ts">
import { ref } from 'vue';
import AppHeader from '@/components/common/AppHeader.vue';
import AiChatDrawer from '@/components/ai/AiChatDrawer.vue';
import HomeView from '@/views/HomeView.vue';
import MapExplorerView from '@/views/MapExplorerView.vue';
import PersonalitiesView from '@/views/PersonalitiesView.vue';
import SculpturesView from '@/views/SculpturesView.vue';
import RoutesView from '@/views/RoutesView.vue';
import EntityDetailView from '@/views/EntityDetailView.vue';
import type { HistoricalEntity } from '@/types/heritage';

const activeTab = ref('home');
const selectedEntity = ref<HistoricalEntity | null>(null);
const isAiOpen = ref(false);
const aiContextEntity = ref<HistoricalEntity | null>(null);

function handleSelectEntity(entity: HistoricalEntity) {
  selectedEntity.value = entity;
  activeTab.value = 'detail';
}

function handleAskAi(promptOrEntity: string | HistoricalEntity) {
  isAiOpen.value = true;
  if (typeof promptOrEntity === 'object') {
    aiContextEntity.value = promptOrEntity;
  }
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[#F9F6F0] text-[#1A1D1E] relative font-sans">
    
    <!-- HEADER -->
    <AppHeader 
      v-model:active-tab="activeTab" 
      @toggleAi="isAiOpen = !isAiOpen" 
    />

    <!-- NOTICE BANNER -->
    <div class="bg-[#10261B] text-[#F9F6F0] text-xs px-4 py-2 border-b border-[#C5A059]/30">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <p>
            <strong class="text-[#C5A059] font-semibold">Grounded RAG Pipeline Ready:</strong> Consolação Cemetery Archives Connected • Gemma 4 Model Active.
          </p>
        </div>
      </div>
    </div>

    <!-- MAIN CONTENT -->
    <main class="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 lg:p-8">
      <HomeView 
        v-if="activeTab === 'home'" 
        @navigate="activeTab = $event" 
        @askAi="handleAskAi"
        @selectEntity="handleSelectEntity"
      />
      <MapExplorerView 
        v-else-if="activeTab === 'map'" 
        @selectEntity="handleSelectEntity"
        @askAi="handleAskAi"
      />
      <PersonalitiesView 
        v-else-if="activeTab === 'personalities'" 
        @selectEntity="handleSelectEntity"
        @askAi="handleAskAi"
      />
      <SculpturesView 
        v-else-if="activeTab === 'sculptures'" 
        @selectEntity="handleSelectEntity"
        @askAi="handleAskAi"
      />
      <RoutesView 
        v-else-if="activeTab === 'routes'" 
      />
      <EntityDetailView 
        v-else-if="activeTab === 'detail' && selectedEntity" 
        :entity="selectedEntity"
        @back="activeTab = 'home'"
        @askAi="handleAskAi"
      />
    </main>

    <!-- AI DRAWER -->
    <AiChatDrawer 
      :is-open="isAiOpen" 
      :context-entity="aiContextEntity"
      @close="isAiOpen = false" 
    />
  </div>
</template>