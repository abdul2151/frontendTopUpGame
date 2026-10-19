<template>
  <div class="wallet-container">
    <h2>Dompet Saya</h2>

    <div class="wallet-grid">
      <!-- Card Saldo -->
      <div class="wallet-balance card">
        <h3>Saldo Saat Ini</h3>
        <div class="balance-amount">
          <span>Rp{{ balance.toLocaleString() }}</span>
        </div>
      </div>

      <!-- Card Riwayat Transaksi -->
      <div class="transaction-history card">
        <h3>Riwayat Transaksi</h3>
        <ul v-if="transactions.length">
          <li
            v-for="(transaction, index) in transactions"
            :key="index"
            class="transaction-item"
          >
            <div class="transaction-date">{{ transaction.date }}</div>
            <div
              class="transaction-amount"
              :class="{ positive: transaction.amount >= 0, negative: transaction.amount < 0 }"
            >
              {{ transaction.amount >= 0 ? '+' : '' }}Rp{{ Math.abs(transaction.amount).toLocaleString() }}
            </div>
          </li>
        </ul>
        <p v-else>Tidak ada transaksi.</p>
      </div>

      <!-- Card Isi Ulang -->
      <div class="recharge card">
        <h3>Isi Ulang Saldo</h3>
        <div class="recharge-form">
          <input type="number" v-model="topUpAmount" placeholder="Masukkan jumlah top-up" />
          <button @click="recharge" class="recharge-btn">Top Up</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      balance: 100000,
      topUpAmount: 0,
      transactions: [
        { date: '2025-04-01', amount: 50000 },
        { date: '2025-03-28', amount: -20000 },
        { date: '2025-03-25', amount: 100000 },
      ]
    };
  },
  methods: {
    recharge() {
      if (this.topUpAmount > 0) {
        this.balance += this.topUpAmount;
        this.transactions.unshift({ // tampilkan terbaru di atas
          date: new Date().toLocaleDateString('id-ID'),
          amount: this.topUpAmount
        });
        this.topUpAmount = 0;
        alert('Saldo berhasil diisi ulang!');
      } else {
        alert('Masukkan jumlah yang valid.');
      }
    }
  }
};
</script>
<style scoped>
.wallet-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  height: 100vh;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #007bff;
}

.wallet-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  padding: 20px;
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}

.wallet-balance {
  text-align: center;
}

.balance-amount {
  margin-top: 15px;
  font-size: 28px;
  font-weight: bold;
  color: #28a745;
}

.transaction-history ul {
  margin-top: 15px;
  padding: 0;
  list-style: none;
}

.transaction-item {
  display: flex;
  justify-content: space-between;
  background-color: #f7f9fc;
  margin-bottom: 10px;
  padding: 10px 15px;
  border-radius: 8px;
}

.transaction-date {
  color: #6c757d;
}

.transaction-amount {
  font-weight: bold;
}

.transaction-amount.positive {
  color: #28a745;
}

.transaction-amount.negative {
  color: #dc3545;
}

.recharge-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
}

.recharge input {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 16px;
}

.recharge-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}

.recharge-btn:hover {
  background-color: #0056b3;
}
</style>
