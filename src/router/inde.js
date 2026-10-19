import { createRouter, createWebHistory } from 'vue-router';
import registers from '../pages/registers.vue';
import loginPage from '../pages/login.vue';
import Landingpage from '../pages/landingpage.vue';
import dashboardPage from '../pages/dashboard.vue';


// dashboard menu 
import home from '../components/dashboard/home.vue';
import dompet from '../components/dashboard/dompet.vue';
import bantuan from '../components/dashboard/bantuan.vue';
import pengaturan from '../components/dashboard/pengaturan.vue';
import promo from '../components/dashboard/promo.vue';
import riwayatTransaksi from '../components/dashboard/riwayatTransaksi.vue';
import topup from '../components/dashboard/topup.vue';


// profile accounts
import viewProfile from '../components/componentProfile/viewProfile.vue'
import editProfile from '../components/componentProfile/editProfile.vue'
import changeEmail from '../components/componentProfile/changeEmail.vue'
import changePassword from '../components/componentProfile/changePassword.vue'


import dashboardAdmin from '../components/componentDashboardAdmin/navigasiAdmin.vue'
// dashboard admin 
import homeAdmin from '../components/componentDashboardAdmin/homeAdmin.vue'
import order from '../components/componentDashboardAdmin/order.vue'
import settingsAdmin from '../components/componentDashboardAdmin/settingsAdmin.vue'
import statusorder from '../components/componentDashboardAdmin/statusorder.vue'


const routes = [
  { path: '/', component: Landingpage },
  {path:'/loginpage', component:loginPage},
  {path:'/registers', component:registers},
  {path:'/dashboardAdmin',component:dashboardAdmin,
    children:[
      {path:'homeAdmin',name:'homeAdmin',components:homeAdmin},
      {path:'order',name:'order',components:order},
      {path:'settingsAdmin',name:'settingsAdmin',components:settingsAdmin},
      {path:'statusOrder',name:'statusOrder',components:statusorder},
    ]
  },
  {
    path:'/dashboard', 
    component:dashboardPage,
    children:[
      {
        path:'home',
        name:'homeDashboard',
        children:[
          {name:'view Profile',path:'viewProfile',component:viewProfile},
          {name:'edit Profile',path:'editProfile',component:editProfile},
          {name:'change password',path:'changePassword',component:changePassword},
          {name:'change email',path:'changeEmail',component:changeEmail}
        ],
        component:home
      },
      {
        path:'dompet',
        name:'dompetDashboard',
        component:dompet
      },
      {
        path:'pengaturan',
        name:'pengaturanDashboard',
        component:pengaturan
      },
      {
        path:'bantuan',
        name:'bantuanDashboard',
        component:bantuan
      },
      {
        path:'promo',
        name:'promoDashboard',
        component:promo
      },
      {
        path:'riwayat',
        name:'riwayatDashboard',
        component:riwayatTransaksi
      },
      {
        path:'topup',
        name:'topupDashboard',
        component:topup
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
