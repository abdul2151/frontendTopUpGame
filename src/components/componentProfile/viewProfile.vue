<template>
    <div class="profile-container">
      <div class="profile-card">
        <img :src="user.photo" alt="Profile Photo" class="profile-photo" />
        <h2>{{ user.name }}</h2>
        <p class="role">{{ user.role }}</p>
      </div>
      <div class="profile-details">
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>Username:</strong> {{ user.username }}</p>
          <p><strong>Phone:</strong> {{ user.phone }}</p>
          <p><strong>Joined:</strong> {{ user.joinedDate }}</p>
          <button class="edit-btn">Edit Profile</button>
        </div>
    </div>
  </template>
  
  <script>
  import man1 from '../../assets/man1.jpg'
  export default {
    name: 'ProfileView',
    data() {
      return {
        user: {
          name: 'budi',
          role: 'Student',
          email: 'budi@example.com',
          username: 'budi',
          phone: '08123456789',
          joinedDate: '2023-09-15',
          photo: man1 // Ganti dengan path foto asli
        }
      }
    }
  }
  </script>
  
  <style scoped>
.profile-container {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f0f4f8, #d9e2ec);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  box-sizing: border-box;
}

.profile-card {
  background: white;
  padding: 40px 30px;
  width: 100%;
  max-width: 450px;
  border-radius: 20px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.15);
}

.profile-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 5px solid #e0e7ff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

h2 {
  margin-bottom: 5px;
  font-size: 26px;
  color: #333;
}

.role {
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 25px;
  font-weight: 500;
}

.profile-details {
  text-align: left;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.profile-details p {
  font-size: 16px;
  color: #555;
}

.profile-details p strong {
  color: #333;
}

.edit-btn {
  margin-top: 30px;
  padding: 12px 25px;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.2s;
  align-self: center;
}

.edit-btn:hover {
  background-color: #4338ca;
  transform: scale(1.05);
}
</style>
