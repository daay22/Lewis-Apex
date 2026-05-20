<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="landing-page">

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <img src="/src/Pictures/Hero1.jpg" alt="Hero Background" />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <p class="hero-eyebrow">Lewis Apex Holdings LLC</p>
        <h1 class="hero-title">Tax Strategy You Can Trust.<br>Results You Can Measure.</h1>
        <p class="hero-sub">Schedule a consult today — we'll handle the numbers.</p>
        <a href="#" class="hero-btn">Schedule Now</a>
      </div>
      <div class="hero-scroll-hint">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
      </div>
    </section>

    <!-- About / Services Section -->
    <section class="about-section">
      <div class="container">

        <div class="about-grid">

          <!-- Main copy card -->
          <div class="about-main">
            <p class="section-eyebrow">Who We Are</p>
            <h2 class="section-title">Comprehensive Tax &amp; Business Consulting</h2>
            <p class="about-text">
              At Lewis Apex, we offer more than just tax preparation — we provide a complete financial support system built around accuracy, strategy, and peace of mind. Our services include professional tax filing and full-service bookkeeping tailored to individuals and small businesses alike.
            </p>
            <p class="about-text">
              We understand that financial clarity is essential at every stage of life, whether you're growing a business, managing household finances, or planning ahead for the future. With a focus on precision and reliability, we help you stay organized, compliant, and confident in your financial decisions.
            </p>
            <router-link to="/meet-ceo" class="about-btn">Meet Our CEO</router-link>
          </div>

          <!-- Service cards -->
          <div class="service-cards">
            <router-link to="/bookkeeping" class="service-card">
              <div class="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              </div>
              <div>
                <h4 class="service-name">Book Keeping</h4>
                <p class="service-desc">Professional bookkeeping services to keep your finances organized and compliant year-round.</p>
              </div>
            </router-link>

            <router-link to="/tax-services" class="service-card">
              <div class="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              </div>
              <div>
                <h4 class="service-name">Tax Preparation</h4>
                <p class="service-desc">Expert tax preparation for individuals and businesses — accurate, strategic, and stress-free.</p>
              </div>
            </router-link>
          </div>

        </div>
      </div>
    </section>

    <!-- Reviews Section -->
    <section class="reviews-section">
      <div class="container">
        <p class="section-eyebrow centered">Client Testimonials</p>
        <h2 class="section-title centered">What Our Clients Say</h2>

        <div class="reviews-grid">

          <div class="review-card">
            <div class="review-stars">★★★★★</div>
            <p class="review-text">"Exceptional service and attention to detail. Lewis Apex made tax season completely stress-free!"</p>
            <!--<div class="review-author">
              <div class="author-avatar">MR</div>
              <span class="author-name">Michael R.</span>
            </div>-->
          </div>

          <div class="review-card review-card--featured">
            <div class="review-stars">★★★★★</div>
            <p class="review-text">"Professional, knowledgeable, and always available to answer questions. Highly recommend!"</p>
            <!--<div class="review-author">
              <div class="author-avatar">JD</div>
              <span class="author-name">John D.</span>
            </div>-->
          </div>

          <div class="review-card">
            <div class="review-stars">★★★★★</div>
            <p class="review-text">"The best tax preparation experience I've ever had. They truly care about their clients."</p>
            <!--<div class="review-author">
              <div class="author-avatar">MR</div>
              <span class="author-name">Michael R.</span>
            </div>-->
          </div>

        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-inner">
          <div>
            <h2 class="cta-title">Ready to take control of your finances?</h2>
            <p class="cta-sub">Book a free consultation and let's build a plan together.</p>
          </div>
          <a href="#" class="hero-btn">Schedule Now</a>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600&display=swap');

/* ── Brand tokens ── */
/* ── Base ── */
.landing-page {
  font-family: 'DM Sans', sans-serif;
  color: #1c1b18;
  background: #fff;
}

