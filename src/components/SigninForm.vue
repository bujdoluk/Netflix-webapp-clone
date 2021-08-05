<template>
  <section class="container">
    <img src="../assets/netflix.jpg" class="img">
    <div class="signin">
        <h1>Sign In</h1>
        <form @submit.prevent="handleSubmit" class="form">
            <input type="text" class="displayName" placeholder="Your name" required v-model="displayName">
            <input type="email" class="email" placeholder="Email or phone number" required v-model="email">
            <input type="password" class="password" placeholder="Password" required v-model="password">
            <div class="error">{{ error }}</div>
            <button class="btn-red">Sign In</button>
        </form>
        <div class="remember">
            <div class="remember-1">
                <input type="checkbox">
                <p>Remember me</p>
            </div>
            
            <p class="help">Need help?</p>
        </div>
        <p class="facebook">Login with facebook</p>
        <p class="netflix">New to Netflix? <a class="sign">Sign up now</a>.</p>
        <p class="captcha">This page is protected by Google reCAPTCHA to ensure you're not
        a bot.<a class="learn"> Learn more.</a></p> 
    </div>
    <footer class="footer">
          <router-link :to="{ name: 'TermsOfUse'}"><div class="link">Terms of Use</div></router-link>
          <router-link :to="{ name: 'Privacy'}"><div class="link">Privacy</div></router-link>
          <div class="cookies"><span class="link">Cookies Preferences</span></div>
          <router-link :to="{ name: 'CorporateInfo'}"><div class="link">Corporate Information</div></router-link> 
    </footer>
</section>
</template>

<script>
import { ref } from 'vue'
import useSignin from '../composables/useSignin'

export default {
    setup(props, context) {
        const { error, signin } = useSignin()
       

        //refs
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            const res = await signin( email.value, password.value, displayName.value )
            if(!error.value) {
               context.emit('signin')
           }
        }

        return { displayName, email, password, handleSubmit, error }
    }
}
</script>

<style scoped>
.container {
    background-image: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.4),rgba(0,0,0,0.8)), url("../assets/bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    color: grey;
    position: relative;
}

h1 {
    color: white;
    margin-bottom: 2rem;
    font-size: 4rem;
}

.img {
    width: 20rem;
    height: 12rem;
    margin-left: 4rem;
}

.signin {
    background: rgba(0,0,0,0.6);
    width: 45rem;
    padding: 6rem 6rem 2rem 6rem;
    display: flex;
    flex-direction: column;
    margin: 7rem auto;
    border-radius: 0.5rem;
}

.remember {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2rem;
    margin-bottom: 4rem;
    font-size: 1.5rem;
}

.remember-1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
}

.form {
    display: flex;
    flex-direction: column;
}

.displayName {
    margin-bottom: 2rem;
    border: 0;
    padding: 1.5rem;
    color: rgb(182, 182, 182);
    border-radius: 0.2rem;
    background: rgb(73, 73, 73);
    font-size: 1.7rem;
}

.email {
    margin-bottom: 2rem;
    border: 0;
    padding: 1.5rem;
    color: rgb(182, 182, 182);
    border-radius: 0.2rem;
    background: rgb(73, 73, 73);
    font-size: 1.7rem;
}

.password {
    margin-bottom: 2rem;
    border: 0;
    padding: 1.5rem;
    color: rgb(182, 182, 182);
    border-radius: 0.2rem;
    background: rgb(73, 73, 73);
    font-size: 1.7rem;
}

.captcha {
    font-size: 1.5rem;
}

.learn {
    color: rgb(34, 106, 240);
}

.learn:hover {
    border-bottom: 0.1rem solid rgb(34, 106, 240);
}

.sign {
    color: white;
}

.help:hover {
    border-bottom: 0.1rem solid grey;
}

.facebook {
    margin-bottom: 1rem;
    font-size: 2rem;
}

.netflix {
    margin-bottom: 1rem;
    font-size: 2rem;
}

.btn-red {
    padding: 2rem;
    font-weight: bold;
    font-size: 1.7rem;
}

/* Footer */
.footer {
  height: 15%;
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
</style>