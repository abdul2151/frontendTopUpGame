<template>
    <nav class="navigasiAdmin">
        <h1>navigasiAdmin</h1>
        <ul>
            <li v-for="(Data,inde) in navigasiAdmin" :key="inde">
                <RouterLink :to="Data.path">{{ Data.name }}</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script>
import {RouterLink} from 'vue-router'
export default{
    data(){
        return{
            navigasiAdmin:[
                {path:'/dashboardAdmin/homeAdmin',name:'home'},
                {path:'/dashboardAdmin/order',name:'order'},
                {path:'/dashboardAdmin/settingsAdmin',name:'settings'},
                {path:'/dashboardAdmin/statusOrder',name:'status order'},
            ]
        }
    }
}
</script>
<style scoped>
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
</style>