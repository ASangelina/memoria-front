<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { HistoricalEntity } from '@/types/heritage';

const props = defineProps<{
  center: [number, number];
  zoom: number;
  entities: HistoricalEntity[];
}>();

const emit = defineEmits<{
  (e: 'selectEntity', entity: HistoricalEntity): void;
  (e: 'askAi', entity: HistoricalEntity): void;
}>();

const mapContainer = ref<HTMLDivElement | null>(null);
let mapInstance: L.Map | null = null;
let markersLayer: L.LayerGroup | null = null;

onMounted(() => {
  if (!mapContainer.value) return;

  mapInstance = L.map(mapContainer.value).setView(props.center, props.zoom);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors | MEMORIA',
  }).addTo(mapInstance);

  markersLayer = L.layerGroup().addTo(mapInstance);
  renderMarkers();
});

function renderMarkers() {
  if (!mapInstance || !markersLayer) return;
  markersLayer.clearLayers();

  props.entities.forEach((item) => {
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="background-color: #1B3B2B; border: 2px solid #C5A059; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #F9F6F0; font-size: 13px; box-shadow: 0 4px 6px rgba(0,0,0,0.2);">
          ${item.category === 'personality' ? '👤' : '🏛️'}
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
    });

    const marker = L.marker(item.coords, { icon: customIcon });

    const popupContent = document.createElement('div');
    popupContent.className = 'p-2 max-w-xs';
    popupContent.innerHTML = `
      <span class="text-[10px] font-bold text-[#C5A059] uppercase tracking-wider">${item.type}</span>
      <h3 class="font-serif font-bold text-base text-[#1B3B2B] mt-0.5">${item.name}</h3>
      <p class="text-xs text-[#2C3032] my-1 leading-relaxed">${item.shortBio}</p>
      <div class="flex gap-2 mt-2">
        <button id="btn-details-${item.id}" class="flex-1 text-xs bg-[#F2EDE4] text-[#1A1D1E] border border-[#C5A059]/40 px-2.5 py-1.5 rounded font-medium hover:bg-[#E5DDCF] transition">
          View Details
        </button>
        <button id="btn-ai-${item.id}" class="flex-1 text-xs bg-[#1B3B2B] text-white px-2.5 py-1.5 rounded font-medium hover:bg-[#10261B] transition">
          Ask AI
        </button>
      </div>
    `;

    marker.bindPopup(popupContent);

    marker.on('popupopen', () => {
      const btnDetails = document.getElementById(`btn-details-${item.id}`);
      const btnAi = document.getElementById(`btn-ai-${item.id}`);

      if (btnDetails) btnDetails.onclick = () => emit('selectEntity', item);
      if (btnAi) btnAi.onclick = () => emit('askAi', item);
    });

    markersLayer!.addLayer(marker);
  });
}

watch(() => props.entities, renderMarkers, { deep: true });
</script>

<template>
  <div ref="mapContainer" class="w-full h-full min-h-[500px] rounded-2xl overflow-hidden shadow-sm border border-[#C5A059]/30"></div>
</template>