.container {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ── Hero ── */
.hero-section {
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    rgba(17, 30, 69, 0.88) 0%,
    rgba(17, 30, 69, 0.65) 60%,
    rgba(17, 30, 69, 0.3) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 1080px;
  margin: 0 auto;
  padding: 100px 24px 80px;
  width: 100%;
}

.hero-eyebrow {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #c9a84c;
  margin: 0 0 20px;
}

.hero-title {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(36px, 5.5vw, 60px);
  font-weight: 400;
  color: #fff;
  line-height: 1.15;
  margin: 0 0 24px;
  max-width: 680px;
}

.hero-sub {
  font-size: 17px;
  color: rgba(255,255,255,0.75);
  margin: 0 0 36px;
}

.hero-btn {
  display: inline-block;
  background: #c9a84c;
  color: #111e45;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.03em;
  padding: 14px 32px;
  border-radius: 100px;
  text-decoration: none;
}

.hero-btn:hover {
  background: #dfc278;
}

.hero-scroll-hint {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255,255,255,0.4);
  z-index: 1;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(6px); }
}

/* ── Section shared ── */
.section-eyebrow {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #c9a84c;
  margin: 0 0 14px;
}

.section-eyebrow.centered { text-align: center; }

.section-title {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 400;
  color: #1a2b5e;
  margin: 0 0 28px;
  line-height: 1.2;
}

.section-title.centered { text-align: center; }

/* ── About Section ── */
.about-section {
  background: #f7f6f2;
  padding: 88px 0;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: start;
}

.about-text {
  font-size: 15px;
  color: #6b6860;
  margin: 0 0 16px;
}

.about-btn {
  display: inline-block;
  margin-top: 12px;
  border: 2px solid #1a2b5e;
  color: #1a2b5e;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 26px;
  border-radius: 100px;
  text-decoration: none;
}

.about-btn:hover {
  background: #1a2b5e;
  color: #fff;
}

/* ── Service Cards ── */
.service-cards {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.service-card {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  background: #fff;
  border: 1px solid #e8e5de;
  border-radius: 16px;
  padding: 24px;
  text-decoration: none;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.service-card:hover {
  box-shadow: 0 8px 28px rgba(26, 43, 94, 0.09);
  transform: translateY(-2px);
}

.service-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(201, 168, 76, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c9a84c;
  flex-shrink: 0;
}

.service-name {
  font-size: 16px;
  font-weight: 600;
  color: #1a2b5e;
  margin: 0 0 6px;
}

.service-desc {
  font-size: 14px;
  color: #6b6860;
  line-height: 1.6;
  margin: 0;
}

/* ── Reviews Section ── */
.reviews-section {
  padding: 88px 0;
  background: #fff;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 48px;
}

.review-card {
  background: #f7f6f2;
  border: 1px solid #e8e5de;
  border-radius: 16px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.review-card--featured {
  background: #1a2b5e;
  border-color: #1a2b5e;
}

.review-card--featured .review-text {
  color: rgba(255,255,255,0.88);
}

.review-card--featured .review-stars {
  color: #c9a84c;
}

.review-card--featured .author-name {
  color: rgba(255,255,255,0.7);
}

.review-card--featured .author-avatar {
  background: rgba(201, 168, 76, 0.15);
  color: #c9a84c;
}

.review-stars {
  color: #c9a84c;
  font-size: 16px;
  letter-spacing: 2px;
}

.review-text {
  font-size: 14px;
  color: #6b6860;
  line-height: 1.7;
  font-style: italic;
  flex: 1;
}

.review-author {
  display: flex;
  align-items: center;
  gap: 10px;
}

.author-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(201, 168, 76, 0.15);
  color: #c9a84c;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.author-name {
  font-size: 14px;
  font-weight: 600;
  color: #6b6860;
}

/* ── CTA Banner ── */
.cta-section {
  background: #1a2b5e;
  padding: 64px 0;
}

.cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}

.cta-title {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(22px, 3vw, 32px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 8px;
}

.cta-sub {
  font-size: 15px;
  color: rgba(255,255,255,0.6);
  margin: 0;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .reviews-grid {
    grid-template-columns: 1fr;
  }

  .cta-inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
