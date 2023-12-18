"use server";

import { ArticleType, QueryResponseType, SourceType } from "@/types/api";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.BASE_URL,
  params: {
    apiKey: process.env.API_KEY,
    language: "en",
  },
});

async function getSources() {
  try {
    const params = { country: "us" };
    const { data } = await api.get("/sources", { params });
    return data.sources.map((source: SourceType) => source.id) as string[];
  } catch (error) {
    console.log(error);
    return [];
  }
}
export async function getTopUSArticles(date: Date): Promise<QueryResponseType> {
  try {
    const sources = await getSources();
    const params = { q: "", sortBy: "popularity", from: date, sources };
    const { data } = await api.get("/everything", { params });
    return { success: true, data: data.articles.slice(0, 99) as ArticleType[] };
  } catch (error) {
    console.log(error);
    return { success: false, data: [] };
  }
}
export async function getRequestedArticles(query: string, date: Date) {
  try {
    const params = { q: query, sortBy: "popularity", from: date };
    const { data } = await api.get("/everything", { params });
    return { success: true, data: data.articles as ArticleType[] };
  } catch (error) {
    console.log(error);
    return { success: false, data: [] };
  }
}
