<template>
    <div class="login-page">
      <div class="login-box">
        <h2>Login ke Akun Anda</h2>
        <form @submit.prevent="login">
          <div class="input-group">
            <label>Email</label>
            <input v-model="email" type="email" required />
          </div>
          <div class="input-group">
            <label>Password</label>
            <input v-model="password" type="password" required />
          </div>
          <button type="submit">Login</button>
          <p class="register-link">
            Belum punya akun?
            <a href="#" @click="toRegister">Daftar di sini</a>
          </p>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
        alert(`Email: ${this.email}, Password: ${this.password}`)
        if(this.email && this.password){
            this.$router.push('/dashboard/home/viewProfile')
        }
        else{
            alert('invalid login')
            window.location.reload()
        }
      },
      toRegister(e){
        e.preventDefault()
        this.$router.push('/registers')
      }
    }
  }
  </script>
  
  <style scoped>
body, html {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #667eea, #764ba2);
  height: 100%;
}

.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.login-box {
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;
}

.login-box h2 {
  text-align: center;
  margin-bottom: 24px;
  color: #333;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 8px;
  color: #555;
}

.input-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  transition: border 0.3s;
}

.input-group input:focus {
  border-color: #667eea;
  outline: none;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #667eea;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #5a67d8;
}

.register-link {
  text-align: center;
  margin-top: 16px;
  font-size: 14px;
  color: #666;
}

.register-link a {
  color: #667eea;
  text-decoration: none;
}

.register-link a:hover {
  text-decoration: underline;
}

</style>
  