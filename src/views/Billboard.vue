<template>
  <div class="container">
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
            <form @submit.prevent="SearchMovies()" class="search-box">
                <input type="text" placeholder="What are you looking for?" v-model="search" class="search">
                <!-- <span class="material-icons close">
                    close
                </span> -->
                <input class="search-button" type="submit" value="Search" v-on:click="isHidden = !isHidden">
            </form>
            <p class="displayName">Hi {{ user.displayName }}</p>
            <button @click="handleClick" class="logout">Log out</button>
        </div>
        
    </nav>

    <div class="movie-list">
        <div class="movie" v-for="movie in movies" :key="movie.imdbID">
            <div class="movies">
                <router-link :to="'/movie/' + movie.imdbID" class="movie-link">
                    <div class="product-image">
                        <img :src="movie.Poster" alt="Movie Poster">
                    </div>
                </router-link>
            </div>
        </div>
    </div>

    <Slide v-if="!isHidden"/>
    <FooterSmall/>
  </div>
</template>

<script>
import FooterSmall from '../components/FooterSmall.vue'
import getUser from '../composables/getUser'
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import Slide from '../components/Slide.vue'
import useLogout from '../composables/useLogout'
import { ref } from 'vue'
import env from '@/env.js'

export default {
    components: { Slide, FooterSmall },
    data() {
        return { isHidden: false }
    },
    setup() {
        const { user } = getUser()
        const router = useRouter()

        // Watch User

        watch(user, () => {
            if(!user.value) {
                router.push({ name: 'Home' })
            }
        })

        //Logout

        const { logout, error } = useLogout()

        const handleClick = async () => {
        await logout()
        if(!error.value) {
            console.log('user logged out')
        }
        }

        // Movies search

        const search = ref('')
        const movies = ref([])
        
        const SearchMovies = () => {
            if(search.value != '') {
                fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
                    .then(response => response.json())
                    .then(data => {
                        movies.value = data.Search;
                        search.value = '';
                    });
            }
        }


        return { handleClick, user, search, movies, SearchMovies }
    }
}
</script>

<style scoped>
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
  gap: 4rem;
}

.displayName {
    color: white;
}

p { 
  color: white;
}

.search-box {
    position: relative;
}

.search-button {
    border: 0.2rem solid white;
    padding: 1rem;
    font-size: 1.5rem;
    border-radius: 0.3rem;
}

.search {
    border: 0.2rem solid white;
    padding: 1rem;
    font-size: 1.5rem;
    width: 20rem;
    z-index: 4;
    margin-right: 1rem;
    border-radius: 0.3rem;
}

.close {
    position: absolute;
    left: 70%;
    top: 20%;
    z-index: 5;
}

.logout {
    padding: 1rem;
    background: black;
    color: white;
    border: 0.1rem solid white;
    border-radius: 0.3rem;
}

/* Movie */
.movie-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0rem 0.8rem;
}
.movie {
    display: inline-flex;
    justify-content: center;
    margin: 0 auto;
   
}

.movies {
 margin: 3rem;
}

.movie-link {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.product-image {
    position: relative;
    display: block;
}

img {
    display: block;
    width: 30rem;
    height: 37.5rem;
    object-fit: cover;
}
</style>