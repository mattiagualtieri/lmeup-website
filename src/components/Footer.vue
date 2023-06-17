<template>
  <nav>
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
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

nav {
    background-color: #0b4b03;
    padding: 5px 20px;
    display: flex;
    align-items: center;
    width: auto;
}

.links {
    display: flex;
    align-items: center;
    list-style: none;
    margin-right: 30px;
}

nav .link {
    color: white;
    font-family: 'Poppins', sans-serif;
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