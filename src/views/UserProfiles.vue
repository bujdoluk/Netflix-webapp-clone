<template>
  <nav class="nav">
    <img src="../assets/netflix.jpg" class="logo"> 
  </nav>
  <section class="container">
      <h1>Who is watching right now?</h1>
      <div class="profiles">
          
          <router-link :to="{ name: 'Billboard'}">
            <div class="user">
              <img class="img" src="../assets/user.jpg" alt="Lukas">
              <p>Lukas</p>
            </div>
          </router-link>
        
          <router-link :to="{ name: 'Billboard'}">
            <div class="user">
              <img class="img" src="../assets/netflixkids.png" alt="Children">
              <p>Children</p>
            </div>
          </router-link>
        
          <div class="user">
              <img class="img" src="../assets/add.png" alt="Add">
              <p>Add a profile</p>
          </div>
      </div>
      <button class="btn-profile">Manage profiles</button>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
/*  Navigation */
.nav {
    background: black;
    height: 6.2vh;
    color: white;
    font-size: 2rem;
    width: 50vw;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
}

.logo {
  width: 12rem;
  height: 8rem;
  padding-top: 1rem;
  margin-left: 2rem;
  cursor: pointer;
}

/* Content section */
.container {
    width: 40%;
    padding-top: 35rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
}

h1 {
    color: white;
    font-size: 3rem;
    text-align: center;
    margin-bottom: 2rem;
}

.profiles {
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
}

.img {
    height: 10rem;
    width: 10rem;
    border-radius: 0.3rem;
    margin-bottom: 1rem;
}

.btn-profile {
    width: 18rem;
    background: black;
    color: rgb(158, 158, 158);
    border: 0.1rem solid rgb(158, 158, 158);
    border-radius: 0.1rem;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    text-transform: uppercase;
}

.btn-profile:hover {
    color: white;
    border: 0.1rem solid white;
}

.user {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.user:hover > img {
    border: 0.1rem solid white;
}

.user:hover > p {
    color: white;
}

p {
    font-size: 1.7rem;
    color: rgb(158, 158, 158);
}
</style>