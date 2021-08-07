<template>
  <div class="movie-detail">
      <img :src="movie.Poster" alt="Movie Poster" class="featured-img">
      <h2>Name: {{ movie.Title }}</h2>
      <div class="year">
        <p>Year: {{ movie.Year }}</p>
        <p>{{ movie.Runtime }}</p>
      </div>
      <p><span class="grey">Actors:</span> {{ movie.Actors }}</p>
      <p><span class="grey">Genre:</span> {{ movie.Genre }}</p>
      <p><span class="grey">IMDB rating:</span> {{ movie.imdbRating }}</p>
      <p>{{ movie.Plot }}</p>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import env from '@/env.js'

export default {
    setup() {
        const movie = ref({});
        const route = useRoute()

        onBeforeMount(() => {
            fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`)
            .then(response => response.json())
            .then(data => {
                movie.value = data;
                console.log(data)
            })
        })

        return { movie, route, onBeforeMount }
    }
}
</script>

<style>
h2 {
    color: white;
}

.movie-detail {
    width: 60%;
    margin: 0 auto;
    padding: 2rem;
    font-size: 3rem;
}

.featured-img {
    display: block;
    object-fit: cover;
    margin-bottom: 2rem;
}

p {
    color: white;
    font-size: 1.8rem;
    margin: 1rem 0rem;
}

.year {
    display: flex;
    gap: 2rem;
}

.grey {
    color: grey;
}
</style>