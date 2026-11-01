import { api } from "./api";

export interface AIResponse {
  sender: string;
  text: string;
  citations: any[];
  relatedIds: string[];
  isUnverified: boolean;
}

export const AIService = {
  async query(
    question: string,
    entityId?: string,
    language = 'en',
  ): Promise<AIResponse> {
    const response = await api.post('/ai/query', {
      question,
      entityId,
      language,
    });

    return response.data;
  },
};