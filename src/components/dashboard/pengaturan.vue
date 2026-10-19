<template>
  <div class="settings-container">
    <h2>Pengaturan Akun</h2>

    <!-- Section Profil -->
    <div class="settings-section">
      <h3>Profil</h3>
      <div class="form-group">
        <label for="username">Nama Pengguna:</label>
        <input type="text" id="username" v-model="username" />

        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" />
      </div>
    </div>

    <!-- Section Keamanan -->
    <div class="settings-section">
      <h3>Keamanan</h3>
      <div class="form-group">
        <label for="password">Ganti Password:</label>
        <input type="password" id="password" v-model="password" />

        <label>
          <input type="checkbox" v-model="twoFactor" />
          Verifikasi Dua Langkah
        </label>
      </div>
    </div>

    <!-- Section Metode Pembayaran -->
    <div class="settings-section">
      <h3>Metode Pembayaran</h3>
      <div class="form-group">
        <label for="payment-method">Pilih Metode Pembayaran:</label>
        <select id="payment-method" v-model="paymentMethod">
          <option value="bank">Bank Transfer</option>
          <option value="e-wallet">E-Wallet</option>
          <option value="credit-card">Kartu Kredit</option>
        </select>
      </div>
    </div>

    <!-- Tombol Simpan -->
    <button @click="saveSettings" class="save-btn">Simpan Perubahan</button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      twoFactor: false,
      paymentMethod: 'bank'
    };
  },
  methods: {
    saveSettings() {
      alert('Pengaturan berhasil disimpan!');
    }
  }
};
</script>

<style scoped>
.settings-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 30px;
  width: 100%;
  height: 100vh;
  margin: 40px auto;
  background: linear-gradient(135deg, #fdfbfb, #ebedee);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h2 {
  grid-column: 1 / -1;
  text-align: center;
  color: #2c3e50;
  font-size: 28px;
  margin-bottom: 10px;
}

.settings-section {
  background-color: #ffffff;
  border: 1px solid #dfe6e9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
}

h3 {
  margin-bottom: 15px;
  color: #34495e;
  font-size: 20px;
  border-bottom: 2px solid #ecf0f1;
  padding-bottom: 5px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-weight: 600;
  color: #2d3436;
}

input,
select {
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 15px;
  transition: border-color 0.3s;
}

input:focus,
select:focus {
  border-color: #2980b9;
  outline: none;
}

input[type="checkbox"] {
  width: auto;
  margin-right: 8px;
}

.save-btn {
  grid-column: 1;
  background-color: #3498db;
  color: white;
  padding: 14px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  height: 100px;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.2);
  margin-top: 10px;
}

.save-btn:hover {
  background-color: #2980b9;
}
</style>
