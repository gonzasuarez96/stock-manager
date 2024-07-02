import { axiosClient } from "@/services/axiosClient";
import { create } from "zustand";

const useStore = create((set) => ({
  articles: [],
  currentPage: 1,
  totalPages: 1,
  totalItems: 0,
  categories: [],
  fetchArticles: async (page = 1) => {
    try {
      const response = await axiosClient.get(`/article?page=${page}`);
      const { data } = response.data;
      const newCategories = data.data.map((article) => article.category.name);
      set((state) => ({
        articles: data.data || [],
        currentPage: data.current_page,
        totalPages: data.last_page,
        totalItems: data.total,
        categories: Array.from(
          new Set([...state.categories, ...newCategories]),
        ),
      }));
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  },
  providers: [],
  fetchProvider: async () => {
    try {
      const response = await axiosClient.get("/provider");
      const data = response.data.providers;
      set((state) => ({
        providers: data,
      }));
    } catch (error) {
      console.log("There was an error fetching data", error);
    }
  },
  selectedArticles: [],
  toggleArticleSelection: (articleId) => {
    set((state) => ({
      selectedArticles: state.selectedArticles.includes(articleId)
        ? state.selectedArticles.filter((id) => id !== articleId)
        : [...state.selectedArticles, articleId],
    }));
  },
  articleQuantities: {},
  updateArticleSelection: (articleId, quantity) => {
    set((state) => ({
      articleQuantities: {
        ...state.articleQuantities,
        [articleId]: quantity,
      },
    }));
  },
}));

export default useStore;
