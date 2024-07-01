<template>
  <div class="about-container">
    <h1>About Us</h1>
    <p class="mission-statement">
      Welcome to our Food Traceability System project. Our mission is to provide transparency and accountability in the food supply chain.
      We believe that knowing the origin and journey of your food is crucial for ensuring safety, quality, and sustainability.
    </p>
    <div class="image-container">
      <img src="@/assets/mission.jpg" alt="Our Mission" class="fade-in">
    </div>
    <p class="animated-text">
      Our team is dedicated to implementing the latest technologies in blockchain to create a reliable and efficient traceability system.
      We work tirelessly to ensure that every food item can be tracked from farm to table, providing consumers with the information they need to make informed decisions.
      At Food Traceability, we revolutionize the way food supply chains are managed using cutting-edge blockchain technology. Leveraging blockchain's immutable ledger, every step of a food item's journey—from farm to table—is securely recorded and made accessible to consumers and stakeholders alike. This transparency not only enhances trust but also enables consumers to make informed choices about the products they purchase. Our platform empowers farmers, distributors, retailers, and consumers by providing real-time access to crucial information such as origin, production methods, quality certifications, and handling procedures. By integrating blockchain into food traceability, we aim to mitigate food fraud, reduce waste, improve food safety standards, and foster a more sustainable food ecosystem. Join us in reshaping the future of food traceability through innovation and transparency.
    </p>
    <div class="image-container">
      <img src="@/assets/welcome-image.jpg" alt="Our Team" class="slide-in-left">
    </div>
    <p class="animated-text">
      Join us on our transformative journey to revolutionize the food industry and pave the way for a future where transparency in food sourcing, efficient waste reduction strategies, and enhanced food safety measures become the new standard. Together, we can make a profound difference in ensuring that every consumer has access to trustworthy information about their food, contributing to healthier choices and a sustainable environment.
    </p>
    <div class="image-container">
      <img src="@/assets/vision.jpg" alt="Our Vision" class="slide-in-right">
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
};
</script>

<style scoped>
.about-container {
  text-align: center;
  font-family: Arial, sans-serif;
  padding: 20px;
  background: linear-gradient(to right, #f9f9f9, #e0f7fa);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out;
}

.about-container h1 {
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: #2c3e50;
  text-shadow: 1px 1px 2px #000;
}

.about-container p {
  margin: 20px 0;
  line-height: 1.6;
  color: #34495e;
}

.image-container {
  margin: 20px 0;
}

.image-container img {
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 10px;
  transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
}

.image-container img:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.mission-statement {
  font-size: 1.2rem;
  font-weight: bold;
  color: #16a085;
  animation: fadeIn 2s ease-in-out;
}

.animated-text {
  animation: moveIn 1.5s ease-in-out forwards;
}

.fade-in {
  animation: fadeIn 3s ease-in-out;
}

.slide-in-left {
  animation: slideInLeft 2s ease-in-out;
}

.slide-in-right {
  animation: slideInRight 2s ease-in-out;
}

/* Keyframes for animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes moveIn {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
