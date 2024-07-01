<template>
    <div class="forgot-password">
      <h2>Forgot Password</h2>
      <form @submit.prevent="resetPassword">
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="email" required>
        <button type="submit">Reset Password</button>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        errorMessage: '',
        successMessage: ''
      };
    },
    methods: {
      async resetPassword() {
        // Reset error and success messages
        this.errorMessage = '';
        this.successMessage = '';
  
        // Validate email format (basic validation)
        if (!this.email.trim()) {
          this.errorMessage = 'Please enter your email.';
          return;
        }
  
        // Additional validation logic (if needed)
  
        try {
          // Make a backend API call to initiate password reset
          // Replace with your actual API endpoint and method (GET, POST, etc.)
          const response = await fetch('https://api.example.com/reset-password', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: this.email })
          });
  
          if (!response.ok) {
            throw new Error('Failed to reset password. Please try again.');
          }
  
          const data = await response.json();
          this.successMessage = data.message; // Display success message to user
          this.email = ''; // Clear input field after successful submission
  
        } catch (error) {
          console.error('Error resetting password:', error);
          this.errorMessage = 'Failed to reset password. Please try again later.';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .forgot-password {
    text-align: center;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  form {
    margin-top: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .error-message {
    color: #dc3545;
    margin-top: 8px;
  }
  
  .success-message {
    color: #28a745;
    margin-top: 8px;
  }
  </style>
  