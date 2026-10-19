<template>
    <div class="home" id="home">
        <img src="../../assets/gamingg.jpg" alt="" class="imgHeading">
        <div class="teksHome">
            <h1>selamat datang di tokoTopUp</h1>
            <p>kami siap melayanin pemesanan top up anda dengan aman dan cepat</p>
            <button>views</button>
        </div>
    </div>
</template>

<style scoped>
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
.home{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 15px;
}
.teksHome{
    width:50%;
    margin: auto;
    text-align: center;
}
.teksHome h1{
    font-size: 3.5em;
    font-weight: 900;
    text-transform: capitalize;
    margin-bottom: 5px;
}
.teksHome p{
    font-size: 2em;
    font-weight: 150;
    margin-bottom: 10px;
}
 button{
    padding: 10px 20px;
    border-radius: 5px;
    color: white;
    background-color: blue;
    cursor: pointer;
    border: none;
}
.imgHeading{
padding:20px;
    width:50%;
    object-fit: cover;
    margin:auto;
}
@media (max-width: 768px){
    .home{
        padding: 5px 10px;
    }
}
</style>