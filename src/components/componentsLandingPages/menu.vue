<template>
    <div class="container" id="list">
      <h2 class="title">TOP UP GAMES</h2>
      <div class="game-list">
        <div class="game-card" v-for="game in games" :key="game.id">
          <img :src="game.image" :alt="game.name" class="game-image" />
          <h3 class="game-name">{{ game.name }}</h3>
          <p class="game-date">{{ game.date }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
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
    data() {
      return {
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
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .container {
    height: 100%;
    text-align: center;
    background-color: #1e1e2d;
    padding: 40px 20px;
    color: white;
  }
  .title {
    color: orange;
    font-size: 24px;
    font-weight: bold;
  }
  .game-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    padding: 20px;
  }
  .game-card {
    background-color: #2a2a3c;
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
  @media (max-width: 768px){
    .container{
      height: 100%;
      padding: 10px 0;
    }
  }
  </style>
  