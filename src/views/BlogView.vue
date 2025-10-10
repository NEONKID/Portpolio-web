<template>
  <div class="external-content-wrapper">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error" class="error">
      <p>Failed to load content:</p>
      <pre>{{ error.message }}</pre>
    </div>
    <div v-else v-html="htmlContent"></div>
  </div>
</template>

<script setup>
import { useExternalHtml } from '@/composables/useExternalHtml.js';

const blogUrl = `${process.env.BASE_URL || ''}content/blog.html`;
const { htmlContent, loading, error } = useExternalHtml(blogUrl);
</script>

<style scoped>
.external-content-wrapper {
  padding: 100px 50px;
}
.error {
  color: red;
}
</style>