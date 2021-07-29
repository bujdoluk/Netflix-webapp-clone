<template>    
<section class="container">
    <img src="../assets/netflix.jpg" class="img">
    <div class="signin">
        <h1>Sign In</h1>
        <form @submit.prevent="handleSubmit" class="form">
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
    <footer>
    <div class="footer">
        <div class="lang-menu">
            <div class="selected-lang">
                English
            </div>
            <ul>
                <li><a href="" class="de">German</a></li>
                <li><a href="" class="us">English</a></li>
                <li><a href="" class="sk">Slovak</a></li>
            </ul>
        </div>
        <div>
            <div class="ul">
                <div><a href="">Terms of Use</a></div>
                <div><a href="">Privacy</a></div>
                <div><a href="">Cookies Preferences</a></div>
                <div><a href="">Corporate Information</a></div>
            </div>
        </div>
    </div>
  </footer>
</section>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignin from '../composables/useSignin'

export default {
    setup() {
        const { error, signin } = useSignin()

        //refs
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            await signin(email.value, password.value)
        }

        return { email, password, handleSubmit, error }
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
    overflow-y: hidden;
}

h1 {
    color: white;
    margin-bottom: 2rem;
    font-size: 4rem;
}

.img {
    width: 20rem;
    height: 14rem;
    margin-left: 4rem;
}

.signin {
    background: rgba(0,0,0,0.6);
    margin-top: 15rem;
    width: 45rem;
    padding: 6rem;
    display: flex;
    flex-direction: column;
    margin: 5rem auto;
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
    margin-bottom: 2rem;
    font-size: 2rem;
}

.netflix {
    margin-bottom: 2rem;
    font-size: 2rem;
}

.btn-red {
    padding: 2rem;
    font-weight: bold;
    font-size: 1.7rem;
}

footer {
    background: rgba(0, 0, 0, 0.6);
    height: 20vh;
}

.footer {
    width: 50%;
    margin: 2rem auto;
    display: flex;
    flex-direction: row;
}

.lang-menu {
  margin-top: 2.5rem 0 2.5rem 0;
  position: relative;
}

.lang-menu ul {
  background-color:	#B8B8B8;
  border: 0.1rem solid white;
  border-radius: 0.4rem; 
  display: none;
  position: absolute;
  top: 3.5rem;
  left: 0;
}

.lang-menu:hover ul {
  display: block;
}

.lang-menu ul li{
  list-style-type: none;
  display: flex;
  justify-content: space-between;
}

.lang-menu ul li a {
  width: 14rem;
  display: block;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  color: white;
}

.lang-menu ul li a:before {
  content: '';
  display: inline-block;
  width: 3.2rem;
  height: 3.2rem;
  vertical-align: middle;
  margin-right: 1rem;
}

.lang-menu ul li a:hover {
  background-color: #F0F0F0;
  color: black;
}

.selected-lang {
  color: white;
  cursor: pointer;
  line-height: 2;
  width: 8.5rem;
  font-size: 1.5rem;
}

.selected-lang::before {
  content: '';
  display: block;
  width: 3.2rem;
  height: 3.2rem;
  background-image: url(https://www.countryflags.io/us/flat/32.png);
}

.de:before {
  background-image: url(https://www.countryflags.io/de/flat/32.png);
}

.us:before {
  background-image: url(https://www.countryflags.io/us/flat/32.png);
}

.sk:before {
  background-image: url(https://www.countryflags.io/sk/flat/32.png);
}
</style>