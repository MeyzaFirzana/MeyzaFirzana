<template>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/food-traceability">Food Traceability</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBarComponent'
  };
  </script>
  
  <style scoped>
  nav {
    background-color: #42aeb2; /* Green color */
    overflow: hidden;
    padding: 10px 0;
  }
  
  nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
  }
  
  nav ul li {
    margin: 0 10px;
  }
  
  nav ul li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s, transform 0.3s;
  }
  
  nav ul li a:hover {
    background-color: #155724; /* Darker green on hover */
    transform: scale(1.1); /* Slightly enlarge on hover */
  }
  
  @media (max-width: 768px) {
    nav ul {
      flex-direction: column;
      align-items: center;
    }
  
    nav ul li {
      margin: 5px 0;
    }
  }
  </style>
  