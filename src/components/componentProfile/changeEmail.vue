<template>
    <div class="change-email">
      <div class="card">
        <h2>Change Email</h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="currentEmail">Current Email</label>
            <input
              type="email"
              id="currentEmail"
              v-model="currentEmail"
              required
            />
          </div>
  
          <div class="form-group">
            <label for="newEmail">New Email</label>
            <input
              type="email"
              id="newEmail"
              v-model="newEmail"
              required
            />
          </div>
  
          <div class="form-group">
            <label for="confirmEmail">Confirm New Email</label>
            <input
              type="email"
              id="confirmEmail"
              v-model="confirmEmail"
              required
            />
          </div>
  
          <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
          <p class="success" v-if="successMessage">{{ successMessage }}</p>
  
          <button type="submit">Update Email</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChangeEmail',
    data() {
      return {
        currentEmail: '',
        newEmail: '',
        confirmEmail: '',
        errorMessage: '',
        successMessage: '',
      };
    },
    methods: {
      handleSubmit() {
        this.errorMessage = '';
        this.successMessage = '';
  
        // Validasi kosong
        if (!this.currentEmail || !this.newEmail || !this.confirmEmail) {
          this.errorMessage = 'All fields are required.';
          return;
        }
  
        // Validasi email cocok
        if (this.newEmail !== this.confirmEmail) {
          this.errorMessage = 'New emails do not match.';
          return;
        }
  
        // Validasi format email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.newEmail)) {
          this.errorMessage = 'Please enter a valid email address.';
          return;
        }
  
        // Simulasi update ke backend
        setTimeout(() => {
          this.successMessage = 'Email updated successfully!';
          this.currentEmail = '';
          this.newEmail = '';
          this.confirmEmail = '';
        }, 1000);
      }
    }
  };
  </script>
  
  <style scoped>
  .change-email {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f3f4f6;
    padding: 20px;
  }
  
  .card {
    background: #fff;
    padding: 30px;
    border-radius: 12px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 6px;
    font-weight: 600;
    color: #444;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 14px;
  }
  
  input:focus {
    border-color: #3b82f6;
    outline: none;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #3b82f6;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  button:hover {
    background-color: #2563eb;
  }
  
  .error {
    color: #dc2626;
    font-size: 14px;
    margin-top: -5px;
    margin-bottom: 10px;
  }
  
  .success {
    color: #16a34a;
    font-size: 14px;
    margin-top: -5px;
    margin-bottom: 10px;
  }
  </style>
  