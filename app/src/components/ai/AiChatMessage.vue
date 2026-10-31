<script setup lang="ts">
import type { ChatMessage } from '@/types/assistant';

defineProps<{
  message: ChatMessage;
}>();
</script>

<template>
  <div 
    class="flex flex-col space-y-2"
    :class="message.sender === 'user' ? 'items-end' : 'items-start'"
  >
    <div 
      class="max-w-[88%] rounded-2xl p-4 text-sm shadow-sm"
      :class="message.sender === 'user' 
        ? 'bg-[#1B3B2B] text-white rounded-br-none' 
        : 'bg-white border border-[#E5DDCF] text-[#1A1D1E] rounded-bl-none'"
    >
      <p class="leading-relaxed whitespace-pre-line">{{ message.text }}</p>

      <div v-if="message.sources && message.sources.length > 0" class="mt-4 pt-3 border-t border-[#E5DDCF] space-y-2">
        <p class="text-[10px] font-bold text-[#7A5E2B] uppercase tracking-wider">Verified Archival Sources:</p>
        <div 
          v-for="(source, idx) in message.sources" 
          :key="idx"
          class="p-2.5 bg-[#F9F6F0] rounded-lg border border-[#E5DDCF] text-xs text-[#2C3032]"
        >
          <div class="font-medium text-[#1B3B2B] flex items-center gap-1.5">
            <span>📖</span>
            <span>{{ source.document }}</span>
            <span v-if="source.page" class="text-[#7A5E2B]">— Page {{ source.page }}</span>
          </div>
          <p class="italic text-[11px] text-[#4A4A4A] mt-1.5 border-l-2 border-[#C5A059] pl-2">
            "{{ source.excerpt }}"
          </p>
        </div>
      </div>
    </div>
  </div>
</template>