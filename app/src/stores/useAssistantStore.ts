import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { ChatMessage, AiChatContext } from '@/types/assistant';
import { AssistantService } from '@/services/assistant.service';

export const useAssistantStore = defineStore('assistant', () => {
  const isOpen = ref(false);
  const isLoading = ref(false);
  const conversationId = ref<string | null>(null);
  const messages = ref<ChatMessage[]>([]);
  const currentContext = ref<AiChatContext>({
    personalityId: null,
    monumentId: null,
  });

  function toggleDrawer(open?: boolean) {
    isOpen.value = open !== undefined ? open : !isOpen.value;
  }

  function setContext(context: AiChatContext) {
    currentContext.value = context;
  }

  async function sendPrompt(userPrompt: string, siteId = 'cemiterio-da-consolacao') {
    if (!userPrompt.trim()) return;

    messages.value.push({
      id: crypto.randomUUID(),
      sender: 'user',
      text: userPrompt,
      timestamp: new Date(),
    });

    isLoading.value = true;

    try {
      const response = await AssistantService.sendMessage({
        message: userPrompt,
        siteId,
        context: currentContext.value,
        conversationId: conversationId.value,
      });

      conversationId.value = response.conversationId;

      messages.value.push({
        id: crypto.randomUUID(),
        sender: 'assistant',
        text: response.answer,
        sources: response.sources,
        relatedItems: response.relatedItems,
        grounded: response.metadata.grounded,
        timestamp: new Date(),
      });
    } catch {
      messages.value.push({
        id: crypto.randomUUID(),
        sender: 'assistant',
        text: 'Sorry, an error occurred while searching historical records. Please try again.',
        sources: [],
        grounded: false,
        timestamp: new Date(),
      });
    } finally {
      isLoading.value = false;
    }
  }

  return {
    isOpen,
    isLoading,
    messages,
    currentContext,
    toggleDrawer,
    setContext,
    sendPrompt,
  };
});