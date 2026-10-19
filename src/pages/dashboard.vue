<template>
    <div class="dashboardContainer">
        <NavigasiDashboard></NavigasiDashboard>
        <RouterView class='childDashboard'></RouterView>
    </div>
</template>

<script>
import NavigasiDashboard from '../components/dashboard/navigasiDashboard.vue'
import { RouterView } from 'vue-router';
export default{
    data(){
        return{
            isActive:true,
        }
    },
    components:{
        NavigasiDashboard
    }
}
</script>


<style scoped>
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
.dashboardContainer{
    display: grid;
    grid-template-columns: 15% 85%;
    height: 100%;
}
#bars{
    font-size: 3em;
    color: black;
    display: none;
    position: absolute;
    top: 20px;
    right:30px;
  }
@media (max-width: 768px) {
    .dashboardContainer{
       display: flex;
       flex-direction: column;
    }
    .dashboardNavigasi{
      display: none;
    }
    .active{
        display: flex;
        width:100%;
        height: 100%;
        position: absolute;
    }
    #bars{
      display: inline;
      cursor: pointer;
    }
    #active{
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    #noActive{
        display: none;
    }
}

</style>