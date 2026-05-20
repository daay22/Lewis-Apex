<script setup>
</script>

<template>
  <div class="ceo-page">
    <h1 class="ceo-title">Meet the CEO</h1>
    <div class="ceo-container">
      <div class="ceo-image">
        <!-- Replace with your actual image path -->
        <img src="/src/Pictures/Temp.jpg" alt="CEO Image"/>
      </div>

      <div class="ceo-content">
        <p class="ceo-text">
          Shaundace Lewis is the founder of Lewis Apex Holdings, LLC. With more than 20 years of accounting and auditing experience,
          including over 13 years specializing in tax services, she has had the privilege of helping individuals, families, and business
          owners navigate their financial goals with confidence. Her experience spans tax preparation, bookkeeping, advisory services,
          compliance, and financial guidance tailored to each client’s unique needs.
        </p>

        <p class="ceo-text">
          Shaundace earned her Bachelor’s degree in Accounting, building the foundation for a career dedicated to financial excellence,
          integrity, and service. She continued her education at Walden University, where she earned a Master’s degree in Accountancy
          to further strengthen her expertise in tax, accounting, and financial strategy.
        </p>

        <p class="ceo-text">
          She is passionate about helping people and giving back to the community through education, guidance, and trusted financial support.
          She believes accounting is more than numbers — it’s about building relationships, creating financial clarity, and empowering clients
          to make informed decisions for their future.
        </p>

        <p class="ceo-text">
          Unlike seasonal tax providers, she works with clients year-round to provide ongoing support, proactive planning, and personalized
          strategies designed to help them grow and succeed. Her goal is to ensure every client feels informed, valued, and confident knowing
          they have a trusted advisor in their corner.
        </p>

        <p class="ceo-text">
          Whether you are an individual looking for reliable tax preparation or a business owner seeking strategic financial guidance,
          she is committed to delivering professional, responsive, and client-focused service every step of the way.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeetTheCEO",
};
</script>

<style scoped>
.ceo-page {
  background-color: #C1AD06;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
}

.ceo-container {
  display: flex;
  max-width: 1100px;
  gap: 40px;
  align-items: flex-start;
}

.ceo-image img {
  width: 500px;
  height: 700px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.ceo-content {
  flex: 1;
}

.ceo-title {
  color: white;
  font-size: 64px;
  margin-bottom: 30px;
  font-weight: 700;
  text-align: center;
}

.ceo-text {
  color: #1a1a1a;
  line-height: 1.6;
  margin-bottom: 16px;
  font-size: 16px;
}

/* Responsive */
@media (max-width: 768px) {
  .ceo-container {
    flex-direction: column;
    align-items: center;
    text-align: left;
  }

  .ceo-image img {
    width: 100%;
    max-width: 320px;
    height: auto;
  }
}
</style>
