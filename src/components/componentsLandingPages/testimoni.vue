<template>
    <div class="testimoni" id="testimoni">
        <div class="testimonial-container">
      <h2 class="testimonial-title">Testimoni</h2>
      <div class="testimonial-grid">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card">
          <p class="testimonial-message">"{{ testimonial.message }}"</p>
          <div class="testimonial-user">
            <img :src="testimonial.image" alt="User" class="testimonial-image" />
            <div>
              <h3 class="testimonial-name">{{ testimonial.name }}</h3>
              <p class="testimonial-role">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  import man1 from '../../assets/man1.jpg'
  import man2 from '../../assets/man2.jpg'
  import man3 from '../../assets/man3.jpg'
  import man4 from '../../assets/man4.jpg'
  import man5 from '../../assets/man5.jpg'
  import man6 from '../../assets/man6.jpg'

  export default {
    data() {
      return {
        testimonials: [
          {
            name: "John Doe",
            role: "CEO, TechCorp",
            message: "Layanan ini sangat membantu bisnis kami dalam manajemen kehadiran karyawan.",
            image:man1
          },
          {
            name: "Jane Smith",
            role: "HR Manager, StartupX",
            message: "Sangat mudah digunakan dan memiliki fitur yang lengkap!",
            image: man2
          },
          {
            name: "ridho putra",
            role: "manajer",
            message: "Sangat mudah digunakan dan memiliki fitur yang lengkap!",
            image: man3
          },
          {
            name: "jade smith",
            role: "barCoffe",
            message: "Sangat mudah digunakan dan memiliki fitur yang lengkap!",
            image: man4
          },
          {
            name: "ridho putra",
            role: "manajer",
            message: "Sangat mudah digunakan dan memiliki fitur yang lengkap!",
            image:man5
          },
          {
            name: "jade smith",
            role: "barCoffe",
            message: "Sangat mudah digunakan dan memiliki fitur yang lengkap!",
            image:man6
          },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .testimoni{
    width:100%;
    height: 100vh;
    background-color: #d4d4d6;
    background-color: #1e1e2d;
  }
  .testimonial-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 40px 20px;
  }
  
  .testimonial-title {
    color: orange;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
  
  .testimonial-card {
    display: flex;
    flex-direction: column-reverse;
    gap: 20px;
    /* background-color: white; */
    background-color: #2a2a3c;
    color:white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .testimonial-message {
    font-style: italic;
  }
  
  .testimonial-user {
    display: flex;
    align-items: center;
    margin-top: 15px;
  }
  
  .testimonial-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 15px;
    object-fit: cover;
  }
  
  .testimonial-name {
    font-weight: bold;
  }
  
  .testimonial-role {
    font-size: 14px;
  }
  @media (max-width:768px) {
    .testimoni{
        height:100%;
        padding: 10px;
    }
  }
  </style>