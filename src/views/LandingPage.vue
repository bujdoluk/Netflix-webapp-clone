<template>
  <div class="nav">
      <div>
        <img src="../assets/netflix.jpg" class="img">
      </div>
      <div class="menu">
        <select name="languages" id="languages" class="languages">
          <option value="czech">Czech</option>
          <option value="english">English</option>
          <option value="slovak">Slovak</option>
          <option value="spanish">Spanish</option>
        </select>
        <button class="btn-red">Sign in</button>
      </div>   
  </div>
  <div class="headings">
    <h1>Unlimited movies, TV shows, and more.</h1>
    <h3>Watch anywhere. Cancel anytime.</h3>
  </div>
  <Email/>
  <Footer/>
</template>

<script>
import '../assets/main.css';
import Email from '../components/Email.vue'  
import Footer from '../components/Footer.vue'  

export default {
  components: {
    Email, Footer
  }
}
</script>

<style scoped>
h1 {
  font-size: 4.5rem;
}

h3 {
  font-size: 2rem;
}

.headings {
  display: block;
  margin: 0 auto;
}

.nav {
  display: flex;
  flex-direction: row;
}

.img {
  height: 75%;
  width: 75%;
}

.languages {
  margin-right: 2rem;
}

.menu {
  margin-left: auto;
  margin-right: 5rem;
  margin-top: 3rem;
}
</style>