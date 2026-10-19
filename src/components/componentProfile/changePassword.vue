<template>
    <div class="change-password">
      <div class="card">
        <h2>Change Password</h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="currentPassword">Current Password</label>
            <input
              type="password"
              id="currentPassword"
              v-model="currentPassword"
              required
            />
          </div>
  
          <div class="form-group">
            <label for="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              v-model="newPassword"
              required
            />
          </div>
  
          <div class="form-group">
            <label for="confirmPassword">Confirm New Password</label>
            <input
              type="password"
              id="confirmPassword"
              v-model="confirmPassword"
              required
            />
          </div>
  
          <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
          <p class="success" v-if="successMessage">{{ successMessage }}</p>
  
          <button type="submit">Update Password</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChangePassword',
    data() {
      return {
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        errorMessage: '',
        successMessage: '',
      };
    },
    methods: {
      handleSubmit() {
        this.errorMessage = '';
        this.successMessage = '';
  
        if (!this.currentPassword || !this.newPassword || !this.confirmPassword) {
          this.errorMessage = 'All fields are required.';
          return;
        }
  
        if (this.newPassword !== this.confirmPassword) {
          this.errorMessage = 'New passwords do not match.';
          return;
        }
  
        if (this.newPassword.length < 6) {
          this.errorMessage = 'Password must be at least 6 characters.';
          return;
        }
  
        // Simulasi update ke backend
        setTimeout(() => {
          this.successMessage = 'Password changed successfully!';
          this.currentPassword = '';
          this.newPassword = '';
          this.confirmPassword = '';
        }, 1000);
      },
    },
  };
  </script>
  
  <style scoped>
  .change-password {
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
  