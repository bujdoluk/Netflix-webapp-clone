import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null)

const signin = async (email, password, displayName) => {
    error.value = null

    try {
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)
        if(!res) {
            throw new Error('Could not complete the sign in')
        }
        await res.user.updateProfile({ displayName })
        error.value = null

        console.log(res.user)

        return res
    } catch(err) {
        console.log(err.message)
        error.value = err.message
    }
}

const useSignin = () => {
    return { error, signin }
}

export default useSignin