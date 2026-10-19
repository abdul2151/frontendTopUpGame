<template>
  <div class="transaction-history">
    <div class="transactionsSectionOne">
      <!-- Heading Section -->
      <section class="sectionHeading">
        <div class="heading">
          <i class="fa-solid fa-coins"></i>
          <h1>History Report Transaksi</h1>
        </div>
        <p>Last update 12 Feb 2025</p>
      </section>

      <!-- Info Cards Section -->
      <section class="sectionSecond">
        <div class="infoCard" v-for="(data, index) in teksTransactionsHistory" :key="index">
          <h2>{{ data.headingTeks }}</h2>
          <p>{{ data.priceHeading }}</p>
        </div>
      </section>

      <!-- Table Section -->
      <section class="sectionThird">
        <div class="transactionHistorySection">
          <h1>Riwayat Transaksi</h1>
          <p>Daftar transaksi top-up yang telah dilakukan.</p>
        </div>
        <table>
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>Game</th>
              <th>Nominal</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="transaction in transactions" :key="transaction.id">
              <td>{{ transaction.date }}</td>
              <td>{{ transaction.game }}</td>
              <td>Rp {{ transaction.amount.toLocaleString('id-ID') }}</td>
              <td :class="getStatusClass(transaction.status)">{{ transaction.status }}</td>
            </tr>
          </tbody>
        </table> 
      </section>
    </div>

    <!-- Section Two Placeholder -->
    <div class="transactionSectionTwo">
  <div class="summaryCard">
    <h2>Ringkasan Aktivitas</h2>
    <div class="summaryItem">
      <p>Total Sukses</p>
      <div class="progress-bar">
        <div class="progress success" :style="{ width: successRate + '%' }"></div>
      </div>
      <span>{{ successCount }} transaksi</span>
    </div>

    <div class="summaryItem">
      <p>Total Pending</p>
      <div class="progress-bar">
        <div class="progress pending" :style="{ width: pendingRate + '%' }"></div>
      </div>
      <span>{{ pendingCount }} transaksi</span>
    </div>

    <div class="summaryItem">
      <p>Total Gagal</p>
      <div class="progress-bar">
        <div class="progress failed" :style="{ width: failedRate + '%' }"></div>
      </div>
      <span>{{ failedCount }} transaksi</span>
    </div>

    <div class="totalTransaction">
      <h3>Total Transaksi</h3>
      <p>{{ transactions.length }} Transaksi</p>
    </div>
  </div>
</div>

  </div>
</template>

<script>
export default {
  name: "TransactionHistory",
  data() {
    return {
      transactions: [
        { id: 1, date: "2024-04-01", game: "Mobile Legends", amount: 50000, status: "Sukses" },
        { id: 2, date: "2024-04-02", game: "Free Fire", amount: 100000, status: "Pending" },
        { id: 3, date: "2024-04-03", game: "PUBG Mobile", amount: 500000, status: "Gagal" }
      ],
      teksTransactionsHistory: [
        { headingTeks: 'Available Credits', priceHeading: '$143.00' },
        { headingTeks: 'Outstanding', priceHeading: '$59.02' },
        { headingTeks: 'Term', priceHeading: '12 months' }
      ]
    };
  },
  methods: {
    getStatusClass(status) {
      return {
        'success': status === 'Sukses',
        'pending': status === 'Pending',
        'failed': status === 'Gagal'
      };
    }
  },
  computed: {
  successCount() {
    return this.transactions.filter(t => t.status === 'Sukses').length;
  },
  pendingCount() {
    return this.transactions.filter(t => t.status === 'Pending').length;
  },
  failedCount() {
    return this.transactions.filter(t => t.status === 'Gagal').length;
  },
  successRate() {
    return (this.successCount / this.transactions.length) * 100;
  },
  pendingRate() {
    return (this.pendingCount / this.transactions.length) * 100;
  },
  failedRate() {
    return (this.failedCount / this.transactions.length) * 100;
  }
}

};
</script>

<style scoped>
.transaction-history {
  width: 100%;
  min-height: 100vh;
  padding: 30px;
  background: #f5f7fa;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.transactionsSectionOne {
  background: #fff;
  border-radius: 15px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}

.sectionHeading {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.heading {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  text-transform: capitalize;
}

.sectionSecond {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.infoCard {
  background: #f0f2f5;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  transition: transform 0.2s;
}

.infoCard:hover {
  transform: translateY(-5px);
}

.sectionThird {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  overflow-x: auto;
}

.transactionHistorySection h1 {
  font-size: 22px;
  margin-bottom: 5px;
}

.transactionHistorySection p {
  color: #666;
  font-size: 14px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  padding: 12px 15px;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #007bff;
  color: white;
}

tr:hover {
  background-color: #f1f1f1;
}

.success {
  color: green;
  font-weight: bold;
}

.pending {
  color: orange;
  font-weight: bold;
}

.failed {
  color: red;
  font-weight: bold;
}
.transactionSectionTwo {
  background: #fff;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.summaryCard {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.summaryCard h2 {
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
}

.summaryItem {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.progress-bar {
  background: #eee;
  border-radius: 8px;
  height: 10px;
  overflow: hidden;
}

.progress {
  height: 10px;
  border-radius: 8px;
  transition: width 0.5s ease;
}

.progress.success {
  background-color: green;
}

.progress.pending {
  background-color: orange;
}

.progress.failed {
  background-color: red;
}

.totalTransaction {
  background: #f0f2f5;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  margin-top: 20px;
}

.totalTransaction h3 {
  margin-bottom: 5px;
}
@media (max-width: 768px) {
  .transaction-history{
    display: flex;
    flex-direction: column;
  }
}
</style>
