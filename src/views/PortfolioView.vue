<template>
  <div id="portfolio" class="arlo_tm_section is_active">
    <div class="arlo_tm_portfolio">
      <div class="container">
        <div class="arlo_tm_main_title">
          <span>Portfolio</span>
          <h3>Featured Works</h3>
        </div>
        <div class="portfolio_filter">
          <ul>
            <li><a href="#" @click.prevent="selectFilter('*')" :class="{ current: selectedFilter === '*' }">All</a></li>
            <li><a href="#" @click.prevent="selectFilter('desktop')" :class="{ current: selectedFilter === 'desktop' }">Desktop App</a></li>
            <li><a href="#" @click.prevent="selectFilter('mobile')" :class="{ current: selectedFilter === 'mobile' }">Mobile App</a></li>
            <li><a href="#" @click.prevent="selectFilter('web')" :class="{ current: selectedFilter === 'web' }">Web App</a></li>
            <li><a href="#" @click.prevent="selectFilter('ml')" :class="{ current: selectedFilter === 'ml' }">ML Model</a></li>
          </ul>
        </div>
        <div class="portfolio_list">
          <ul class="gallery_zoom">
            <li v-for="item in filteredPortfolio" :key="item.id" :class="item.category">
              <div class="inner">
                <div class="entry arlo_tm_portfolio_animation_wrap">
                  <a :href="item.imageUrl" class="zoom">
                    <img :src="item.thumbUrl" alt="Portfolio Item" />
                    <div class="main_image" :style="{ backgroundImage: 'url(' + item.imageUrl + ')' }"></div>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const portfolioItems = ref([
  { id: 1, category: 'desktop', title: 'Desktop App 1', imageUrl: 'https://via.placeholder.com/600x600', thumbUrl: 'https://via.placeholder.com/600x600' },
  { id: 2, category: 'mobile', title: 'Mobile App 1', imageUrl: 'https://via.placeholder.com/600x600', thumbUrl: 'https://via.placeholder.com/600x600' },
  { id: 3, category: 'web', title: 'Web App 1', imageUrl: 'https://via.placeholder.com/600x600', thumbUrl: 'https://via.placeholder.com/600x600' },
  { id: 4, category: 'ml', title: 'ML Model 1', imageUrl: 'https://via.placeholder.com/600x600', thumbUrl: 'https://via.placeholder.com/600x600' },
  { id: 5, category: 'desktop', title: 'Desktop App 2', imageUrl: 'https://via.placeholder.com/600x600', thumbUrl: 'https://via.placeholder.com/600x600' },
  { id: 6, category: 'web', title: 'Web App 2', imageUrl: 'https://via.placeholder.com/600x600', thumbUrl: 'https://via.placeholder.com/600x600' },
]);

const selectedFilter = ref('*');

const selectFilter = (filter) => {
  selectedFilter.value = filter;
};

const filteredPortfolio = computed(() => {
  if (selectedFilter.value === '*') {
    return portfolioItems.value;
  }
  return portfolioItems.value.filter(item => item.category === selectedFilter.value);
});
</script>

<style lang="scss" scoped>
.portfolio_list ul {
  margin: 0px 0px 0px -50px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}

.portfolio_list ul li {
  margin: 0px 0px 50px 0px;
  width: 33.3333%;
  padding-left: 50px;
  box-sizing: border-box;
}

.portfolio_list ul li .inner {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.portfolio_list ul li .inner .entry {
  position: relative;
  width: 100%;
}

.portfolio_list ul li .inner .entry a.zoom {
  display: block;
  position: relative;
  width: 100%;
  padding-top: 100%; /* --- FIX: Aspect ratio trick for 1:1 --- */
}

.portfolio_list ul li .inner img {
  display: none; /* The img is just for the href, the background-image is used */
}

.portfolio_list ul li .inner .main_image {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: all .3s ease;
}

.portfolio_list ul li .inner:hover .main_image {
  transform: scale(1.1);
}

.portfolio_filter ul li a {
  cursor: pointer;
}

.portfolio_filter ul li a.current {
  color: #e65f78;
}

.arlo_tm_section {
	width: 100%;
	height: auto;
	clear: both;
	float: left;
	position: relative;
	visibility: visible;
	padding-top: 100px;
	padding-bottom: 100px;
}

.arlo_tm_portfolio {
	width: 100%;
	height: auto;
	clear: both;
	float: left;
}

.arlo_tm_main_title {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
    text-align: center;
    margin-bottom: 60px;
}

.arlo_tm_main_title span {
    display: inline-block;
    color: #e65f78;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 12px;
}

.arlo_tm_main_title h3 {
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
}

.portfolio_filter {
  width: 100%;
  text-align: center;
  margin-bottom: 40px;
}

.portfolio_filter ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline-block;
}

.portfolio_filter ul li {
  display: inline-block;
  margin: 0 15px;
}

.portfolio_filter ul li a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}
</style>