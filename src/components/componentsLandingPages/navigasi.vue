<template>
    <div class="navigasi">
        <img src="" class="imgLogo" alt="">
        <div class="hamburger" @click="toggleMenu">
            <i class="fa-solid fa-bars"></i>
        </div>
        <div :class="['links', { 'active': isMenuOpen }]">
            <a 
            v-for="(data, number) in navigasiLinks" 
            :key="number" 
            :href="data.path"
            @click="closeMenu"
            >{{ data.name }}</a>
            <div class="parentBtn">
            <button class="btn" @click="anchorLogin">login</button>
                <button class="btn" @click="anchorRegister">registers</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false,
            navigasiLinks: [
                { name: 'home', path: '#home' },
                { name: 'list', path: '#list' },
                { name: 'testimoni', path: '#testimoni' },
            ]
        }
    },
    methods: {
        anchorLogin() {
            this.$router.push('/loginpage')
        },
        anchorRegister() {
            this.$router.push('/registers')
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu() {
            this.isMenuOpen = false;
        }
    }
}
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.navigasi {
    width: 100%;
    display: flex;
    padding: 20px 10px;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
     background-color: #1e1e2d;
    /* background-color: rgb(225, 224, 224); */
}
.hamburger {
    display: none;
    font-size: 24px;
    cursor: pointer;
    color: white;
    padding: 5px 10px;
}
.inputSearch {
    display: flex;
    gap: 15px;
    min-width: 300px;
}
.inputSearch input {
    width: 80%;
    padding: 6px;
    border-radius: 5px;
    border: none;
}
.inputSearch button {
    padding: 5px 15px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}
.inputSearch button:hover {
    opacity: .8;
}
.navigasi img {
    width: 50px;
    height: 30px;
}
.links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
}
.links a {
    text-decoration: none;
    color: gray;
    cursor: pointer;
}
.links a:hover {
    opacity: .8;
}
.btn {
    padding: 6px 10px;
    border-radius: 5px;
    border: 1px solid blue;
    color: blue;
    background-color: white;
    cursor: pointer;
    margin-left: 15px;
}
.btn:hover {
    opacity: .8;
}
.parentBtn{
    display: flex;
    padding-right: 20px;
}
/* Responsive Design */
@media (max-width: 768px) {
    .hamburger {
        display: block;
    }
    .links {
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        background: rgb(225, 224, 224);
        display: none;
        flex-direction: column;
        align-items: center;
        padding: 10px 0;
    }
    .links.active {
        display: flex;
    }
    .inputSearch, .btnSignSignUp {
        display: none;
    }
    .parentBtn{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
}
</style>
