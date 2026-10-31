<script setup lang="ts">
import { ref, watch, nextTick } from 'vue';
import type { ChatMessage, HistoricalEntity } from '@/types/heritage';
import { MemoriaAIService } from '@/services/memoria.service';

const props = defineProps<{
  isOpen: boolean;
  contextEntity: HistoricalEntity | null;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'selectEntityId', id: string): void;
}>();

const chatMessages = ref<ChatMessage[]>([
  {
    sender: 'ai',
    text: 'Welcome to **MEMORIA AI**. I am your grounded historical guide powered by verified archival documents. How may I assist your exploration of Consolação Cemetery today?',
    citations: []
  }
]);
const aiInput = ref('');
const isAiThinking = ref(false);
const chatContainer = ref<HTMLDivElement | null>(null);

const scrollToBottom = () => {
  nextTick(() => {
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    }
  });
};

watch(() => chatMessages.value.length, scrollToBottom);

async function handleSend(prompt?: string) {
  const text = prompt || aiInput.value;
  if (!text.trim()) return;

  aiInput.value = '';
  chatMessages.value.push({ sender: 'user', text });
  isAiThinking.value = true;

  try {
    const response = await MemoriaAIService.query(text, props.contextEntity);
    chatMessages.value.push(response);
  } catch {
    chatMessages.value.push({
      sender: 'ai',
      text: 'An error occurred while accessing historical archives. Please try again.'
    });
  } finally {
    isAiThinking.value = false;
  }
}
</script>

<template>
  <aside 
    class="fixed inset-y-0 right-0 z-50 w-full sm:w-[480px] bg-[#F9F6F0] border-l border-[#C5A059]/30 shadow-2xl flex flex-col transition-transform duration-300"
    :class="props.isOpen ? 'translate-x-0' : 'translate-x-full'"
  >
    <!-- Header -->
    <header class="p-5 border-b border-[#C5A059]/20 bg-[#F9F6F0]/90 backdrop-blur flex justify-between items-center">
      <div class="flex items-center space-x-3">
        <div class="w-8 h-8 rounded-full bg-[#1B3B2B] flex items-center justify-center text-[#C5A059] font-serif text-sm font-bold">
          M
        </div>
        <div>
          <h2 class="font-serif font-semibold text-lg text-[#1A1D1E]">MEMORIA AI</h2>
          <p class="text-xs text-[#7A5E2B]">Grounded Historical Guide (Gemma 4)</p>
        </div>
      </div>
      <button 
        @click="emit('close')"
        class="text-[#7A5E2B] hover:text-[#1A1D1E] p-2 rounded-lg transition-colors text-lg"
      >
        ✕
      </button>
    </header>

    <!-- Chat Messages -->
    <div ref="chatContainer" class="flex-1 overflow-y-auto p-5 space-y-4">
      <div v-for="(msg, i) in chatMessages" :key="i" class="flex flex-col space-y-2">
        <div 
          class="max-w-[88%] rounded-2xl p-4 text-sm shadow-sm"
          :class="msg.sender === 'user' ? 'bg-[#1B3B2B] text-white rounded-br-none ml-auto' : 'bg-white border border-[#E5DDCF] text-[#1A1D1E] rounded-bl-none'"
        >
          <p class="leading-relaxed whitespace-pre-line">{{ msg.text }}</p>

          <!-- Citations / Sources -->
          <div v-if="msg.citations && msg.citations.length > 0" class="mt-4 pt-3 border-t border-[#E5DDCF] space-y-2">
            <p class="text-[10px] font-bold text-[#7A5E2B] uppercase tracking-wider">Verified Archival Sources:</p>
            <div v-for="(src, idx) in msg.citations" :key="idx" class="p-2.5 bg-[#F9F6F0] rounded-lg border border-[#E5DDCF] text-xs text-[#2C3032]">
              <div class="font-medium text-[#1B3B2B] flex items-center gap-1.5">
                <span>📖</span>
                <span>{{ src.doc }}</span>
                <span v-if="src.page" class="text-[#7A5E2B]">— Page {{ src.page }}</span>
              </div>
              <p class="text-[11px] text-[#4A4A4A] mt-1">Author: {{ src.author }}</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="isAiThinking" class="flex items-center space-x-2 text-[#7A5E2B] text-xs py-2">
        <span class="animate-pulse">Searching verified historical documents...</span>
      </div>
    </div>

    <!-- Input Footer -->
    <footer class="p-4 border-t border-[#C5A059]/20 bg-white">
      <form @submit.prevent="handleSend()" class="flex items-center space-x-2">
        <input 
          v-model="aiInput"
          type="text"
          placeholder="Ask about a monument, personality, or event..."
          class="flex-1 bg-[#F9F6F0] border border-[#E5DDCF] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3B2B] text-[#1A1D1E]"
          :disabled="isAiThinking"
        />
        <button 
          type="submit"
          :disabled="isAiThinking || !aiInput.trim()"
          class="bg-[#1B3B2B] text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#10261B] disabled:opacity-50 transition-colors"
        >
          Send
        </button>
      </form>
    </footer>
  </aside>
</template>