<template>
  <div class="containerLayout">
    <div class="topupContainer">
      <div class="topupTeks">
        <h1>Top Up Game</h1>
        <p>Pilih game dan nominal top-up yang diinginkan.</p>
      </div>
      <div class="formAccording">
        <div class="form-group">
        <label for="game">Pilih Game</label>
        <select id="game" v-model="selectedGame">
          <option v-for="game in games" :key="game" :value="game" >{{ game }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="amount">Nominal Top-Up</label>
        <select id="amount" v-model="selectedAmount">
          <option v-for="amount in amounts" :key="amount" :value="amount">Rp  {{ amount }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="methodAmount">metode Top-Up</label>
        <select id="methodAmount" v-model="selectedMetodeAmount">
          <option v-for="methodeAmountGame in metodeAmount" :key="methodeAmountGame" :value="methodeAmountGame"> {{ methodeAmountGame }}</option>
        </select>
      </div>
      </div>
    </div>
    <div class="deskripsiTopup">
      <h1>deksripsi top up</h1>
      <div class="teks">
        <b>nama game :{{ selectedGame }} </b>
        <b>biaya : RP. {{ selectedAmount }} </b>
        <b>jenis pembayaran : {{ selectedMetodeAmount }} </b>
        <button @click="confirmTopUp">Top Up Sekarang</button>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: "TopUpComponent",
    data() {
      return {
        games: ["Mobile Legends", "PUBG Mobile", "Free Fire", "Genshin Impact"],
        amounts: [10000, 50000, 100000, 500000],
        metodeAmount:['bank bri','bank bca','ovo','gopay','dana','qris'],
        selectedGame: "Mobile Legends",
        selectedAmount: 10000,
        selectedMetodeAmount:'gopay'
      };
    },
    methods: {
      confirmTopUp() {
        alert(`Top-Up ${this.selectedGame} sebesar Rp ${this.selectedAmount} berhasil!`);
      }
    }
  };
  </script>
  
  <style scoped>
.containerLayout {
  width: 100%;
  min-height: 100vh;
  background: #f9fafb;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 40px;
  box-sizing: border-box;
}

.topupContainer, .deskripsiTopup {
  background: white;
  border-radius: 16px;
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  align-items: start;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.topupContainer:hover, .deskripsiTopup:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.topupTeks h1, .deskripsiTopup h1 {
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
  text-transform: capitalize;
  text-align: start;
}

.topupTeks p {
  font-size: 16px;
  color: #666;
}

.formAccording {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  width: 100%;
}

label {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
  display: block;
  color: #555;
}

select {
  width: 100%;
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: #fff;
  font-size: 14px;
  transition: border-color 0.3s;
}

select:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
}

.teks {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
}

.teks b {
  font-size: 16px;
  color: #444;
}

button {
  background: #007bff;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
  margin-top: 20px;
}

button:hover {
  background: #0056b3;
}
</style>
