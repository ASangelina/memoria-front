import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Personality } from '@/types/personality';
import { PersonalitiesService } from '@/services/personalities.service';

export const usePersonalityStore = defineStore('personality', () => {
  const personalities = ref<Personality[]>([]);
  const currentPersonality = ref<Personality | null>(null);
  const isLoading = ref(false);

  async function fetchPersonalities(siteId?: string) {
    isLoading.value = true;
    try {
      personalities.value = await PersonalitiesService.getAll(siteId);
    } catch (error) {
      console.error('Error fetching personalities:', error);
    } finally {
      isLoading.value = false;
    }
  }

  async function fetchById(id: string) {
    isLoading.value = true;
    try {
      currentPersonality.value = await PersonalitiesService.getById(id);
    } catch (error) {
      console.error('Error fetching personality detail:', error);
    } finally {
      isLoading.value = false;
    }
  }

  return {
    personalities,
    currentPersonality,
    isLoading,
    fetchPersonalities,
    fetchById
  };
});