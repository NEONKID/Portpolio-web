<template>
  <div class="arlo_tm_leftpart">
    <div class="inner">
      <div class="logo">
        <!-- You can place the logo here -->
        <h3>Neon K.I.D</h3>
      </div>
      <div class="menu">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/resume">Resume</router-link></li>
          <li><router-link to="/portfolio">Portfolio</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
      <div class="copyright">
        <!-- Copyright text can go here -->
        <p>© 2024 by Neon K.I.D</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftSidebar'
}
</script>

<style lang="scss" scoped>
.arlo_tm_leftpart {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 450px;
  background-color: #333;
  color: white;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10; /* Ensure sidebar is on top */
  box-sizing: border-box;
}

.menu ul {
  list-style-type: none;
  padding: 0;
}

.menu ul li {
  margin-bottom: 20px;
}

.menu ul li a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}

.menu ul li a.router-link-exact-active {
  color: #4dffb8; /* Active link color */
}
</style>