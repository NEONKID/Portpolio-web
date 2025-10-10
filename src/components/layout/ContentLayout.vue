<template>
  <div class="arlo_tm_rightpart">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'ContentLayout'
}
</script>

<style scoped>
.arlo_tm_rightpart {
  position: relative;
  float: left;
  width: 100%;
  padding-left: 450px;
  box-sizing: border-box;
}
</style>