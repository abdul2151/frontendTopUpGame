<template>
    <div class="help-container">
      <h2>Bantuan & Dukungan</h2>
  
      <!-- FAQ Section -->
      <div class="faq-section">
        <h3>Pertanyaan yang Sering Diajukan</h3>
        <div class="faq-item" v-for="(item, index) in faqs" :key="index">
          <div class="faq-question" @click="toggleAnswer(index)">
            <strong>{{ item.question }}</strong>
          </div>
          <div v-if="item.showAnswer" class="faq-answer">
            {{ item.answer }}
          </div>
        </div>
      </div>
  
      <!-- Contact Support Section -->
      <div class="contact-support">
        <h3>Hubungi Kami</h3>
        <button @click="openChat" class="chat-btn">Mulai Chat</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        faqs: [
          {
            question: 'Bagaimana cara top-up saldo?',
            answer: 'Untuk top-up saldo, pilih game yang ingin kamu top-up, pilih nominal, dan pilih metode pembayaran.',
            showAnswer: false,
          },
          {
            question: 'Apa metode pembayaran yang diterima?',
            answer: 'Kami menerima bank transfer, e-wallet, dan kartu kredit sebagai metode pembayaran.',
            showAnswer: false,
          },
          {
            question: 'Bagaimana cara mengubah informasi akun saya?',
            answer: 'Kamu bisa mengubah informasi akun melalui menu Pengaturan.',
            showAnswer: false,
          },
        ],
      };
    },
    methods: {
      toggleAnswer(index) {
        this.faqs[index].showAnswer = !this.faqs[index].showAnswer;
      },
      openChat() {
        alert('Mulai chatting dengan customer support...');
      },
    },
  };
  </script>
  
  <style scoped>
.help-container {
  max-width: 800px;
  height:100vh;
  margin: 40px auto;
  padding: 30px;
  background: linear-gradient(135deg, #fdfbfb, #ebedee);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
  font-size: 28px;
}

.faq-section {
  margin-bottom: 40px;
}

.faq-item {
  background-color: #ffffff;
  border: 1px solid #dfe6e9;
  border-radius: 8px;
  padding: 15px 20px;
  margin-bottom: 15px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03);
}

.faq-item:hover {
  transform: scale(1.01);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
}

.faq-question {
  cursor: pointer;
  color: #2980b9;
  font-size: 18px;
}

.faq-answer {
  margin-top: 10px;
  color: #555;
  font-size: 16px;
  line-height: 1.5;
  padding-left: 10px;
  border-left: 3px solid #2980b9;
}

.contact-support {
  text-align: center;
}

.chat-btn {
  background-color: #3498db;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 10px rgba(52, 152, 219, 0.2);
}

.chat-btn:hover {
  background-color: #2980b9;
}

  </style>
  