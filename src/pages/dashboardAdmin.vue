<template>
    <navigasiAdmin></navigasiAdmin>
    <RouterView></RouterView>
</template>
<script>
import { RouterView } from 'vue-router';
import navigasiAdmin from '../components/componentDashboardAdmin/navigasiAdmin.vue';
export default{
    components:{
        navigasiAdmin
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