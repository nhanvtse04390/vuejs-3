<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <img
          src="public/1600w-uMgeVjXRk3M.webp"
          alt="Cold Storage"
          class="hero-image"
      />
<!--      <div class="hero-content uppercase">-->
<!--        <h1 class="hero-title">Chào mừng đến với kho lạnh Cao Nguyên</h1>-->
<!--        <h1 class="hero-title">Hệ thống quản lý</h1>-->
<!--        <p class="hero-subtitle">-->
<!--          Quản lý hiệu quả, đáng tin cậy và an toàn cho nhu cầu lưu trữ lạnh của bạn.-->
<!--        </p>-->
<!--      </div>-->
    </section>

    <!-- Introduction Section -->
    <section class="intro">
      <h2>About Our Cold Storage</h2>
      <p>
        Our state-of-the-art cold storage facility ensures the highest standards
        of temperature control and storage efficiency. We provide comprehensive
        solutions for businesses looking to manage their inventory with precision
        and care. Whether it’s perishable goods, pharmaceuticals, or specialized
        products, our system is designed to meet all your needs.
      </p>
      <p>
        Our services include real-time monitoring, easy access, and advanced
        analytics to help you optimize your storage and reduce operational
        costs.
      </p>
    </section>

    <!-- Services Section -->
    <section class="services">
      <h2>Our Services</h2>
      <div class="service-cards">
        <div class="service-card">
          <img
              src="https://via.placeholder.com/400x250"
              alt="Service 1"
              class="service-image"
          />
          <h3 class="service-title">Temperature Control</h3>
          <p class="service-description">
            Precise temperature management to keep your products safe.
          </p>
        </div>
        <div class="service-card">
          <img
              src="https://via.placeholder.com/400x250"
              alt="Service 2"
              class="service-image"
          />
          <h3 class="service-title">Inventory Tracking</h3>
          <p class="service-description">
            Real-time tracking of your inventory to ensure efficiency.
          </p>
        </div>
        <div class="service-card">
          <img
              src="https://via.placeholder.com/400x250"
              alt="Service 3"
              class="service-image"
          />
          <h3 class="service-title">Security & Monitoring</h3>
          <p class="service-description">
            Advanced security measures and 24/7 monitoring of your goods.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth',
});
</script>

<style scoped>
.home-page {
  font-family: 'Arial', sans-serif;
  color: #333;
  padding: 20px;
}

.hero {
  position: relative;
  text-align: center;
  margin-bottom: 40px;
}

.hero-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 20px;
  border-radius: 10px;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
  white-space: nowrap;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-top: 10px;
}

.intro {
  text-align: center;
  margin: 40px 0;
}

.intro h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.intro p {
  font-size: 1rem;
  line-height: 1.6;
}

.services {
  text-align: center;
  margin: 40px 0;
}

.service-cards {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.service-card {
  background: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: 30%;
  margin-bottom: 20px;
  text-align: left;
}

.service-image {
  width: 100%;
  height: auto;
  border-radius: 6px;
  margin-bottom: 15px;
}

.service-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.service-description {
  font-size: 1rem;
  line-height: 1.5;
}
</style>
