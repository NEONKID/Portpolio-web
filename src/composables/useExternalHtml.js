import { ref, onMounted } from 'vue';

export function useExternalHtml(url) {
  const htmlContent = ref('');
  const loading = ref(true);
  const error = ref(null);

  const fetchHtml = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch HTML from ${url}. Status: ${response.status}`);
      }
      htmlContent.value = await response.text();
    } catch (e) {
      error.value = e;
      console.error(e);
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchHtml);

  return {
    htmlContent,
    loading,
    error,
    fetchHtml
  };
}