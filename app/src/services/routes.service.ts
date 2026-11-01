import { api } from "./api";

export interface GuidedRoute {
  id: string;
  title: string;
  duration?: string;
  distance?: string;
  category?: string;
  description?: string;
  stops: {
    id: number;
    position: number;
    title: string;
    type?: string;
    sector?: string;
    entityId?: string;
    entity?: {
      id: string;
      name: string;
    };
  }[];
}

export const RoutesService = {
  async findAll(): Promise<GuidedRoute[]> {
    const response = await api.get('/routes');
    return response.data;
  },

  async findById(id: string): Promise<GuidedRoute> {
    const response = await api.get(`/routes/${id}`);
    return response.data;
  },
};