import { ref, reactive } from "vue";
import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/proverbs/`,
});

API.interceptors.request.use((config) => {
  config.headers["x-api-key"] = import.meta.env.VITE_API_KEY;
  return config;
});

const useProverbsApi = () => {
  const loading = ref(false);
  const error = ref(null);
  const result = reactive({
    keywords: "",
    proverbs: [],
    proverb: "",
    page: 0,
    complete: false,
  });
  const random = async () => {
    try {
      loading.value = true;
      const {
        data: { text },
      } = await API.get("random");
      loading.value = false;
      result.proverb = text;
    } catch (e) {
      loading.value = false;
      error.value = e;
    }
  };
  const search = async (words, page = 0, reset = true) => {
    try {
      loading.value = true;
      const { data } = await API.get("contains", {
        params: { page, words },
      });
      const results = data.map(({ text }) => text);
      if (!results.length || results.length < 10) {
        result.complete = true;
      } else {
        result.complete = false;
      }
      if (reset) {
        result.proverbs = [...results];
      } else {
        result.proverbs = [...result.proverbs, ...results];
      }
      result.keywords = words;
      result.page = page;
      loading.value = false;
    } catch (e) {
      loading.value = false;
      error.value = e;
    }
  };
  return { search, random, error, loading, result };
};

export default useProverbsApi;
