import { api } from "./api";

export interface HistoricalEntity {
  id: string;
  name: string;
  category: string;
  type?: string;
  years?: string;
  coords: [number, number] | null;
  image?: string;
  shortBio?: string;
  fullBio?: string;
  artisticDetails?: string;
  importance?: string;
  sector?: string;
  sources: string[];
}

export const HistoricalService = {
  async findAll(): Promise<HistoricalEntity[]> {
    const response = await api.get('/historical');

    return response.data.map((item: any) => ({
      ...item,
      coords:
        item.latitude != null && item.longitude != null
          ? [item.latitude, item.longitude]
          : null,
    }));
  },

  async findById(id: string): Promise<HistoricalEntity> {
    const response = await api.get(`/historical/${id}`);
    const item = response.data;

    return {
      ...item,
      coords:
        item.latitude != null && item.longitude != null
          ? [item.latitude, item.longitude]
          : null,
    };
  },
};