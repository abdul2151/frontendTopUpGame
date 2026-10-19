<template>
    <div class="dashboard">
      <div class="navigasiProfile">
        <h1 class="sectionHeading">welcome budi</h1>
        <div class="sectionList">
          <a v-for="(data,inde) in list" :key=inde @click="anchorRouter(data.link)">{{data.name}}</a>
        </div>
      </div>
      <RouterView></RouterView>
      </div>
      <!-- <div class="contentHome">
      <div class="teksDashboard">
        <h1>Selamat Datang di TopUp Game</h1>
        <p>Kelola transaksi dan top-up game dengan mudah.</p>
      </div> 
       <div class="stats">
        <div class="stat-box">
          <h2>Saldo</h2>
          <p>Rp 500.000</p>
        </div>
        <div class="stat-box">
          <h2>Transaksi</h2>
          <p>120</p>
        </div>
        <div class="stat-box">
          <h2>Promo Aktif</h2>
          <p>3</p>
        </div>
      </div> 
       <div class="container-menu" id="list">
      <h2 class="title">TOP UP GAMES</h2>
      <div class="game-list">
        <div class="game-card" v-for="game in games" :key="game.id">
          <img :src="game.image" :alt="game.name" class="game-image" />
          <div class="teksGame">
            <h3 class="game-name">{{ game.name }}</h3>
            <p class="game-date">{{ game.date }}</p>
          </div>
          <button class='game-btn' @click="gameAnchor(game.name)">{{ game.buttonTeks }}</button>
        </div>
      </div>
    </div>
    </div> -->
  </template>
  
  <script>
  import {RouterView} from 'vue-router'
  import menuDashboard from '../../components/componentsLandingPages/menu.vue'
  import cocImg from '../../assets/coc.jpg'
  import bebImg from '../../assets/beb.jpg'
  import carrom from '../../assets/carrom.jpg'
  import luddoGame from '../../assets/ludo.jpg'
  import modernStrike from '../../assets/modernStrike.jpg'
  import gta5 from '../../assets/gta 5.jpg'
  import topElevent from '../../assets/topEleven.jpg'
  import mobileLegends from '../../assets/mobileLegends.jpg'
  import worldWarHeroes from '../../assets/worldWarHeroes.jpg'
  import minecraft from '../../assets/minecraft.jpg'
  import ashpal from '../../assets/ashpal.jpg'
  import ball from '../../assets/8ball.jpg'


  export default {
    data(){
      return{
        games: [
          { id: 1, name: "Clash of Clans", date: "Sep 14, 2023", image:cocImg,buttonTeks:'mulai dari 100.00' },
          { id: 2, name: "Be The King: Judge Destiny", date: "Sep 14, 2023", image: bebImg,buttonTeks:'mulai dari 100.00' },
          { id: 3, name: "Carrom Gold", date: "Sep 14, 2023", image: carrom,buttonTeks:'mulai dari 100.00' },
          { id: 4, name: "Ludo Club", date: "Sep 14, 2023", image:luddoGame,buttonTeks:'mulai dari 100.00' },
          { id: 5, name: "Modern Strike", date: "Sep 09, 2023", image: modernStrike,buttonTeks:'mulai dari 100.00' },
          { id: 6, name: "Grand Theft Auto V", date: "Sep 09, 2023", image: gta5,buttonTeks:'mulai dari 100.00' },
          { id: 7, name: "Top Eleven", date: "Sep 09, 2023", image:topElevent,buttonTeks:'mulai dari 100.00' },
          { id: 8, name: "Mobile Legends", date: "Sep 09, 2023", image: mobileLegends,buttonTeks:'mulai dari 100.00' },
          { id: 9, name: "World War Heroes", date: "Sep 09, 2023", image:worldWarHeroes,buttonTeks:'mulai dari 100.00'},
          { id: 10, name: "Minecraft", date: "Sep 09, 2023", image: minecraft,buttonTeks:'mulai dari 100.00' },
          { id: 11, name: "Asphalt 9: Legends", date: "Sep 09, 2023", image:ashpal,buttonTeks:'mulai dari 100.00' },
          { id: 12, name: "8 Ball Pool", date: "Sep 09, 2023", image: ball,buttonTeks:'mulai dari 100.00' }
        ],
        list:[
          {name:'Profile',link:'/dashboard/home/viewProfile',icon:''},
          {name:'change password',link:'/dashboard/home/changePassword',icon:''},
          {name:'change email',link:'/dashboard/home/changeEmail',icon:''}
        ]
      }
    },
    methods:{
        gameAnchor(data){
          alert(data)
        },
        anchorRouter(path){
          this.$router.push(path)
        }
      },
    components:{
      menuDashboard
    },
  };
  </script>
  
  <style scoped>
  .dashboard {
    width:100%;
    height: 100vh;
    background: rgb(232, 232, 232);
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .navigasiProfile{
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1e1e2d;
    color: white;
  }
  .sectionHeading{
    width: 300px;
    font-size: 2em;
    text-align: start;
    padding: 20px 0 0 20px;
    text-transform: capitalize;
    font-weight: 1000;
  }
  .sectionList{
    width:100%;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 30px;
  }
  .sectionList a{
    font-size: 1em;
    border-radius: 5px;
    border: none;
    text-transform: capitalize;
    cursor: pointer;
  }
  .sectionList a:hover{
    opacity: .8;
  }
  /* h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 16px;
    color: #555;
  }
  
  .stats {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  
  .stat-box {
    background: white;
    padding: 15px;
    border-radius: 8px;
    width: 30%;
  }
  
  .stat-box h2 {
    font-size: 20px;
    color: #007bff;
  }
  
  .stat-box p {
    font-size: 16px;
    color: #333;
  }
  .banner{
    width:100%;
    height:50vh;
  }
  .container-menu {
    width: 100%;
    height: 50vh;
    text-align: center;
    background-color: #1e1e2d;
    background-color: white;
    padding: 20px;
    color: black;
  }
  .title {
    color: black;
    font-size: 24px;
    font-weight: bold;
  }
  .game-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 15px;
    padding: 20px;
  }
  .game-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #2a2a3c;
    background-color: white;
   box-shadow: 0 0  1px 1px gray;
    padding: 10px;
    border-radius: 8px;
    text-align: center;
  }
  .game-image {
    width: 100%;
    border-radius: 5px;
  }
  .game-name {
    font-size: 14px;
    font-weight: bold;
    margin-top: 5px;
  }
  .game-date {
    font-size: 12px;
    color: #bbb;
  }
  .game-btn{
    padding: 6px 10px;
    background-color: blue;
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
  .game-btn:hover{
    opacity: .8;
  }
  .teksGame{
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  @media (max-width: 768px){
    .container{
      height: 100%;
      padding: 10px 0;
    }
  } */
  </style>