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
                <input type="text" placeholder="What are you looking for?" v-model="search">
                <input type="submit" value="Search">
            </form>
            <p>Hi {{ user.displayName }}</p>
            <button @click="handleClick" class="logout">Log out</button>
        </div>
        
    </nav>

    <div class="movie-list">
        <div class="movie" v-for="movie in movies" :key="movie.imdbID">
            <div class="movies">
<router-link :to="'/movie' + movie.imdbID" class="movie-link">
                <div class="product-image">
                    <img :src="movie.Poster" alt="Movie Poster">
                </div>
            </router-link>
            </div>
            
        </div>
    </div>

    <Slide/>
    <footer class="footer">
        <router-link :to="{ name: 'TermsOfUse'}"><div class="link">Terms of Use</div></router-link>
        <router-link :to="{ name: 'Privacy'}"><div class="link">Privacy</div></router-link>
        <div class="cookies"><span class="link">Cookies Preferences</span></div>
        <router-link :to="{ name: 'CorporateInfo'}"><div class="link">Corporate Information</div></router-link> 
    </footer>
  </div>
</template>

<script>
import getUser from '../composables/getUser'
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import Slide from '../components/Slide.vue'
import useLogout from '../composables/useLogout'
import { ref } from 'vue'
import env from '@/env.js'

export default {
    components: { Slide },
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
  gap: 2rem;
}

p { 
  color: white;
};

/* Movie */
.movie-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0rem 0.8rem;
}
.movie {
    background: black;
    display: inline-flex;
    width: 20%;
}

.movies {
 
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
    width: 100%;
    height: 27.5rem;
    object-fit: cover;
}
</style>