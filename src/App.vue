<script setup>
</script>

<template>
  <!-- Header -->
  <header class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <img src="/src/Pictures/Logo.png" alt="Lewis Apex Logo" height="100">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/meet-ceo" class="nav-link">Meet Our CEO</router-link>
          </li>
          <li class="nav-item">
             <router-link to="/tax-services" class="nav-link">Tax Preparation Services</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/bookkeeping" class="nav-link">Book Keeping Services</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact Us</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>

  <!-- Router View -->
  <router-view></router-view>
</template>

<style scoped>
.navbar-brand img {
  max-height: 100px;
}
</style>
