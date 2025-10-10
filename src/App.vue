<template>
  <div class="arlo_tm_all_wrap">
    <MobileMenu />
    <LeftSidebar />
    <ContentLayout />
  </div>
</template>

<script>
import MobileMenu from './components/layout/MobileMenu.vue';
import LeftSidebar from './components/layout/LeftSidebar.vue';
import ContentLayout from './components/layout/ContentLayout.vue';

export default {
  name: 'App',
  components: {
    MobileMenu,
    LeftSidebar,
    ContentLayout
  }
}
</script>

<style>
/* App-specific styles can go here, but most are global now */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>