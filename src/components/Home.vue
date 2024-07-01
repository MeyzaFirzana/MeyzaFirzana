<!-- Home.vue -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home-container">
    <div class="welcome-section">
      <h1 class="animated-title">Welcome to the Future of Food Traceability</h1>
      <p>Ensuring the integrity and transparency of food supply chains using cutting-edge blockchain technology. Our platform provides a reliable and secure way to trace the journey of food products from their origin to the consumer, ensuring that every step is recorded and verified on an immutable ledger. By leveraging blockchain, we enhance the transparency and accountability of food supply chains, helping to build trust and confidence among consumers.</p>
      <img src="@/assets/logotest2.png" alt="Welcome Image" class="welcome-image">
    </div>
    <div class="features-section">
      <h2>Our Features</h2>
      <div class="features">
        <div class="feature">
          <img src="@/assets/feature1.jpg" alt="Secure and Transparent">
          <h3>Secure and Transparent</h3>
          <p>Utilize blockchain to provide an immutable and transparent record of your food products. Each transaction is recorded in a decentralized manner, ensuring that the data cannot be altered or tampered with.</p>
        </div>
        <div class="feature">
          <img src="@/assets/feature3.jpg" alt="Consumer Confidence">
          <h3>Enhance Consumer Confidence </h3>
          <p>Empower consumers with verified information about the origin and journey of their food. Provide them with the assurance that their food is safe, authentic, and has been handled properly throughout its journey.</p>
        </div>
        <div class="feature">
          <img src="@/assets/feature2.jpg" alt="Real-Time Tracking ">
          <h3>Real-Time Tracking</h3>
          <p>Monitor the journey of your food products from farm to fork with real-time updates. Stay informed about the location, condition, and status of your products at all times.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.home-container {
  text-align: center;
  font-family: Arial, sans-serif;
  margin: 20px;
  background-color: #f2f9f9; /* Green color */
  ; /* Light blue background color */
  padding: 20px;
  border-radius: 10px;
}

.welcome-section {
  margin-bottom: 40px;
  animation: fadeIn 2s ease-in;
}

.animated-title {
  font-size: 2.5em; /* Increased font size for the title */
  margin-bottom: 20px;
  animation: bounce 2s infinite; /* Bounce animation */
}

.welcome-section p {
  font-size: 1.2em; /* Increased font size for the paragraph */
  line-height: 1.6; /* Improved line spacing */
}

.welcome-image {
  width: 80%;
  max-width: 600px;
  margin-top: 20px;
  border-radius: 10px;
  animation: zoomIn 2s ease-in-out;
}

.features-section {
  margin-top: 40px;
  animation: slideInUp 1.5s ease-in-out;
}

.features-section h2 {
  font-size: 2em; /* Increased font size for the features title */
  margin-bottom: 30px;
}

.features {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.feature {
  margin: 20px;
  width: 250px;
  text-align: center;
  transition: transform 0.3s ease;
}

.feature:hover {
  transform: scale(1.05);
}

.feature img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.feature h3 {
  margin-top: 10px;
  font-size: 1.8em; /* Increased font size for feature titles */
  color: #42aeb2; /* Green color */
}

.feature p {
  font-size: 1.1em; /* Increased font size for feature descriptions */
  color: #42aeb2; /* Green color */
  line-height: 1.6; /* Improved line spacing */
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes zoomIn {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
}

@keyframes slideInUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
</style>
