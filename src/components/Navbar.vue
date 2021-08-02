<template>
  <nav class="nav" v-if="user">

    <div class="nav-left">
      <img src="../assets/netflix.jpg" class="logo">
      <p>Home Page</p> 
      <p>Shows</p> 
      <p>Films</p> 
      <p>New & favourites</p> 
      <p>My list</p> 
    </div>

    <div class="nav-right">
      <p>Hi {{ user.displayName }}</p>
      <button @click="handleClick" class="logout">Log out</button>
    </div>
    
  </nav>
</template>

<script>
import getUser from '../composables/getUser'
import useLogout from '../composables/useLogout'

export default {
  setup() {
    const { logout, error } = useLogout()
    const { user } = getUser()

    const handleClick = async () => {
      await logout()
      if(!error.value) {
        console.log('user logged out')
      }
    }

    return { handleClick, user }
  }
}
</script>

<style>
/* Navbar */
.logo {
  width: 14rem;
  height: 10rem;
  padding-top: 1rem;
  margin-left: 2rem;
  cursor: pointer;
}

.nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 1.5rem;
  padding: 1rem 2rem;
}

.nav-left {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
}

.nav-right {
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
}

p { 
  color: white;
};
</style>