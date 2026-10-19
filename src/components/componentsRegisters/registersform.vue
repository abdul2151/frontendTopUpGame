<template>
    <div class="registerContainer">
        <i class="fa-brands fa-left" id="left" @click="anchorLogin"></i>
      <form class="registerForm" @submit.prevent="register">
        <h2 class="tittleForm">Register</h2>
        <div class="nameContainer">
          <input type="text" v-model="form.firstName" class="formInput halfInput" placeholder="First Name" required />
          <input type="text" v-model="form.lastName" class="formInput halfInput" placeholder="Last Name" required />
        </div>
        <div class="nameContainer">
          <input type="email" v-model="form.email" class="formInput halfInput" placeholder="Email" required />
          <input type="password" v-model="form.password" class="formInput halfInput" placeholder="Password" required />
        </div>
        <div class="nameContainer">
          <input type="password" v-model="form.confirmPassword" class="formInput halfInput" placeholder="Confirm Password" required />
        </div>
        <div class="checkBokContent">
          <input type="checkbox" v-model="form.agree" id="agree" required />
          <label for="agree">I agree to the terms and conditions</label>
        </div>
        <div class="btn">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          agree: false
        }
      };
    },
    methods: {
      register() {
        if (this.form.password !== this.form.confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
        console.log("User registered with: ", this.form);
        this.$router.push('/loginpage')
        alert("Registration successful!");
      },
      anchorLogin(){
        this.$router.push('/loginpage')
      }
    }
  };
  </script>
  
  <style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background: linear-gradient(to right, #2c3e50, #3498db);
  width:100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.registerContainer {
  max-width: 450px;
  height: 50vh;
  margin:auto;
  margin-top: 10%;
  background-color: #ffffff;
  padding: 50px 30px;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  animation: fadeSlideIn 0.6s ease forwards;
}

.tittleForm {
  text-align: center;
  margin-bottom: 25px;
  font-size: 2em;
  font-weight: 700;
  color: #2c3e50;
}

.registerForm {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.nameContainer {
  display: flex;
  gap: 15px;
  width: 100%;
}

.halfInput {
  width: 50%;
}

.formInput {
  width: 100%;
  padding: 12px 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #f8f8f8;
  transition: border-color 0.3s ease;
}

.formInput:focus {
  border-color: #3498db;
  outline: none;
}

.checkBokContent {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9em;
  color: #555;
}

.btn {
  margin-top: 10px;
}

.btn button {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  background-color: #3498db;
  color: #fff;
  font-weight: 600;
  font-size: 1em;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn button:hover {
  background-color: #2980b9;
}

#left {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 2em;
  color: #2c3e50;
  cursor: pointer;
  transition: transform 0.2s ease;
}

#left:hover {
  transform: scale(1.1);
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .nameContainer {
    flex-direction: column;
    gap: 10px;
  }

  .halfInput {
    width: 100%;
  }

  .registerContainer {
    padding: 30px 20px;
  }
}

/* Animasi */
@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

  </style>
  