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

// process.env.BASE_URL will ensure the correct base path in development and production
const resumeUrl = `${process.env.BASE_URL || ''}content/resume.html`;
const { htmlContent, loading, error } = useExternalHtml(resumeUrl);
</script>

<style scoped>
.external-content-wrapper {
  padding: 100px 50px; /* Add some padding */
}
.error {
  color: red;
}
</style>