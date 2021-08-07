<template>
    <footer class="footer">
          <router-link :to="{ name: 'TermsOfUse'}"><div class="link">Terms of Use</div></router-link>
          <router-link :to="{ name: 'Privacy'}"><div class="link">Privacy</div></router-link>
          <div class="cookies"><span class="link">Cookies Preferences</span></div>
          <router-link :to="{ name: 'CorporateInfo'}"><div class="link">Corporate Information</div></router-link> 
  </footer>
</template>

<script>
export default {

}
</script>

<style>
/* Footer */
.footer {
  height: 20vh;
  background: rgba(0,0,0,0.7);
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.5rem;
  font-size: 1.7rem;
  color: grey;
}

.link {
  color: grey;
  margin-top: 3rem;
}

.link:hover {
  border-bottom: 0.1rem solid grey;
}

.cookies {
    margin-top: 3rem;
}

.cookies:hover {
    border-bottom: 0.1rem solid grey;
}
</style>