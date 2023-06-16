<template>
  <nav>
    <div class="logo">
        <img src="../assets/logo.png" alt="LMEUP">
    </div>
    <ul class="links">
        <li><RouterLink to="/" class="link">Home</RouterLink></li>
        <li><RouterLink to="/about" class="link">About</RouterLink></li>
    </ul>
  </nav>
</template>

<style scoped>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

nav {
    background-color: #212121;
    padding: 5px 20px;
    display: flex;
    align-items: center;
}

nav .logo {
    flex: 1;
}

nav .logo img {
    width: 100px;
    margin-right: 10px;
} 

nav .link {
    color: white;
}

nav .link:hover {
    color: red;
}

.links {
    display: flex;
    align-items: center;
    list-style: none;
}

.links li {
    padding: 15px 10px;
    font-size: 16px;
}

</style>