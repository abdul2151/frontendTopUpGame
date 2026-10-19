<template>
    <footer class="footer">
        <div class="container">
            <div class="logo">
                <h1>TopupKu</h1>
                <p>&copy; 2025 TopupKu. All rights reserved.</p>
            </div>
            <nav class="menu">
                <a href="#list">List</a>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#testimoni">Testimoni</a>
            </nav>
            <div class="social-icons">
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.footer {
    background-color: #1e1e2d;
    color: #fff;
    padding: 20px 0;
    text-align: center;
    font-family: 'Poppins', sans-serif;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: auto;
    flex-wrap: wrap;
    padding: 0 20px;
}

.logo h1 {
    font-size: 2em;
    font-weight: bold;
}

.logo p {
    font-size: 0.9em;
    opacity: 0.8;
}

.menu {
    display: flex;
    gap: 20px;
}

.menu a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.menu a:hover {
    color: #f39c12;
}

.social-icons {
    display: flex;
    gap: 15px;
}

.social-icons a {
    color: white;
    font-size: 1.5em;
    transition: transform 0.3s ease-in-out;
}

.social-icons a:hover {
    transform: scale(1.2);
    color: #f39c12;
}

@media (max-width: 768px) {
    .container {
        flex-direction: column;
        text-align: center;
    }
    .menu {
        margin: 15px 0;
    }
}
</style>
