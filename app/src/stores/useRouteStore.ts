import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { RouteItem } from '@/types/route';
import { RoutesService } from '@/services/routes.service';

export const useRouteStore = defineStore('route', () => {
  const routes = ref<RouteItem[]>([]);
  const currentRoute = ref<RouteItem | null>(null);
  const isLoading = ref(false);

  async function fetchRoutes(siteId?: string) {
    isLoading.value = true;
    try {
      routes.value = await RoutesService.getAll(siteId);
    } catch (error) {
      console.error('Error fetching routes:', error);
    } finally {
      isLoading.value = false;
    }
  }

  async function fetchById(id: string) {
    isLoading.value = true;
    try {
      currentRoute.value = await RoutesService.getById(id);
    } catch (error) {
      console.error('Error fetching route detail:', error);
    } finally {
      isLoading.value = false;
    }
  }

  return {
    routes,
    currentRoute,
    isLoading,
    fetchRoutes,
    fetchById
  };
});