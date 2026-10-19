<template>
  <div>
    <!-- Hamburger icon for mobile -->
    <div class="hamburger" @click="toggleSidebar">☰</div>

    <div class="container" :class="{ active: isSidebarOpen }">
      <aside class="sidebar">
        <div class="logo">TopUp Game</div>
        <nav>
          <ul>
            <li v-for="item in menuItems" :key="item.name">
              <RouterLink class="nav-link" :to="item.path" active-class="active-link" exact>
                <span class="nav-icon">{{ item.icon }}</span>
                <span class="nav-text">{{ item.name }}</span>
              </RouterLink>
            </li>
          </ul>
        </nav>
        <a class="anchorLogout" href="" @click="anchorLogout">logout</a>
      </aside>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isSidebarOpen: false,
      menuItems: [
        { name: 'Dashboard', path: '/dashboard/home/viewProfile', icon: '🏠' },
        { name: 'Top Up', path: '/dashboard/topup', icon: '💰' },
        { name: 'Riwayat Transaksi', path: '/dashboard/riwayat', icon: '📜' },
        { name: 'Dompet', path: '/dashboard/dompet', icon: '👛' },
        { name: 'Bantuan', path: '/dashboard/bantuan', icon: '❓' },
        { name: 'Pengaturan', path: '/dashboard/pengaturan', icon: '⚙️' }
      ]
    };
  },
  methods: {
    anchorLogout(e) {
      e.preventDefault();
      this.$router.push('/loginpage');
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }
};

</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e1e2d;
  transition: transform 0.3s ease;
}

/* Sidebar style */
.sidebar {
  width: 100%;
  color: #fff;
  background-color: #1e1e2d;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  height: 100vh;
  z-index: 10;
}

.logo {
  font-size: 2em;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
  position: absolute;
  top: 50px;
  left: 25px;
}

nav ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  text-decoration: none;
  color: white;
  border-radius: 8px;
  transition: background 0.3s, transform 0.2s;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(4px);
}

.active-link {
  background: rgba(255, 255, 255, 0.2);
}

.anchorLogout {
  position: absolute;
  bottom: 20px;
  left: 6%;
  font-size: 1.1em;
  text-decoration: none;
  color: white;
  cursor: pointer;
}

/* Hamburger button */
.hamburger {
  display: none;
  font-size: 2em;
  color: white;
  padding: 15px;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 768px) {
  .hamburger {
    display: block;
    background-color: #1e1e2d;
    position: fixed;
    top: 120px;
    left: 10px;
    z-index: 20;
  }

  .container {
    position: fixed;
    top: 0;
    left: -100%;
    width: 70%;
    height: 100vh;
    background-color: #1e1e2d;
    transition: left 0.3s ease;
    z-index: 15;
  }

  .container.active {
    left: 0;
  }

  .logo {
    position: static;
    text-align: center;
    margin-bottom: 30px;
  }
}

</style>