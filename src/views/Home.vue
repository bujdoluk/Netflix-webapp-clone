<template>
      <div v-if="showSignin" class="signinform">
          <SigninForm @signin="enterProfiles"/>
          <p>Already have an account? <span @click="showSignin = false"><u>Log in</u></span></p> 
      </div>
      <div v-else class="loginform">
          <LoginForm @login="enterProfiles"/>
          <p>No account yet?<span @click="showSignin = true"><u>Sign in</u></span></p>
      </div>   
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
.login-signin {
  background: rgba(0,0,0,0.6);
  padding: 2rem 0;
}

.signinform, .loginform {
    position: relative;
}

span {
    color: red;
}

p {
    color: white;
    top: 77%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    position: absolute;
    font-size: 2.5rem;
    background: rgba(0,0,0,0.7);
    width: 45rem;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    background-color: transparent;
}
</style>