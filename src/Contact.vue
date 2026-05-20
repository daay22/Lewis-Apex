<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="contact-page">

    <!-- Header -->
    <div class="page-header">
      <p class="page-eyebrow">We'd Love to Hear From You</p>
      <h1 class="page-title">Get in Touch</h1>
      <p class="page-subtitle">Reach out and a member of our team will get back to you promptly.</p>
    </div>

    <!-- Contact Cards -->
    <div class="container">
      <div class="cards-row">

        <div class="contact-card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
          <p class="card-label">Phone</p>
          <a href="tel:+1XXXXXXXXXX" class="card-value">(XXX) XXX-XXXX</a>
          <p class="card-note">Mon – Fri, 9am – 6pm EST</p>
        </div>

        <div class="contact-card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </div>
          <p class="card-label">Email</p>
          <a href="mailto:skconsult2013@gmail.com" class="card-value">skconsult2013@gmail.com</a>
          <p class="card-note">We'll respond within 1 business day</p>
        </div>

      </div>

      <!-- Bottom note -->
      <div class="bottom-note">
        <p>Prefer to schedule directly? <a href="#" class="inline-link">Book a free consultation →</a></p>
      </div>
    </div>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600&display=swap');

/* ── Base ── */
.contact-page {
  font-family: 'DM Sans', sans-serif;
  color: #1c1b18;
  background: #f7f6f2;
  min-height: 100vh;
  padding-bottom: 80px;
}

/* ── Header ── */
.page-header {
  background: #1a2b5e;
  color: #f7f6f2;
  text-align: center;
  padding: 72px 24px 64px;
}

.page-eyebrow {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #c9a84c;
  margin: 0 0 16px;
}

.page-title {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(40px, 6vw, 64px);
  font-weight: 400;
  margin: 0 0 16px;
  line-height: 1.1;
}

.page-subtitle {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

/* ── Container ── */
.container {
  max-width: 780px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ── Cards ── */
.cards-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 56px;
}

.contact-card {
  background: #ffffff;
  border: 1px solid #e8e5de;
  border-radius: 20px;
  padding: 40px 32px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.card-icon {
  width: 64px;
  height: 64px;
  border-radius: 18px;
  background: rgba(201, 168, 76, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c9a84c;
  margin-bottom: 8px;
}

.card-label {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #9e9b94;
  margin: 0;
}

.card-value {
  font-family: 'DM Serif Display', serif;
  font-size: 24px;
  color: #1a2b5e;
  text-decoration: none;
  line-height: 1.2;
}

.card-value:hover {
  color: #c9a84c;
}

.card-note {
  font-size: 13px;
  color: #9e9b94;
  margin: 0;
}

/* ── Bottom note ── */
.bottom-note {
  text-align: center;
  margin-top: 40px;
  font-size: 15px;
  color: #6b6860;
}

.inline-link {
  color: #1a2b5e;
  font-weight: 600;
  text-decoration: none;
}

.inline-link:hover {
  color: #c9a84c;
}

/* ── Responsive ── */
@media (max-width: 600px) {
  .cards-row {
    grid-template-columns: 1fr;
  }
}
</style>