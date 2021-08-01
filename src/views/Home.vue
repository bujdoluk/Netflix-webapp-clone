<template>
    <div v-if="showSignin" class="signinform">
        <SigninForm @signin="enterProfiles"/>
        <p class="browse">Browse as a Guest</p>
        <p>Already have an account? <span @click="showSignin = false"><u>Log in</u></span></p>
    </div>
    <div v-else class="loginform">
        <LoginForm @login="enterProfiles"/>
        <p class="browse">Browse as a Guest</p>
        <p>No account yet?<span @click="showSignin = true"><u>Sign in</u></span></p>
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
</template>

<script>
import SigninForm from '../components/SigninForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    components: { SigninForm, LoginForm },
    setup() {
        const showSignin = ref(true)
        const router = useRouter()

        const enterProfiles = () => {
          router.push({ name: 'UserProfiles'})
        }

        return { showSignin, enterProfiles }
    }
}
</script>

<style scoped>
.browse {
    font-size: 3.5rem;
    font-weight: bold;
    top: 79%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    position: absolute;
    border: 0.1rem solid red;
    color: red;
}

.signinform, .loginform {
    position: relative;
}
span {
    color: red;
}

p {
    top: 84%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    position: absolute;
    color:white;
    font-size: 3rem;
    background: rgba(0,0,0,0.6);
    width: 45rem;
    display: flex;
    flex-direction: column;
    margin: 5rem auto;
    border-radius: 0.5rem;
    background-color: transparent;
}

/* Footer */
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