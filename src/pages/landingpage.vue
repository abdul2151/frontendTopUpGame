<template>
    <navigasiComponent></navigasiComponent>
    <homeComponent></homeComponent>
    <menuComponent></menuComponent>
    <testimoniComponent></testimoniComponent>
    <footerComponent></footerComponent>
</template>


<script>
import navigasiComponent from '../components/componentsLandingPages/navigasi.vue'
import homeComponent from '../components/componentsLandingPages/home.vue'
import menuComponent from '../components/componentsLandingPages/menu.vue'
import testimoniComponent from '../components/componentsLandingPages/testimoni.vue'
import footerComponent from '../components/componentsLandingPages/footer.vue'
export default{
    components:{
        navigasiComponent,
        homeComponent,
        menuComponent,
        testimoniComponent,
        footerComponent
    }
}
</script>