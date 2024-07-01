<template>
  <div class="contact-container">
    <h1>Contact Us</h1>
    <p>If you have any questions or require further information, please feel free to reach out to us. We are always here to help and provide the support you need:</p>
    <div class="contact-details">
      <p><i class="fas fa-envelope"></i> <strong>Email:</strong> <a href="mailto:meyza55@gmail.com">meyza55@gmail.com</a></p>
      <p><i class="fas fa-phone"></i> <strong>Phone:</strong> <a href="tel:+60106636465">010-663 6465</a></p>
      <p><i class="fab fa-instagram"></i> <strong>Instagram:</strong> <a href="https://www.instagram.com/yourprofile" target="_blank">@yourprofile</a></p>
    </div>
    <div class="address">
      <h2>Our Address</h2>
      <p><i class="fas fa-map-marker-alt"></i> 123 Food Traceability Ave,</p>
      <p>Suite 456,</p>
      <p>City, State, 78910</p>
    </div>
    <div class="working-hours">
      <h2>Working Hours</h2>
      <p><i class="fas fa-clock"></i> <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
      <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
      <p><strong>Sunday:</strong> Closed</p>
    </div>
    <div class="social-media">
      <h2>Follow Us</h2>
      <a href="https://www.instagram.com/yourprofile" target="_blank" class="social-link"><i class="fab fa-instagram"></i> Instagram</a>
      <a href="https://www.facebook.com/yourprofile" target="_blank" class="social-link"><i class="fab fa-facebook"></i> Facebook</a>
      <a href="https://www.twitter.com/yourprofile" target="_blank" class="social-link"><i class="fab fa-twitter"></i> Twitter</a>
      <a href="https://www.linkedin.com/yourprofile" target="_blank" class="social-link"><i class="fab fa-linkedin"></i> LinkedIn</a>
      <a href="https://www.youtube.com/yourprofile" target="_blank" class="social-link"><i class="fab fa-youtube"></i> YouTube</a>
      <a href="https://www.pinterest.com/yourprofile" target="_blank" class="social-link"><i class="fab fa-pinterest"></i> Pinterest</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage'
};
</script>

<style scoped>
.contact-container {
  text-align: center;
  font-family: Arial, sans-serif;
  padding: 20px;
  background: linear-gradient(to right, #d7f3f4, #6fbcbe);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out;
}

.contact-container h1, .contact-container h2 {
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: #2c3e50;
  text-shadow: 1px 1px 2px #000;
}

.contact-details, .address, .working-hours, .social-media {
  margin: 20px 0;
  line-height: 1.6;
  color: #34495e;
}

.contact-details a, .social-media a {
  color: #16a085;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-details a:hover, .social-media a:hover {
  color: #0e6655;
}

.social-media {
  margin-top: 20px;
}

.social-link {
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  background-color: #16a085;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.social-link:hover {
  background-color: #000000;
  transform: scale(1.05);
}

.social-link i {
  margin-right: 8px;
  color: white;
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
</style>
