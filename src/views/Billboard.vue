<template>
  <div class="container">
      <Navbar/>
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
import Navbar from '../components/Navbar.vue'
import getUser from '../composables/getUser'
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import Slide from '../components/Slide.vue'

export default {
    components: { Navbar, Slide },
    setup() {
        const { user } = getUser()
        const router = useRouter()

        watch(user, () => {
            if(!user.value) {
                router.push({ name: 'Home' })
            }
        })
    }
}
</script>

<style scoped>
p {
    color: white;
}
</style>