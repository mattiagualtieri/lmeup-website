<template>
  <nav>
    <div class="logo">
        <RouterLink to="/">
            <img src="../assets/logo.png" alt="LMEUP">
        </RouterLink>
    </div>
    <ul class="links">
        <li><RouterLink to="/" class="link">Home</RouterLink></li>
        <li><span class="sep">|</span></li>
        <li><RouterLink to="/eventi" class="link">Eventi</RouterLink></li>
        <li><span class="sep">|</span></li>
        <li><RouterLink to="/brand" class="link">Brand</RouterLink></li>
        <li><span class="sep">|</span></li>
        <li><RouterLink to="/about" class="link">About</RouterLink></li>
    </ul>
  </nav>
</template>

<style scoped>

nav {
    background-color: #0b4b03;
    padding: 5px 20px;
    display: flex;
    align-items: center;
    width: 100%;
}

nav .logo {
    flex: 1;
}

nav .logo img {
    width: 70px;
    margin-left: 10px;
}

.links {
    display: flex;
    align-items: center;
    list-style: none;
    margin-right: 30px;
}

nav .link {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
}

nav .link:hover {
    color: rgb(213, 213, 213);
}

.links li {
    color: white;
    padding: 15px 10px;
    font-size: 20px;
}

.sep {
    color: #073102;
}

</style>