<template>
    <div class="promo-container">
      <h1>Promo Spesial</h1>
      <p>Dapatkan promo menarik untuk setiap top-up game!</p>
  
      <div class="promo-list">
        <div v-for="promo in promos" :key="promo.id" class="promo-item">
          <h2>{{ promo.title }}</h2>
          <p>{{ promo.description }}</p>
          <span class="discount">Diskon: {{ promo.discount }}%</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PromoComponent",
    data() {
      return {
        promos: [
          { id: 1, title: "Bonus 50% Diamond", description: "Dapatkan bonus 50% diamond untuk top-up Mobile Legends.", discount: 50 },
          { id: 2, title: "Cashback 30%", description: "Nikmati cashback 30% untuk setiap transaksi di atas Rp 100.000.", discount: 30 },
          { id: 3, title: "Promo Free Fire", description: "Top-up Free Fire sekarang dan dapatkan hadiah menarik!", discount: 20 },
          { id: 4, title: "Bonus 50% Diamond", description: "Dapatkan bonus 50% diamond untuk top-up Mobile Legends.", discount: 50 },
          { id: 5, title: "Cashback 30%", description: "Nikmati cashback 30% untuk setiap transaksi di atas Rp 100.000.", discount: 30 },
          { id: 6, title: "Promo Free Fire", description: "Top-up Free Fire sekarang dan dapatkan hadiah menarik!", discount: 20 }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .promo-container {
    width:100%;
    height: 100vh;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;

  }
  
  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 16px;
    color: #555;
  }
  
  .promo-list {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(450px,1fr));
    grid-gap: 10px;
  }
  
  .promo-item {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 15px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    font-size: 18px;
    color: #007bff;
  }
  
  .discount {
    display: block;
    font-size: 16px;
    font-weight: bold;
    color: #28a745;
    margin-top: 5px;
  }
  </style>
  