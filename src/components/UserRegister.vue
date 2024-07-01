<template>
  <div class="register-container">
    <h1>Register</h1>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm Password:</label>
        <input type="password" v-model="confirmPassword" required />
      </div>
      <button type="submit">Register</button>
    </form>
    <div class="social-login">
      <p>Or register with:</p>
      <button @click="socialRegister('Google')" class="google-btn">Google</button>
      <button @click="socialRegister('Facebook')" class="facebook-btn">Facebook</button>
    </div>
    <p>Already have an account? <router-link to="/login">Login here</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'UserRegister',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      ws: null
    };
  },
  created() {
    this.connectWebSocket();
  },
  methods: {
    connectWebSocket() {
      this.ws = new WebSocket('ws://localhost:8096');

      this.ws.onopen = () => {
        console.log('WebSocket connection established');
        this.ws.send('Hello from the client!');
      };

      this.ws.onmessage = (event) => {
        console.log('Received from server:', event.data);
      };

      this.ws.onclose = () => {
        console.log('WebSocket connection closed');
      };
    },
    register() {
      // Implement register logic here
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        this.ws.send(`Registering: ${this.email}`);
      }
    },
    socialRegister(provider) {
      // Implement social register logic here
      console.log(`Registering with ${provider}`);
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        this.ws.send(`Social Registering with: ${provider}`);
      }
    }
  }
};
</script>

<style scoped>
.register-container {
  text-align: center;
  padding: 20px;
  background: linear-gradient(to right, #6dc5c8 , #caebec );
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 50px auto;
  animation: fadeIn 1s ease-in-out;
}

h1 {
  font-size: 2rem;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #42a5f5;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #1e88e5;
}

.social-login {
  margin: 20px 0;
}

.social-login p {
  margin-bottom: 10px;
}

.social-login button {
  width: 48%;
  margin: 5px 1%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 1rem;
}

.google-btn {
  background-color: #db4437;
}

.google-btn:hover {
  background-color: #c33d2e;
}

.facebook-btn {
  background-color: #3b5998;
}

.facebook-btn:hover {
  background-color: #2d4373;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
