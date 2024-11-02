// AuthViewScript.js
import { ref } from 'vue'
import { signUp, login, logout } from '../../supabase' // Ensure this path is correct

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const message = ref('')

    const handleSignUp = async () => {
      const { data, error } = await signUp(email.value, password.value)
      if (error) {
        console.error('Sign Up Error:', error)
        alert(`Sign Up Error: ${error.message}`)
      } else {
        message.value = 'Sign Up Successful'
        email.value = ''
        password.value = ''
      }
    }

    const handleLogin = async () => {
      console.log('Login Attempt:', email.value, password.value) // Log email and password
      const { data, error } = await login(email.value, password.value)
      if (error) {
        console.error('Login Error Details:', error)
        alert(`Login Error: ${error.message}`)
      } else {
        message.value = 'Login Successful'
        email.value = ''
        password.value = ''
      }
    }

    const handleLogout = async () => {
      const { error } = await logout()
      if (error) {
        console.error('Logout Error:', error)
        alert(`Logout Error: ${error.message}`)
      } else {
        message.value = 'Logged Out Successfully'
      }
    }

    return { email, password, handleSignUp, handleLogin, handleLogout, message }
  },
}
