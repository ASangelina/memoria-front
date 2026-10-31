import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Monument } from '@/types/monument';
import { MonumentsService } from '@/services/monuments.service';

export const useMonumentStore = defineStore('monument', () => {
  const monuments = ref<Monument[]>([]);
  const currentMonument = ref<Monument | null>(null);
  const isLoading = ref(false);

  async function fetchMonuments(siteId?: string) {
    isLoading.value = true;
    try {
      monuments.value = await MonumentsService.getAll(siteId);
    } catch (error) {
      console.error('Error fetching monuments:', error);
    } finally {
      isLoading.value = false;
    }
  }

  async function fetchById(id: string) {
    isLoading.value = true;
    try {
      currentMonument.value = await MonumentsService.getById(id);
    } catch (error) {
      console.error('Error fetching monument detail:', error);
    } finally {
      isLoading.value = false;
    }
  }

  return {
    monuments,
    currentMonument,
    isLoading,
    fetchMonuments,
    fetchById
  };
});